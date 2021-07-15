import React, { useState, useEffect } from "react";
import "./Video.Styles.scss";
import { AiFillEye } from "react-icons/ai";
import request from "./../../api";
import moment from "moment";
import numeral from 'numeral'
import { LazyLoadImage } from "react-lazy-load-image-component";

const Video = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
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

  const _videoId = id?.videoId || id;

//doing another request again beacuse the search end point doent have some data required by the componenet
  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: _videoId,
        },
      });
      setViews(items[0].statistics.viewCount);
      setDuration(items[0].contentDetails.duration);
    };
    get_video_details();
  }, [_videoId]);

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

  return (
    <div className='video'>
      <div className='video_top'>
        {/* <img src={medium.url} alt='' />
         */}
        <LazyLoadImage src={medium.url} effect='blur' />
        <span className="video_top_duration">{formattedDuration}</span>
      </div>
      <div className='video_title'>{title}</div>
      <div className='video_details'>
        <span>
          <AiFillEye /> {numeral(views).format("0.a")} Views •
        </span>
        <span>{moment(publishedAt).fromNow()}</span>
      </div>
      <div className='video_channel'>
        {/* <img src={channelIcon?.url} alt='' /> */}
        <LazyLoadImage src={channelIcon?.url} effect='blur' />
        <p>{channelTitle}</p>
      </div>
    </div>
  );
};

export default Video;
