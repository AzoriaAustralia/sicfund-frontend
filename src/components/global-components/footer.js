import React, { Component } from "react";

class Footer_v1 extends Component {

    componentDidMount() {
        // let publicUrl = process.env.NEXT_PUBLIC_URL+'/'
        // const minscript = document.createElement("script");
        // minscript.async = true;
        // minscript.src = publicUrl + "assets/js/main.js";
        //
        // document.body.appendChild(minscript);

    }

    render() {

        let imgattr = "Footer logo"

        return (
  				<footer className="footer-area" style={{backgroundImage: 'url(assets/img/bg/2.png)'}}>
				  <div className="copyright-inner">
				    <div className="copyright-text">
				      © SIC Fund Foundation 2022 All rights reserved.
				    </div>
				  </div>
				</footer>


        )
    }
}


export default Footer_v1
