import React from 'react'
import { Row, Col } from "react-bootstrap";
import "./WatchPage.styles.scss"
import VideoData from './../../components/VideoData/VideoData.component';
import Comments from './../../components/Comments/Comments.component';
import VideoSide from './../../components/VideoSide/VideoSide.component';

const WatchPage = () => {
    return (
      <Row>
        <Col lg={8}>
          <div className='watch_player'>
            <iframe
              title="video"
              src='https://www.youtube.com/embed/tgbNymZ7vqY'
              frameBorder='0'
              allowFullScreen
              width='100%'
              height='100%'
            ></iframe>
          </div>
          <VideoData/>
          <Comments/>
        </Col>
        <Col lg={4}>
       { [...Array(10)].map(() => <VideoSide/>)}

        </Col>
      </Row>
    );
}

export default WatchPage
