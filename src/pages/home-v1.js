import React from "react";
import Navbar from "../components/global-components/navbar";
import Banner from "../components/section-components/banner";
import Intro from "../components/section-components/intro";
import Offer from "../components/section-components/offer";
import Video from "../components/section-components/video";
import HolidayPlan from "../components/section-components/holiday-plan";
import Review from "../components/section-components/review";
import BlogSection from "../components/blog-components/blog-section";
import Footer from "../components/global-components/footer";
import Team from "../components/section-components/team";

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Banner />
        <Intro />
        <Offer />
        <Video />
        <HolidayPlan />
        <Review />
        <BlogSection />
        <Team />
        <Footer />
    </div>
}

export default Home_V1

