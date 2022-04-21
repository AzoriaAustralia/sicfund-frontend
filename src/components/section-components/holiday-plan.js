import React, { Component } from "react";

class HolidayFun extends Component {

   render() {

      let publicUrl = process.env.NEXT_PUBLIC_URL + "/";

      return <div className="holiday-plan-area tp-holiday-plan-area mg-top-96"
                  style={{ backgroundImage: "url(" + publicUrl + "assets/img/bg/8.png)" }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-9">
                  <div className="section-title text-center">
                     <h2 className="title wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">Invest,
                        Build, and Earn</h2>
                     <p className="wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.2s">The perfect
                        place for you to build an island from scratch and see your investments shape up the island's
                        economy.</p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-3 col-sm-6">
                  <div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.4s"
                       data-wow-delay="0.1s">
                     <div className="thumb">
                        <img src="/assets/img/destination-list/7.png" alt="list" />
                     </div>
                     <div className="details">
                        <h4 className="title">Invest and build with Like minded entrepreneurs! </h4>
                        <p className="content">The free trade zone of Santos, located in the Tax haven of Vanuatu is
                           expected to attract a new wave of investment over the next 5 years. Many Real estate
                           forecasters are expecting a Boom in property located in this special area.</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.7s"
                       data-wow-delay="0.2s">
                     <div className="thumb">
                        <img src="/assets/img/destination-list/4.png" alt="list" />
                     </div>
                     <div className="details">
                        <h4 className="title">Share Profits by creating something Spectacular!</h4>
                        <p className="content">90% of ALL Profits Generated will be shared with CoOperative members. 5%
                           will be used to fund the “SIC-Treasury”. The treasury will be used to furnish our
                           developments, add any required details to the property, and/or buy additional assets for the
                           island.</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="0.9s"
                       data-wow-delay="0.3s">
                     <div className="thumb">
                        <img src="/assets/img/destination-list/5.png" alt="list" />
                     </div>
                     <div className="details">
                        <h4 className="title">ENDLESS Opportunity to Create. </h4>
                        <p className="content">The SIC-Fund backed with the immense brain power of the SIC-Community
                           will venture to create additional revenue streams to share with the CoOp. This includes
                           “Serviced Apartments, Lawn/Garden care, Property management, Marketing, Taxi Boats, Private
                           Security etc.</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <div className="single-destinations-list style-two wow animated fadeInUp" data-wow-duration="1.1s"
                       data-wow-delay="0.4s">
                     <div className="thumb">
                        <img src="/assets/img/destination-list/6.png" alt="list" />
                     </div>
                     <div className="details">
                        <h4 className="title">Employ local Workers.</h4>
                        <p className="content">Many Opportunities will be had to employ local workers to become a part
                           of the SIC-Team. Together we can build out a paradise to pay and earn in crypto. We look
                           forward to working with and building out a Citadel inside the Pacific together!</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>;

   }
}

export default HolidayFun;
