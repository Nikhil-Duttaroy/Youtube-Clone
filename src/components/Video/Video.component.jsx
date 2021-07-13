import React from 'react'
import "./Video.Styles.scss"
import { AiFillEye } from "react-icons/ai";


const Video= () => {
    return (
      <div className='video'>
        <div className='video_top'>
          <img
            src='https://i.ytimg.com/vi/4UZrsTqkcW4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAryBRWiEwgWD2UyrnX9FNLFzKobA'
            alt=''
          />
          <span>06:09</span>
        </div>
        <div className='video_title'>
          React in 10 Hours
        </div>
        <div className='video_details'>
          <span>
            <AiFillEye /> 1m Views •
          </span>
          <span>2 years ago</span>
        </div>
        <div className='video_channel'>
          <img
            src='https://yt3.ggpht.com/ytc/AKedOLRkU2-RDemsCSaVVsPwc-yxtWruCB1Gr2VIgQKOKg=s88-c-k-c0x00ffffff-no-rj'
            alt=''
          />
          <p>Chintu Coder</p>
        </div>
      </div>
    );
}

export default Video
