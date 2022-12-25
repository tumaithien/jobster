import React, { useState } from "react";
import Logo from "./Logo";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaCaretDown, FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, toggleSidebar } from "../feartures/user/userSlice";
const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">dashboard</h4>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div
            className={`${showLogout ? "dropdown show-dropdown" : "dropdown"}`}
          >
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => dispatch(logoutUser())}
            >
              log out
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
