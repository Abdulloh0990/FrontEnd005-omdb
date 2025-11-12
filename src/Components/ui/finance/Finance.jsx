import React from "react";
import "./Finance.scss";
import pm from "../../../imgs/pm.png";
const Finance = ( ) => {
  return (
    <div className="Container3">
      <h2 className="finance__text1" > New crypto finance app</h2>
      <p className="finance__text2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
          <div className="finance__cards">
      <div className="finance__card1">
        <img className="finance__img1" src={pm} alt="" />
        <p className="finance__text3">Benefit description</p>
        <p className="finance__text4">Suspendisse varius enim in eros elementum tristique. Duis cursus.</p>
        <br />
        <p className="finance__text5">Learn more</p>
              </div>
                    <div className="finance__card1">
        <img className="finance__img1" src={pm} alt="" />
        <p className="finance__text3">Benefit description</p>
        <p className="finance__text4">Suspendisse varius enim in eros elementum tristique. Duis cursus.</p>
        <br />
        <p className="finance__text5">Learn more</p>
              </div> 
                   <div className="finance__card1">
        <img className="finance__img1" src={pm} alt="" />
        <p className="finance__text3">Benefit description</p>
        <p className="finance__text4">Suspendisse varius enim in eros elementum tristique. Duis cursus.</p>
        <br />
        <p className="finance__text5">Learn more</p>
              </div>
    </div>
    </div>

       );};
export default Finance;