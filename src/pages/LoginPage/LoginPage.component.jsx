import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import "./LoginPage.styles.scss"
import { login } from './../../redux/auth/auth.action';
import { useHistory } from 'react-router-dom';


const LoginPage= () => {
 const dispatch = useDispatch()
 const accessToken = useSelector(state=>state.auth.accessToken)
 const history=useHistory()
 
 const handleLogin = ()=>{
    dispatch(login())
 }

useEffect(()=>{
  if (accessToken){
    history.push('/')
  }
},[accessToken,history])

    return (
      <div className='login'>
        <div className='login_container'>
          <h2>Youtube Clone</h2>
          <img
            src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
            alt=''
          />
          <button onClick={handleLogin}>Login With Google</button>
          <p>Youtube Clone made using ReactJS , Redux , Firebase and the youtube API</p>
        </div>
      </div>
    );
}

export default LoginPage