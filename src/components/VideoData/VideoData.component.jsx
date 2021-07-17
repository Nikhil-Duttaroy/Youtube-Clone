import React from 'react'
import "./VideoData.styles.scss"
import moment from 'moment';
import numeral from "numeral";
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import ShowMoreText from 'react-show-more-text'

const VideoData = () => {
    return (
      <div className='video_data py-2'>
        <div className='video_data_top'>
          <h5>Title</h5>
          <div className='d-flex justify-content-between align-items-center py-1'>
            <span>
              {numeral(100000).format("0.a")} Views •
              {moment(2020 - 15 - 9).fromNow()}
            </span>

            <div>
              <span className='mr-3'>
                <MdThumbUp size={26} /> {numeral(100000).format("0.a")}
              </span>
              <span className='mr-3'>
                <MdThumbDown size={26} /> {numeral(100).format("0.a")}
              </span>
            </div>
          </div>
        </div>
        <div className='video_data_channel d-flex justify-content-between align-items-center py-3 my-2 align-items-lg-center'>
          <div className='d-flex'>
            <img
              className='rounded-circle mr-3'
              src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
              alt=''
            />
            <div className='d-flex flex-column'>
              <span>Channel Name</span>
              <span>{numeral(100000).format("0.a")} Subscribers</span>
            </div>
          </div>
              <button className='btn border-0 p-2 m-2'>Subscribe</button>
        </div>
        <div className='video_data_description'>
            <ShowMoreText
               lines={3}
               more='SHOW MORE'
               less='SHOW LESS'
               anchorClass='showMoreText'
               expanded={false}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </ShowMoreText>
          

        </div>
      </div>
    );
}

export default VideoData
