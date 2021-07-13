import React from 'react'
import "./LoginPage.styles.scss"

const LoginPage= () => {
    return (
      <div className='login'>
        <div className='login_container'>
          <h2>Youtube Clone</h2>
          <img
            src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
            alt=''
          />
          <button>Login With Google</button>
          <p>Youtube Clone made using ReactJS , Redux , Firebase and the youtube API</p>
        </div>
      </div>
    );
}

export default LoginPage