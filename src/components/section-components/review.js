import React, { Component } from "react";

class Review extends Component {

   render() {

      let publicUrl = process.env.NEXT_PUBLIC_URL + "/";

      return <div className="client-review-area client-review-area-home pd-top-70">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 align-self-center">
                  <div className="thumb wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                     <div className="client-review-thumb">
                        <img src="/assets/img/others/client-review.png" alt="review" />
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="single-client-review wow animated fadeInLeft" data-wow-duration="1s"
                       data-wow-delay="0.3s">
                     <h3 className="location-name">Why Invest in SIC-Fund Island development?</h3><br></br><br></br>
                     <p>Satoshi Island (Locally known as Lataro) is a 30-Million Square foot private Island located in
                        Northern-Vanuatu in the special economic zone of Santo.
                        <br></br><br></br>
                        Permission has been granted by the Treasury and Government of Vanuatu to turn this island into a
                        haven for crypto entrepreneurs. This will represent the evolution of tokenisation & the first
                        project in the world where a whole island society has been tokenised!
                        <br></br><br></br>
                        Everything from the Land, Citizenship to the island and Modules (Used for Building) will be
                        represented as NFTs. The entire island has been scanned and is being built out into a 1:1 scale
                        into a digital world. This will allow NFT investors to Explore, purchase, develop, lease or sell
                        their island developments without ever stepping foot on the island.
                        Satoshi Island is Almost like an Island Building game, but the game is backed by the real world
                        developments where your digital actions come to life.
                        <br></br><br></br>
                        Ownership of the physical land will be a contract between the NFT holder and SatoshiIsland-LTD,
                        However the land title can be transferred into the name of the NFT holder through an application
                        process with Satoshi Island and the Vanuatu Land registration Bureau. The land title holder will
                        then become liable for paying associated property fees.
                        <br></br><br></br>
                        Together we will buy and develop as many Land plots as we can. </p>


                  </div>
               </div>
            </div>
         </div>
      </div>;

   }
}

export default Review;
