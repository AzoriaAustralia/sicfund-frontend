import React, { Component } from "react";
import Link from "next/link";

class Intro extends Component {

   render() {

      let publicUrl = process.env.NEXT_PUBLIC_URL + "/";

      return <div className="intro-area pd-top-112">
         <div className="container">
            <div className="row">
               <div className="col-md-4">
                  <div className="single-intro wow animated fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.1s">
                     <h4 className="intro-title">
                        <span className="intro-count">01</span>
                        {/* <Link href="/about"> */}
                           <a className="intro-cat">
                              Invest
                           </a>
                        {/* </Link> */}
                     </h4>
                     <p>A Glowing light in the Pacific for Crypto Entrepreneurs, the free trade zone and crypto friendly
                        jurisdiction of Santo, located in the tax Haven of Vanuatu, is set to soar and become a hub for
                        technology and investment. The SIC-foundation is raising money to purchase land plots
                        to build and develop with the community together.</p>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="single-intro wow animated fadeInUp" data-wow-duration="1.0s" data-wow-delay="0.2s">
                     <h4 className="intro-title">
                        <span className="intro-count">02</span>
                        {/* <Link href="/about"> */}
                           <a className="intro-cat">
                              Develop
                           </a>
                        {/* </Link> */}
                     </h4>
                     <p>Have your voice, vote and ideas heard on how the development of our satoshi island land should
                        be carried out. Shares in the SIC-Fund will be represented by ERC1155 Tokens. Choose how you
                        want to grow your land value, build new projects tied to real world use-case, and earn a great
                        income out of it.</p>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="single-intro wow animated fadeInUp" data-wow-duration="1.6s" data-wow-delay="0.3s">
                     <h4 className="intro-title">
                        <span className="intro-count">03</span>
                        {/* <Link href="/about"> */}
                           <a className="intro-cat">
                              Lease
                           </a>
                        {/* </Link> */}
                     </h4>
                     <p>90% of ALL profits the CoOperatives assets generate will be shared with the NFT holders, this
                        includes income from the leasing of developed properties, royalties from market sales, sales of
                        the SIC-Fund asset and any income from additional future revenue streams created by the
                        CoOp.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>;

   }
}

export default Intro;
