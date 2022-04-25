import React, { Component } from 'react';
import Link from 'next/link'

class BlogSection extends Component {
  render() {
    let publicUrl = "https://sicfund.io"

    return (
      <div className="blog-area pd-top-120 viaje-go-top">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-6">
		        <div className="single-blog single-blog-wrap style-two">
		          <div className="thumb single-blog-left-wrap">
		            <img src="/assets/img/blog/10.png" alt="blog" />
		          </div>
		          <div className="single-blog-details single-blog-right-wrap">
		            <Link className="tag" href="/blog-details">Vanautu</Link>
		            <h4 className="title">Something for everyone</h4>
		            <p className="content">Satoshi island is developing to become a hub for Entrepreneurship and Crypto Events. We want to empower the people to shape up the entire island and grow its economy and in turn, grow their own investments.</p>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-6">
		        <div className="row">
		          <div className="col-sm-6">
		            <div className="single-blog style-three">
		              <div className="thumb">
		                <img src="/assets/img/blog/11.png" alt="blog" />
		              </div>
		              <div className="single-blog-details-wrap">
		                <div className="single-blog-details text-center">
		                  <h4 className="title">Retirees</h4>
						  <p className="date">No income tax, no capital gains tax, simple citizenship by investment programs (Payable in Bitcoin).</p>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-sm-6">
		            <div className="single-blog style-three">
		              <div className="thumb">
		                <img src="/assets/img/blog/12.png" alt="blog" />
		              </div>
		              <div className="single-blog-details-wrap">
		                <div className="single-blog-details text-center">
		                  <h4 className="title">Crypto Projects/Teams</h4>
						  <p className="date">Surround yourself with other world class crypto entrepreneurs to network and build the future together! </p>

		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-sm-6">
		            <div className="single-blog style-three">
		              <div className="thumb">
		                <img src="/assets/img/blog/13.png" alt="blog" />
		              </div>
		              <div className="single-blog-details-wrap">
		                <div className="single-blog-details text-center">
						  <h4 className="title">Solo Entrepreneurs</h4>
		                  <p className="date">A Hub for innovators, Opportunities to collaborate and put your skills to work and build will be endless! </p>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-sm-6">
		            <div className="single-blog style-three">
		              <div className="thumb">
		                <img src="/assets/img/blog/14.png" alt="blog" />
		              </div>
		              <div className="single-blog-details-wrap">
		                <div className="single-blog-details text-center">
		                  <h4 className="title">Holiday Goers</h4>
						  <p className="date">A tropical destination, with the most amazing reefs for diving, Satoshi-Island will offer world class facilities.</p>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
    )
  }
}

export default BlogSection;
