import React ,{useState,useEffect} from "react";
import "./VideoSide.styles.scss";

import { Row, Col } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import request from "../../api";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";
// import SearchPage from './../../pages/SearchPage/SearchPage.component';

const VideoSide = ({ video, SearchPage, subscriberScreen }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails: { high },
      resourceId
    },
  } = video;
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const formattedDuration = moment.utc(seconds * 1000).format("mm:ss");

  const isVideo = !(id.kind === "youtube#channel" || subscriberScreen);
  const thumbnail = !isVideo && "videoSide_thumbnail-channel";

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id.videoId,
        },
      });
      setViews(items[0].statistics.viewCount);
      setDuration(items[0].contentDetails.duration);
    };
    if(isVideo) get_video_details();
  }, [id,isVideo]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);

  const history = useHistory();
  const _channelId = resourceId?.channelId || channelId
  const handleClick = () => {
    isVideo
      ? history.push(`/watch/${id.videoId}`)
      : history.push(`/channel/${_channelId}`);
  };

  return (
    <Row
      className='videoSide m-1 py-2 align-items-center'
      onClick={handleClick}
    >
      <Col
        xs={6}
        md={SearchPage || subscriberScreen ? 4 : 6}
        className='videoSide_left'
      >
        <LazyLoadImage
          className={`videoSide_thumbnail ${thumbnail} `}
          src={high.url}
          effect='blur'
          wrapperClassName='video_thumbnail-wrapper'
        />

        {isVideo && (
          <span className='video_top_duration'>{formattedDuration}</span>
        )}
      </Col>
      <Col
        xs={6}
        md={SearchPage || subscriberScreen ? 8 : 6}
        className='videoSide_right p-0'
      >
        <p className='videoSide_title mb-1'>{title}</p>

        {isVideo && (
          <div className='videoSide_details'>
            <AiFillEye /> {numeral(views).format("0.a")} Views•
            {moment(publishedAt).fromNow()}
          </div>
        )}

        {(SearchPage || subscriberScreen) && (
          <p className='mt-1 videoSide_description'>{description}</p>
        )}

        <div className='videoSide_channel d-flex align-items-center my-1'>
          {isVideo && <LazyLoadImage src={channelIcon?.url} effect='blur' />}
          <p className='mb-0'>{channelTitle}</p>
        </div>
        {
         subscriberScreen &&
          <p className="mt-2">{video.contentDetails.totalItemCount} Videos</p>
        }
      </Col>
    </Row>
  );
};

export default VideoSide;
