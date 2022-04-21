import Toaster from "../components/Toaster";

function MyApp({ Component, pageProps }) {

   return (
      <>
         <div className="preloader" id="preloader">
            <div className="preloader-inner">
               <div className="spinner">
                  <div className="dot1"></div>
                  <div className="dot2"></div>
               </div>
            </div>
         </div>
         <div className="body-overlay" id="body-overlay"></div>
         <div className="search-popup" id="search-popup">
            <form action="index.html" className="search-form">
               <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search....." />
               </div>
               <button type="submit" className="submit-btn"><i className="fa fa-search"></i></button>
            </form>
         </div>
         <div id="viaje" />
         <div className="back-to-top">
            <span className="back-top"><i className="fa fa-angle-up"></i></span>
         </div>
         <Component {...pageProps} />
         <Toaster />
      </>
   );
}

export default MyApp;
