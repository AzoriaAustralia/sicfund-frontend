import React, { Component } from "react";

class Video extends Component {

   render() {

      let publicUrl = process.env.NEXT_PUBLIC_URL + "/";

      return <div className="video-area tp-video-area pd-top-110"
                  style={{ backgroundImage: "url(" + publicUrl + "assets/img/bg/7.png)" }}>
         <div className="container viaje-go-top">
            <div className="row">
               <div className="col-xl-5 col-lg-6 align-self-center wow animated fadeInRight" data-wow-duration="1s"
                    data-wow-delay="0.3s">
                  <div className="section-title mb-lg-0 mb-4 text-center text-lg-left">
                     <h2 className="title">LIMITED EDITION POWER BACKER NFT</h2><br></br>
                     <h4 className="title">Purchasing 30xSIC-NFTs will Grant you a LIMITED EDITION POWER-BACKER NFT</h4>
                     <br></br><p>(Air-dropped to you after the Public sale has finished).
                     POWER-BACKERS are Special members with SIC-BENEFITS. <br></br></p><br></br>

                     <h4 className="title">HOLDING 30x SIC-NFT & 1x POWER BACKER NFT </h4>
                     <p>Will grant you the ability to buy out the underlying land/Completed developments DIRECTLY from
                        the SIC-Foundation at A *10% Discount under Satoshi-Island land - Marketplace floor price when
                        “Asset Liquidation Events” occur. </p>
                     <br></br>
                     <h4 className="title">POWER-BACKERS</h4><p>Will receive discounts on property
                     maintenance/management costs and other services the Satoshi Island CoOp offer on the Island to land
                     holders.</p>
                     <br></br>
                     <h4 className="title">POWER-BACKERS</h4><p>Discord Role</p>
                     <br></br>
                     <h4 className="title">Future Utility and PERKS</h4><p>Will be added for POWER BACKERS as we expand
                     out our operation, POWER BACKERS will be at the forefront.</p>
                  </div>
               </div>
               <div className="col-xl-5 col-lg-6 offset-xl-1 wow animated fadeInLeft" data-wow-duration="1s"
                    data-wow-delay="0.3s">
                  <div className="video-popup-wrap">
                     <div className="thumb">
                        <img src="/assets/img/video.png" alt="video" />
                     </div>
                     <div className="video-popup-btn">
                        <a href="https://www.youtube.com/watch?v=GEJhJw-AoAs" className="video-play-btn mfp-iframe"><i
                           className="fa fa-play" /></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>;

   }
}

export default Video;
