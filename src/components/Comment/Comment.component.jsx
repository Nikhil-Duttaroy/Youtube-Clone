import moment from 'moment';
import "./Comment.styles.scss"
import React from 'react'

const Comment = () => {
    return (
      <div className='comment p-2 d-lg-flex'>
        <img
          src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
          alt=''
          className='rounder-circle mr-3'
          height='50px'
        />
        <div className='comment_body'>
          <p className='comment_body_header mb-2'>
            Nikhil •<span>{moment("2020-05-03").fromNow()}</span>
          </p>
          <p className="comment_body_content mb-2"> Hellow Hi Hello Hi</p>
        </div>
      </div>
    );
}

export default Comment
