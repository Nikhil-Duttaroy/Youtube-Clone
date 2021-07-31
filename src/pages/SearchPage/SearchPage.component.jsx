import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
// import { getVideosBySearch } from '../redux/actions/videos.action'
// import VideoHorizontal from '../components/videoHorizontal/VideoHorizontal'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { getVideosBySearch } from '../../redux/videos/videos.actions'
import VideoSide from './../../components/VideoSide/VideoSide.component';

const SearchPage = () => {
   const { query } = useParams()

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getVideosBySearch(query))
   }, [query, dispatch])

   const { videos, loading } = useSelector(state => state.searchedVideos)

   return (
      <Container>
         {!loading ? (
            videos?.map(video => (
               <VideoSide
                  video={video}
                  key={video.id.videoId}
                  SearchPage
               />
            ))
         ) : (
            <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
               <Skeleton width='100%' height='160px' count={20} />
            </SkeletonTheme>
         )}
      </Container>
    
   )
}

export default SearchPage