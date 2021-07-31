import React from 'react'
import { Row, Col } from "react-bootstrap";
import "./WatchPage.styles.scss"
import VideoData from './../../components/VideoData/VideoData.component';
import Comments from './../../components/Comments/Comments.component';
import VideoSide from './../../components/VideoSide/VideoSide.component';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getVideoById,
  getRelatedVideos,
} from "./../../redux/videos/videos.actions";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


const WatchPage = () => {
  const dispatch = useDispatch()
  const {video ,loading} =useSelector(state=>state.selectedVideo)
  const { videos, loading: relatedVideosLoading } = useSelector(
    (state) => state.relatedVideos
  );
  const {id}= useParams();

  useEffect(() => {
    dispatch(getVideoById(id))
    dispatch(getRelatedVideos(id));
    
  }, [dispatch,id]);


    return (
      <Row>
        <Col lg={8}>
          <div className='watch_player'>
            <iframe
              title={video?.snippet?.title}
              src={`https://www.youtube.com/embed/${id}`}
              frameBorder='0'
              allowFullScreen
              width='100%'
              height='100%'
            ></iframe>
          </div>

          {!loading ? (
            <VideoData video={video} videoId={id} />
          ) : (
            <h1>Loading</h1>
          )}
          <Comments
            videoId={id}
            totalComments={video?.statistics?.commentCount}
          />
        </Col>
        <Col lg={4}>
          {!loading ? (
            videos
              ?.filter((video) => video.snippet)
              .map((video) => (
                <VideoSide video={video} key={video.id.videoId} />
              ))
          ) : (
            <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
              <Skeleton width='100%' height='130px' count={15} />
            </SkeletonTheme>
          )}
        </Col>
      </Row>
    );
}

export default WatchPage
