import React, { useState, useEffect } from "react";
import Image from "next/image";
import purchaseNft from "../../lib/purchaseNft";
import getRaisedCount from "../../lib/getRaisedCount";
import toast from "react-hot-toast";

export default function Offer() {
   const [raisedETH, setRaisedETH] = useState();
   const [tokenAmountToBuy, setTokenAmountToBuy] = useState("1");

   useEffect(() => {
      const fetchEth = async () => {
         const { totalBalance } = await getRaisedCount();
         setRaisedETH(totalBalance);
      }

      fetchEth()
   }, [])

   const handleNftPurchase = async (amount) => {
      const { data, error } = await purchaseNft(amount);
      if (data) {
         toast.success("Success! Your transaction is being processed.")
      } else {
         if (error && error.code !== "INSUFFICIENT_FUNDS") {
            toast.error(error.message);
         }
         if (error.code === "INSUFFICIENT_FUNDS") {
            toast.error("You don't have sufficient funds.")
         }
      }
   }

   return (
      <div className="offer-area pd-top-70">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="section-title text-center">
                     <h2 className="title">SPECIAL MEMBERSHIP TIERS</h2>
                     <p>Get the most out of your membership to build your dream property.</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="destinations-list-slider-bg">
            <div className="container">
               <div className="row">
                  <div className="col-sm">
                     <div className="d-list-slider-item">
                        <div className="single-destinations-list">
                           <div className="thumb">
                              <Image layout="responsive" height={100} width={150} quality={100}
                                     src="/assets/img/destination-list/1.png" alt="list" />
                              <div className="d-list-btn-wrap">
                              </div>
                           </div>
                           <div className="details">
                              <h4 className="title">2 x SIC-NFTs</h4>
                              <div className="content">
                                 <ul>
                                    <li>1X Governance Voting Power</li>
                                    <li>Maintaining 2x SIC-NFTs in your wallet, will Unlock the SIC-Governance Channel
                                       in Discord
                                    </li>
                                    <li>SIC-Governance will be made up of A group of like minded Degens working together
                                       to plan out the future of our slice of the island
                                    </li>
                                 </ul>
                              </div>
                              <div className="tp-price-meta tp-price-meta-cl">
                                 <p>Price</p>
                                 <h2>0.3 ETH</h2>
                                 <div className="btn-wrapper">
                                    <button onClick={() => handleNftPurchase(2)} className="action-btn">buy now</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-sm">
                     <div className="d-list-slider-item">
                        <div className="single-destinations-list">
                           <div className="thumb">
                              <Image layout="responsive" height={100} width={150} quality={100}
                                     src="/assets/img/destination-list/2.png" alt="list" />
                              <div className="d-list-btn-wrap">

                              </div>
                           </div>
                           <div className="details">
                              <h4 className="title">5 x SIC-NFTs</h4>
                              <div className="content">
                                 <ul>
                                    <li>3x Governance Voting Power</li>
                                    <li>Maintaining 5x SIC-NFTs in your wallet, will Unlock the SIC-Governance Channel
                                       in Discord.
                                    </li>
                                    <li>SIC-Governance will be made up of A group of like minded Degens working together
                                       to plan out the future of our slice of the island.
                                    </li>
                                 </ul>
                              </div>
                              <div className="tp-price-meta tp-price-meta-cl">
                                 <p>Price</p>
                                 <h2>0.75 ETH</h2>
                                 <div className="btn-wrapper">
                                    <button onClick={() => handleNftPurchase(5)} className="action-btn">buy now</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-sm">
                     <div className="d-list-slider-item">
                        <div className="single-destinations-list">
                           <div className="thumb">
                              <Image layout="responsive" height={100} width={150} quality={100}
                                     src="/assets/img/destination-list/3.png" alt="list" />
                              <div className="d-list-btn-wrap">

                              </div>
                           </div>
                           <div className="details">
                              <h4 className="title">15 x SIC-NFTs</h4>
                              <div className="content">
                                 <ul>
                                    <li>6x Governance Voting Power</li>
                                    <li>Maintaining 15x SIC-NFTs in your wallet, will Unlock the SIC-Governance Channel
                                       in Discord, A group of like minded Degens working together to plan out the future
                                       of our slice of the island.
                                    </li>
                                    <li>Discounts on Short stays
                                    </li>
                                    <li>Discord Role “SIC-Chad"
                                    </li>
                                 </ul>
                              </div>
                              <div className="tp-price-meta tp-price-meta-cl">
                                 <p>Price</p>
                                 <h2>2.25 ETH </h2>
                                 <div className="btn-wrapper">
                                    <button onClick={() => handleNftPurchase(15)} className="action-btn">buy now</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-sm">
                     <div className="d-list-slider-item">
                        <div className="single-destinations-list">
                           <div className="thumb">
                              <span className="d-list-tag">Special Offer</span>
                              <Image layout="responsive" height={100} width={150} quality={100}
                                     src="/assets/img/destination-list/15.png" alt="list" />
                              <div className="d-list-btn-wrap">

                              </div>
                           </div>
                           <div className="details" style={{ backgroundColor: "#1C2A39" }}>
                              <h4 className="title" style={{ color: "white" }}>30x SIC-NFTs - POWER BACKER</h4>
                              <div className="content" style={{ color: "white" }}>
                                 <ul>
                                    <li>10x Governance Voting Power For Discord</li>
                                    <li>Discounts on Short stays</li>
                                    <li>Discounts on Island Services</li>
                                    <li>1 x SPECIAL LIMITED "POWER-BACKER" NFT</li>
                                    <li>Access To "POWER-BACKER" Discord Channel for "POWER-BACKER" NFT holders.</li>
                                    <li>"POWER-BACKER"s can “buy out” the SIC-FUNDS Satoshi-Island land/Developments
                                       directly from the SIC-Foundation at 10% Discount.
                                    </li>
                                    <li>"POWER-BACKER" Discord role</li>
                                 </ul>
                              </div>
                              <div className="tp-price-meta tp-price-meta-cl" style={{ color: "white" }}>
                                 <p style={{ color: "white" }}>Price</p>
                                 <h2 style={{ color: "white" }}>4.5 ETH </h2>
                                 <div className="btn-wrapper">
                                    <button onClick={() => handleNftPurchase(30)} className="action-btn light">buy now</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="buy-any-amount single-destinations-list">
                     <h4 style={{ color: "white" }}>Buy any amount you want</h4>
                     <div className="tp-price-meta tp-price-meta-cl">
                        <p style={{ color: "white" }}>Price per token</p>
                        <h2 style={{ color: "white" }}>0.15 ETH </h2>
                     </div>
                     <div className="input_button_wrapper">
                        <input type="number" min="1" value={tokenAmountToBuy} onChange={e => setTokenAmountToBuy(e.target.value)} />
                        <button onClick={() => handleNftPurchase(tokenAmountToBuy)} className="action-btn light">mint</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {raisedETH && (
            <div className="container" style={{marginTop: "16px"}}>
               <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-8">
                     <div className="section-title text-center">
                        <h3 className="title">{raisedETH} / 300 ETH raised</h3>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   )

}
