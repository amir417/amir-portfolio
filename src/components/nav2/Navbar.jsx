import { React, useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SkimLogo, burgerBar } from "../../assets/amirpro.png";
import NavOptions from "./NavOptions";
import { setSideBar } from "../..";
import "./Navbar.scss";
import "./Sidebar.scss";

const NavBar = () => {
  const [yPos, setYPos] = useState(0);

  const sideBarOn = useSelector((store) => store.sidebar_reducer);
  const dispatch = useDispatch();
  const [navBarOn, setNavBar] = useState(true);

  const handleScroll = useCallback(() => {
    const currentYPos = window.pageYOffset;
    setNavBar(currentYPos <= yPos || currentYPos < 300 || sideBarOn);
    setYPos(currentYPos);
  }, [yPos, sideBarOn]);

  useEffect (() => {
    window.addEventListener("scroll", handleScroll);
  }, [yPos, handleScroll]); 

  return (
      <>
          <div className = {navBarOn || sideBarOn ? "nav-bar__activate" : "nav-bar"} onClick={(e) => {e.stopPropagation(); dispatch(setSideBar(false));}}>
            <div className = "nav-bar__image">
              <img src={SkimLogo} alt='SK'/>
            </div>
            <div className = "top-bar">
              <div className = "nav-bar__links">
                <NavOptions/>
              </div>
            </div>
            <div className = "side-bar">      
              <img className = "burger-bar" src={burgerBar} onClick={(e) => {
                e.stopPropagation(); 
                dispatch(setSideBar(true));
              }} alt=""/>
                <div className = {sideBarOn ? "side-bar-box__activate" : "side-bar-box"} onClick={(e) => {
                  e.stopPropagation(); 
                  dispatch(setSideBar(true));
                }}>
                    <NavOptions/>
                </div>
            </div>
          </div>
      </>
    );
}

export default NavBar;