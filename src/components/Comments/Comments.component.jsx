import React from 'react'
import "./Comments.styles.scss"
import Comment from "../Comment/Comment.component"


const Comments = () => {
    const handleCommentSubmit = () => {

    }
    return (
      <div>
        <div className='comments'>
          <p>Comments</p>
          <div className='comments_form d-flex w-100 my-2'>
            <img
              src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
              alt=''
              className="rounder-circle mr-3"
              height="50px"
            />
            <form onSubmit={handleCommentSubmit} className="d-flex flex-grow-1">
                <input type="text" className="flex-grow-1" placeholder="Leave a Comment"/>
                <button className="p-2 border-0">Comment</button>
            </form>
          </div>
          <div className="comments_list">
              {
                  [...Array(15)].map(()=>(
                      <Comment/>
                  ))
              }
          </div>
        </div>
      </div>
    );
}

export default Comments
