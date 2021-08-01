import React, { useEffect } from "react";
import './ChannelPage.styles.scss'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideosByChannel } from './../../redux/videos/videos.actions';
import { getChannelDetails } from "../../redux/channel/channel.action";
import  numeral  from 'numeral';
import { Col, Container, Row } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Video from './../../components/Video/Video.component';
import HelmetComponent from './../../components/Helmet';

const ChannelPage = () => {
    const { channelId } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getVideosByChannel(channelId));
      dispatch(getChannelDetails(channelId));
    }, [dispatch, channelId]);

    const { videos, loading } = useSelector((state) => state.channelVideos);
    const { snippet, statistics } = useSelector(
      (state) => state.channelDetails.channel
    );
    console.log(statistics);


    return (
      <>
        <HelmetComponent title={snippet?.title} description={snippet?.title} />

        <div className='px-5 py-2 my-2 d-flex justify-content-between align-items-center channelHeader'>
          <div className='d-flex align-items-center'>
            <img src={snippet?.thumbnails?.default?.url} alt='' />

            <div className='ml-3 channelHeader__details'>
              <h3>{snippet?.title}</h3>
              <span>
                {numeral(statistics?.subscriberCount).format("0.a")} Subscribers
              </span>
            </div>
          </div>

          <button>Subscribe</button>
        </div>

        <Container>
          <Row className='mt-2'>
            {!loading
              ? videos?.map((video) => (
                  <Col md={3} lg={3}>
                    <Video video={video} channelScreen />
                  </Col>
                ))
              : [...Array(15)].map(() => (
                  <Col md={3} lg={3}>
                    <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                      <Skeleton width='100%' height='140px' />
                    </SkeletonTheme>
                  </Col>
                ))}
          </Row>
        </Container>
      </>
    );
}

export default ChannelPage
