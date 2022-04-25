import React, { Component } from "react";
import Countdown from "react-countdown";

class Banner extends Component {

   render() {

      let publicUrl = process.env.NEXT_PUBLIC_URL + "/";
      let imagealt = "image";

      return <div className="banner-area viaje-go-top">
         <div className="banner-slider">
            <div className="banner-slider-item banner-bg-1">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
                        <div className="row">
                           <div className="col-lg-9 col-sm-8">
                              <div className="banner-inner">
                                 <img src="/assets/img/HERO-IMAGE-NEW.png"  alt="SIC-FUND Island"/>
                                 <h3>Sale ends<br></br>26th April, 3pm<br></br>(AEST)</h3>
                                 <h4>Sale Extended! Ends in <Countdown date={1650949200000}/></h4>
                              </div>
                           </div>
                           <div className="col-lg-3 col-sm-4">
                              <div className="video-popup-btn s-animate-video">
                                 <a href="https://www.youtube.com/watch?v=U4fs88lQ4Xk"
                                    className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="banner-social-meta">
            <div className="banner-slider-dots" />
            <ul className="social-icon" style={{ "paddingRight": "50px" }}>
               <li>
                  <a className="facebook" href="https://www.facebook.com/SicFund.io/" target="_blank"
                     style={{ backgroundColor: "#1C2A39" }}><i className="fa fa-facebook" /></a>
               </li>
               <li>
                  <a className="twitter" href="https://twitter.com/SICFoundati0n" target="_blank"
                     style={{ backgroundColor: "#1C2A39" }}><i className="fa fa-twitter" /></a>
               </li>
               <li>
			        <a className="twitter" href="https://discord.gg/3Nc7Rc2tYE" target="_blank" style={{'background-color': '#1C2A39'}}><i className="fa fa-discord" aria-hidden="true" /></a>
			      </li>
				  <li>
			        <a className="twitter" href="https://sicfoundation.medium.com/launch-of-the-si-cooperative-fund-d21c538126a2" target="_blank" style={{'background-color': '#1C2A39'}}><i className="fa fa-medium" aria-hidden="true" /></a>
			      </li>
            </ul>
         </div>
         <div className="container">
         </div>
      </div>;
   }
}

export default Banner;
