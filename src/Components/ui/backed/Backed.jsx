import React from "react";
import "./Backed.scss";
import img1 from "../../../imgs/img1.png";
import img2 from "../../../imgs/img2.png";
import img3 from "../../../imgs/img3.png";
import img4 from "../../../imgs/img4.png";
import img5 from "../../../imgs/img5.png";
import mm1 from "../../../imgs/mm1.png";
import mm2 from "../../../imgs/mm2.png";
import mm3 from "../../../imgs/mm3.png";
import mm4 from "../../../imgs/mm4.png";


const Backed = ( ) => {
  return (
    <div className="Container6">
        <p className="backed__text1" >the best crypto App</p>
        <h1 className="backed__text2" >Backed by the biggest names in the industry</h1>
        <div className="backed__logos">
          <div className="">
          <img src={img1} alt="" />
          </div>
         <div className="">
          <img src={img2} alt="" />
          </div>   <div className="">
          <img src={img3} alt="" />
          </div>   <div className="">
          <img src={img4} alt="" />
          </div>   <div className="">
          <img src={img5} alt="" />
          </div>
</div>

<div className="backed__cards">
  <div className="backed__card__dad">
  <p>⭐⭐⭐⭐⭐</p>
  <p className="backed__text3" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
  <div className="backed__card1">
    <img width={100} src={mm1} alt="" />
    <div className="">
      <p className="backed__text4">Jason Renolds</p>
      <p className="backed__text5">Verified Customer</p>
    </div>
  </div>
  </div>
    <div className="backed__card__dad">
  <p>⭐⭐⭐⭐⭐</p>
  <p className="backed__text3" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
  <div className="backed__card1">
    <img width={100} src={mm2} alt="" />

    <div className="">

            <p className="backed__text4">Sarah Genning</p>
      <p className="backed__text5">Verified Customer</p>
    </div>
  </div>
  </div> 
   <div className="backed__card__dad">
  <p>⭐⭐⭐⭐⭐</p>
  <p className="backed__text3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
  <div className="backed__card1">
    <img width={100} src={mm3} alt="" />

    <div className="">

         <p className="backed__text4">Lori Basic</p>
      <p className="backed__text5">Verified Customer</p>
    </div>
  </div>
  </div>  <div className="backed__card__dad">
  <p>⭐⭐⭐⭐⭐</p>
  <p className="backed__text3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
  <div className="backed__card1">
    <img width={100} src={mm4} alt="" />

    <div className="">

      <p wid className="backed__text4">James Razz</p>
      <p className="backed__text5">Verified Customer</p>
    </div>
  </div>
  </div>
</div>
    </div>

       );
    };
    export default Backed;