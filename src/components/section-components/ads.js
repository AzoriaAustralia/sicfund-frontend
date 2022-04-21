import React, { Component } from "react";
import Link from 'next/link';

class Ads extends Component {

   render() {

      let publicUrl = process.env.NEXT_PUBLIC_URL + "/";

      return <div className="ads-area pd-top-90 viaje-go-top">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-9">
                  <Link className="ads-thumb" href="/contact">
                     <img src={publicUrl + "assets/img/others/1.png"} alt="ads" />
                  </Link>
               </div>
            </div>
         </div>
      </div>;

   }
}

export default Ads;
