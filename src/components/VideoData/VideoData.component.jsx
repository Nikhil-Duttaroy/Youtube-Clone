import React from 'react'
import "./VideoData.styles.scss"
import moment from 'moment';
import numeral from "numeral";
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import ShowMoreText from 'react-show-more-text'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkSubscriptionStatus, getChannelDetails } from './../../redux/channel/channel.action';

const VideoData = ({
  video: {
    snippet: { channelId, channelTitle, description, title, publishedAt },
    statistics: { viewCount, likeCount, dislikeCount },
  },
  videoId,
}) => {
  //getting some details again because i could not find it  in yt api 
   const { snippet: channelSnippet, statistics: channelStatistics } = useSelector(
   (state) => state.channelDetails.channel
 );
    const subscriptionStatus  = useSelector(
      (state) => state.channelDetails.subscriptionStatus
    );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannelDetails(channelId));
    dispatch(checkSubscriptionStatus(channelId));
  }, [dispatch, channelId]);

  return (
    <div className='video_data py-2'>
      <div className='video_data_top'>
        <h5>{title}</h5>
        <div className='d-flex justify-content-between align-items-center py-1'>
          <span>
            {numeral(viewCount).format("0.a")} Views •{" "}
            {moment(publishedAt).fromNow()}
          </span>

          <div>
            <span className='mr-3'>
              <MdThumbUp size={26} /> {numeral(likeCount).format("0.a")}
            </span>
            <span className='mr-3'>
              <MdThumbDown size={26} /> {numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className='video_data_channel d-flex justify-content-between align-items-center py-3 my-2 align-items-lg-center'>
        <div className='d-flex'>
          <img
            className='rounded-circle mr-3'
            src={channelSnippet?.thumbnails?.default?.url}
            alt={channelTitle}
          />
          <div className='d-flex flex-column'>
            <span>{channelTitle}</span>
            <span>
              {numeral(channelStatistics?.subscriberCount).format("0.a")}{" "}
              Subscribers
            </span>
          </div>
        </div>
        <button
          className={`p-2 m-2 border-0 btn ${subscriptionStatus && "btn-gray"}`}
        >
          {subscriptionStatus ? "Subscribed" : "Subscribe"}
        </button>
      </div>
      <div className='video_data_description'>
        <ShowMoreText
          lines={3}
          more='SHOW MORE'
          less='SHOW LESS'
          anchorClass='showMoreText'
          expanded={false}
        >
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoData
