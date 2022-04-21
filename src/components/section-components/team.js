import React, { Component } from "react";

class Team extends Component {

   render() {

      let publicUrl = process.env.NEXT_PUBLIC_URL + "/";

      return <div className="team-newslater-bg text-center"
                  style={{ backgroundImage: "url(" + publicUrl + "assets/img/bg/4.png)" }}>
         {/* team area end */}
         <div className="team-area pd-top-70">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-6">
                     <div className="section-title text-center">
                        <h2 className="title">Our Team</h2>
                        <p>Built by the best minds in the crypto world.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-3 col-sm-6">
                     <div className="single-team text-center">
                        <a href="https://www.linkedin.com/in/justin-davies-64a70a119" target="_rel">
                           <div className="thumb">
                              <img src="/assets/img/team/1.png" alt="team"></img>
                           </div>
                        </a>
                        <h3 className="name">Justin Davies</h3>
                        <span>Founder / Co-signer</span>
                     </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <div className="single-team text-center">
                        <a href="https://www.linkedin.com/in/tristan-hazelwood-0845221ba/">
                           <div className="thumb">
                              <img src="/assets/img/team/2.png" alt="team" />
                           </div>
                        </a>
                        <h3 className="name">Tristan Hazlewood</h3>
                        <span>Business Head / Co-signer</span>
                     </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <div className="single-team text-center">
                        <a href="https://www.linkedin.com/in/crypto-jono">
                           <div className="thumb">
                              <img src="/assets/img/team/3.png" alt="team" />
                           </div>
                        </a>
                        <h3 className="name">Jono Wood</h3>
                        <span>Business Development / Co-signer</span>
                     </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <div className="single-team text-center">
                        <a href="https://www.linkedin.com/in/jarryd-lang-2b4618205/">
                           <div className="thumb">
                              <img src="/assets/img/team/4.png" alt="team" />
                           </div>
                        </a>
                        <h3 className="name">Jarryd Lang</h3>
                        <span>Chief Videographer</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* team area end */}
         {/* newslatter area Start */}
         {/* <div className="newslatter-area pd-top-80">
			    <div className="container">
			      <div className="newslatter-area-wrap border-tp-solid">
			        <div className="row">
			          <div className="col-xl-3 col-lg-6 col-md-5 offset-xl-2">
			            <div className="section-title mb-md-0">
			              <h2 className="title">Newsletter</h2>
			              <p>Sign up to receive the best offers</p>
			            </div>
			          </div>
			          <div className="col-xl-4 col-lg-6 col-md-7 align-self-center offset-xl-1">
			            <div className="input-group newslatter-wrap">
			              <div className="input-group-prepend">
			                <span className="input-group-text"><i className="fa fa-envelope" /></span>
			              </div>
			              <input type="text" className="form-control" placeholder="Email" />
			              <div className="input-group-append">
			                <button className="btn btn-yellow" type="button">Subscribe</button>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div> */}
         {/* newslatter area End */}
      </div>;

   }
}

export default Team;
