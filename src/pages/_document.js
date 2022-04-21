import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
   static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps };
   }

   render() {
      return (
         <Html>
            <Head>
               <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
               <link rel="icon" href="/assets/img/favicon.png" sizes="20x20" type="image/png" />
               {/*<!-- Font Awesome Css -- />*/}
               <link rel="stylesheet" href="/assets/css/animate.css" />
               <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
               <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
               <link rel="stylesheet" href="/assets/css/slick.css" />
               <link rel="stylesheet" href="/assets/css/swiper.min.css" />
               <link rel="stylesheet" href="/assets/css/nice-select.css" />
               <link rel="stylesheet" href="/assets/css/jquery-ui.min.css" />
               {/*<!-- icons -- />*/}
               <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
               <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.2.0/css/fork-awesome.min.css" integrity="sha256-XoaMnoYC5TH6/+ihMEnospgm0J1PM/nioxbOUdnM8HY=" crossOrigin="anonymous" />
               <link rel="stylesheet" href="/assets/css/themify-icons.css" />
               <link rel="stylesheet" href="/assets/css/line-awesome.min.css" />
               {/*<!-- main css -- />*/}
               <link rel="stylesheet" href="/assets/css/style.css" />
               {/*<!-- responsive css -- />*/}
               <link rel="stylesheet" href="/assets/css/responsive.css" />
               <script src="/assets/js/jquery-2.2.4.min.js" />
               <script src="/assets/js/popper.min.js" />
               <script src="/assets/js/bootstrap.min.js" />
               <script src="/assets/js/jquery.magnific-popup.js" />
               <script src="/assets/js/owl.carousel.min.js" />
               <script src="/assets/js/wow.min.js" />
               <script src="/assets/js/slick.js" />
               <script src="/assets/js/waypoints.min.js" />
               <script src="/assets/js/jquery.counterup.min.js" />
               <script src="/assets/js/imagesloaded.pkgd.min.js" />
               <script src="/assets/js/isotope.pkgd.min.js" />
               <script src="/assets/js/swiper.min.js" />
               <script src="/assets/js/jquery.nice-select.min.js" />
               <script src="/assets/js/jquery-ui.min.js" />
               <script src="/assets/js/video-player.min.js" />
               <script defer src="/assets/js/main.js" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;