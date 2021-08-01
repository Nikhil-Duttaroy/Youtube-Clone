import React from "react";
import "./Sidebar.styles.scss";

import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";

import { useDispatch } from 'react-redux';
import { log_out } from "../../redux/auth/auth.action";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebar, handleSidebarToggle }) => {
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(log_out())

  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleSidebarToggle(false)}
    >
      <Link to='/'>
        <li>
          <MdHome size={23} />
          <span>Home</span>
        </li>
      </Link>

      <Link to='/feed/subscriptions'>
        <li>
          <MdSubscriptions size={23} />
          <span>Subscriptions</span>
        </li>
      </Link>

      {/* <Link to='/feed/subscriptions'> */}
        <li>
          <MdThumbUp size={23} />
          <span>Liked Video</span>
        </li>
      {/* </Link> */}

      {/* <Link to='/feed/subscriptions'> */}
        <li>
          <MdHistory size={23} />
          <span>History</span>
        </li>
      {/* </Link> */}

      {/* <Link to='/feed/subscriptions'> */}
        <li>
          <MdLibraryBooks size={23} />
          <span>Library</span>
        </li>
      {/* </Link> */}

      {/* <Link to='/feed/subscriptions'> */}
        <li>
          <MdSentimentDissatisfied size={23} />
          <span>I don't Know</span>
        </li>
      {/* </Link> */}

      <hr />

      <li onClick={handleLogOut}>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>

      <hr />
    </nav>
  );
};

export default Sidebar;
