import React,{ useEffect } from 'react'
import "./Comments.styles.scss"
import Comment from "../Comment/Comment.component"
import { useDispatch, useSelector } from 'react-redux';
import { addComment, getCommentsByVideoId } from './../../redux/comments/comments.actions';
import { useState } from 'react';



const Comments = ({ videoId,totalComments }) => {

  const [commentInput,setCommentInput] =useState("")

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentsByVideoId(videoId));
  }, [dispatch, videoId]);

  const comments = useSelector(state=>state.commentsList.comments)

  const _comments = comments?.map(
  comment => comment.snippet.topLevelComment.snippet
  );


  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentInput.length === 0) return;

    dispatch(addComment(videoId, commentInput));

    setCommentInput("");
  };
  const { photoURL } = useSelector((state) => state.auth?.user);
  return (
    <div>
      <div className='comments'>
        <p>{totalComments} Comments</p>
        <div className='comments_form d-flex w-100 my-2'>
          <img
            src={photoURL}
            alt=''
            className='rounder-circle mr-3'
            height='50px'
          />
          <form onSubmit={handleCommentSubmit} className='d-flex flex-grow-1'>
            <input
              type='text'
              className='flex-grow-1'
              placeholder='Leave a Comment'
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
            />
            <button className='p-2 border-0'>Comment</button>
          </form>
        </div>
        <div className='comments_list'>
          {_comments?.map((comment, idx) => (
            <Comment comment={comment} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments
