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

  const handleInProgressClick = () => {
    alert("Finding this api is still in progress");
  };

  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleSidebarToggle(false)}
    >
      <Link to="/">
        <li>
          <MdHome size={23} />
          <span>Home</span>
        </li>
      </Link>

      <Link to="/feed/subscriptions">
        <li>
          <MdSubscriptions size={23} />
          <span>Subscriptions</span>
        </li>
      </Link>

      {/* <Link to='/feed/subscriptions'> */}
      <li onClick={handleInProgressClick}>
        <MdThumbUp size={23} />
        <span>Liked Video</span>
      </li>
      {/* </Link> */}

      {/* <Link to='/feed/subscriptions'> */}
      <li onClick={handleInProgressClick}>
        <MdHistory size={23} />
        <span>History</span>
      </li>
      {/* </Link> */}

      {/* <Link to='/feed/subscriptions'> */}
      <li onClick={handleInProgressClick}>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      {/* </Link> */}

      {/* <Link to='/feed/subscriptions'> */}
      <li onClick={handleInProgressClick}>
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
