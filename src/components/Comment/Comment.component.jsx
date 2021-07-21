import moment from 'moment';
import "./Comment.styles.scss"
import React from 'react'

const Comment = ({ comment }) => {
  const {
      authorDisplayName,
      authorProfileImageUrl,
      publishedAt,
      textDisplay,
   } = comment
    return (
      <div className='comment p-2 d-lg-flex'>
        <img
          src={authorProfileImageUrl}
          alt=''
          className='rounded-circle mr-3'
          height='50px'
        />
        <div className='comment_body'>
          <p className='comment_body_header mb-2'>
            {authorDisplayName} • {moment(publishedAt).fromNow()}
          </p>
          <p className="comment_body_content mb-2">{textDisplay}</p>
        </div>
      </div>
    );
}

export default Comment
