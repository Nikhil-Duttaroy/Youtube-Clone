import React from "react";
import "./VideoSide.styles.scss";

import { Row, Col } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import request from "../../api";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";

const VideoSide = () => {

  const seconds = moment.duration("1256").asSeconds();
  const formattedDuration = moment.utc(seconds * 1000).format("mm:ss");

  return (
    <Row className='videoSide m-1 py-2 align-items-center'>
      <Col xs={6} md={4} className='videoSide_left'>
        <LazyLoadImage
          className=' videoSide_thumbnail'
          src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
          effect='blur'
          wrapperClassName='video_thumbnail-wrapper'
        />
        <span className='video_top_duration'>{formattedDuration}</span>
      </Col>
      <Col xs={6} md={8} className='videoSide_right p-0'>
        <p className='videoSide_title mb-1'>Title Of Video</p>
        <div className='videoSide_details'>
          {numeral(1000000000000).format("0.a")} Views •
          {moment("2018-02-6").fromNow()}
        </div>
        <div className='videoSlide_channel d-flex align-items-center my-1'>
          {/* <LazyLoadImage
      
            src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
            effect='blur'
          /> */}
          <p>Nikhil Duttaroy</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoSide;
