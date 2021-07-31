import React from 'react'
import './SubscribtionPage.styles.scss'

import { useDispatch, useSelector } from 'react-redux';
import { getSubscribedChannels } from '../../redux/videos/videos.actions';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Skeleton,{ SkeletonTheme } from 'react-loading-skeleton';
import VideoSide from './../../components/VideoSide/VideoSide.component';

const SubscribtionPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getSubscribedChannels());
    }, [dispatch]);

    const { loading, videos } = useSelector(
      (state) => state.subscriptionsChannel
    );


    return (
      <Container fluid>
        {!loading ? (
          videos?.map((video) => (
            <VideoSide video={video} key={video.id} subscriberScreen />
          ))
        ) : (
          <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
            <Skeleton width='100%' height='160px' count={20} />
          </SkeletonTheme>
        )}
      </Container>
    );
}

export default SubscribtionPage
