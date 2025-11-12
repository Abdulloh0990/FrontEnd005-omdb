import React from "react";
import "./Landing.scss";
import phone2 from "../../../imgs/phone.png";
const  Landing  = ( ) => {
  return (
    <div className="Container4">
      <h1 className="landing__text1">A perfect landing page to help launch your app</h1>
      <p  className="landing__text2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
      <div className="landing__card">
      <div className="landing__texts">

      <p className="landing__text3">Feature description
Suspendisse varius enim in eros elementum tristique. Duis cursusSuspendisse varius enim in eros elementum tristique. Duis cursus.</p>
<br />
<br />
<br />
<br />

   <p className="landing__text3">Feature description
Suspendisse varius enim in eros elementum tristique. Duis cursusSuspendisse varius enim in eros elementum tristique. Duis cursus.</p> 
<br />
<br />
<br />
<br />

  <p className="landing__text3">Feature description
Suspendisse varius enim in eros elementum tristique. Duis cursusSuspendisse varius enim in eros elementum tristique. Duis cursus.</p>
</div>
      <img className="landing__img" src={phone2} alt="" />
      <div className="landing__texts">

<p className="landing__text4">Feature description
Suspendisse varius enim in eros elementum tristique. Duis cursus. Suspendisse varius enim in eros elementum tristique. Duis cursus.</p>
<br />
<br />
<br />
<br />

<p className="landing__text4">Feature description
Suspendisse varius enim in eros elementum tristique. Duis cursus. Suspendisse varius enim in eros elementum tristique. Duis cursus.</p>
<br />
<br />
<br />
<br />
<p className="landing__text4">Feature description
Suspendisse varius enim in eros elementum tristique. Duis cursus. Suspendisse varius enim in eros elementum tristique. Duis cursus.</p>
</div>
    </div>
      </div>

       );};
export default Landing;