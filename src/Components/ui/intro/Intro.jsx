import React from "react";
import "./Intro.scss";
import phone from "../../../imgs/Frame.png";
import play from "../../../imgs/im.png";
const Intro = ( ) => {
  return (
    <div className="Container2">
      <div className="intro__flex">
      <h1 className="intro__text1">The crypto portfolio app that makes you smile. Every day.</h1>

      <img className="intro__img" src={phone} alt="" />
      </div>
      <p className="intro__text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>

      <div className="intro_btnss">
      <div className="intro__appstore">
      <img className="intro__img2" src="https://wallpapercave.com/wp/wp3453765.jpg" alt="" />
      <p className="intro__text3">App Store</p>
      </div>
      <img src={play} alt="" />
    </div>

    </div>
 
       );};
export default Intro;