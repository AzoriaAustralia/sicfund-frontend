import React from "react";
import Home_V1 from "./home-v1";
import Head from 'next/head';

const IndexPage = () => {
   return (
      <>
         <Head>
            <title>SIC-Fund Island Development</title>
         </Head>
         <Home_V1 />
         {/*<h1>elo</h1>*/}
      </>
   );
};

export default IndexPage;