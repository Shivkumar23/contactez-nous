import React from 'react'
import InnerBanner from '../../Layout/InnerBanner/InnerBanner';
import InnerHeader from "../../Layout/InnerHeader";
import Client from '../../Layout/Client/Client'

import { Helmet } from "react-helmet";
import GoogleMap from './GoogleMap';
import CForm from './CForm';

export default function Contact() {
    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contactez-nous | Contact</title>
                <meta name="description" content="Contact Page" />
            </Helmet>
            <div className='contact-page-section'>
                <div className="clearfix"></div>
                <InnerHeader />
                <div className="clearfix"></div>
                <InnerBanner title="Contact-us" />
                <div className="clearfix"></div>
                <GoogleMap className="map" />
                <CForm />
                <Client />
            </div>
        </React.Fragment>
    )
}
