import React from 'react';
import "./Header.styles.scss"
import {FaBars} from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai";
import {MdNotifications , MdApps } from "react-icons/md"; // md : material design

const Header = ({ handleSidebarToggle }) => {
  return (
    <>
    <div className='header'>
      <FaBars
        className='header_menu'
        sie={26}
        onClick={() => handleSidebarToggle()}
      />
      <img
        src='https://pngimg.com/uploads/youtube/youtube_PNG2.png'
        alt='youtube logo'
        className='header_logo'
      />
      <form>
        <input type='text' placeholder='Search' />
        <button type='submit'>
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className='header_icons'>
        <MdApps size={27} />
        <MdNotifications size={27} />
        <img
          src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
          alt='avatar'
        />
      </div>
    </div>
    <hr style={{backgroundColor:"white",margin:"0px"}}/>
    </>
  );
};

export default Header
