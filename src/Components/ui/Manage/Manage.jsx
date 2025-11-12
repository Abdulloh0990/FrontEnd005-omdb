import React from "react";
import "./Manage.scss";
import cc from "../../../imgs/cc.png";
import pms from "../../../imgs/pm.png";

const Manage = ( ) => {
  return (
    <div className="Container5">
      <div className="manage__card">
        <div className="manage__texts">
        <h2 className="manage__text1">Manage your money from anywhere</h2>
        <p className="manage__text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
        <div className="manage__card1">
          <div className="manage__mini">
            <img src={pms} alt="" />
            <p  className="manage__text3" >Benefit description</p>
            <p  className="manage__text4" >Suspendisse varius enim in eros elementum tristique. Duis cursus.</p>
          </div>
            <div className="manage__mini">
            <img src={pms} alt="" />
            <p className="manage__text3">Benefit description</p>
        <p  className="manage__text4" >Suspendisse varius enim in eros elementum tristique. Duis cursus.</p>
          </div>
        </div>
        <div className="manage__btn">Get CrypAppy</div>
        </div>
        <img src={cc} alt="" />
        </div>
    </div>

       );};

export default Manage;