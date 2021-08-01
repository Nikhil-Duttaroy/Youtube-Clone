import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Container, Col } from "react-bootstrap";
import CategoryBar from "./../../components/CategoryBar/CategoryBar.component";
import Video from './../../components/Video/Video.component';

import { getPopularVideos ,getVideosByCategory } from './../../redux/videos/videos.actions';

import  InfiniteScroll from 'react-infinite-scroll-component'
import SkeletonVideo from './../../components/skeleton/SkeletonVideo.component';
import HelmetComponent from './../../components/Helmet';

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPopularVideos());
  },[dispatch])

  const {videos,activeCategory,loading }=useSelector(state=>state.homeVideos)

  const fetchData = () => {
      if (activeCategory === 'All') dispatch(getPopularVideos())
      else {
         dispatch(getVideosByCategory(activeCategory))
      }
   }

  return (
    <Container>
      <HelmetComponent title="Youtube Clone" description="Youtube Clone Home"/>
      <CategoryBar />
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        Loader={
          <div className='spinner-border text-danger d-block mx-auto'></div>
        }
        className='row'
      >
        {!loading
          ? videos.map((video) => (
              <Col lg={3} md={4}>
                <Video video={video} key={video.id} />
              </Col>
            ))
          : [...Array(20)].map(() => (
              <Col lg={3} md={4}>
                <SkeletonVideo />
              </Col>
            ))}
      </InfiniteScroll>
    </Container>
  );
};

export default Homepage;
