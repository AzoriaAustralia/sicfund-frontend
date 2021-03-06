import React from 'react';
import Navbar from '../components/global-components/navbar';
import PageHeader from '../components/global-components/page-header';
import DestinationDetails from '../components/section-components/destination-details';
import Subscribe from '../components/section-components/subscribe';
import Footer from '../components/global-components/footer';

const DestinationDetailsPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Destinations Details"  />
        <DestinationDetails />
        <Subscribe />
        <Footer />
    </div>
}

export default DestinationDetailsPage

