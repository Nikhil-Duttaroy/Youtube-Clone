import React ,{useState,useEffect} from "react";
import "./VideoSide.styles.scss";

import { Row, Col } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import request from "../../api";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router-dom";

const VideoSide = ({video}) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  
  const seconds = moment.duration(duration).asSeconds();
  const formattedDuration = moment.utc(seconds * 1000).format("mm:ss");

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
    get_video_details();
  }, [id]);

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
const handleClick = () => {
  history.push(`/watch/${id.videoId}`);
};



  return (
    <Row
      className='videoSide m-1 py-2 align-items-center'
      onClick={handleClick}
    >
      <Col xs={6} md={6} className='videoSide_left'>
        <LazyLoadImage
          className=' videoSide_thumbnail'
          src={medium.url}
          effect='blur'
          wrapperClassName='video_thumbnail-wrapper'
        />
        <span className='video_top_duration'>{formattedDuration}</span>
      </Col>
      <Col xs={6} md={6} className='videoSide_right p-0'>
        <p className='videoSide_title mb-1'>{title}</p>
        <div className='videoSide_details'>
          <AiFillEye /> {numeral(views).format("0.a")} Views•{moment(publishedAt).fromNow()}
        </div>
        <div className='videoSlide_channel d-flex align-items-center my-1'>
          {/* <LazyLoadImage
      
            src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
            effect='blur'
          /> */}
          <p className="mb-0">{channelTitle}</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoSide;
