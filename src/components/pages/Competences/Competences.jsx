import React from 'react'
import InnerBanner from '../../Layout/InnerBanner/InnerBanner';
import InnerHeader from "../../Layout/InnerHeader";
import Client from '../../Layout/Client/Client'
import ServiceCard from './ServiceCard'
import InnerHeading from '../../Layout/InnerHeading';
import { Helmet } from "react-helmet";
export default function Competences() {
    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contactez-nous | Competences</title>
                <meta name="description" content="Competences Page" />
            </Helmet>
        <div className='competences-page-section'>
            <div className="clearfix"></div>
            <InnerHeader />
            <InnerBanner title="Competences" />
            <InnerHeading title='Secteur public' />
            <div className="clearfix"></div>
            <div className="competences-page-card small-padding">
                <div className="container">
                    <div className="row">
                        <ServiceCard />
                    </div>
                </div>
            </div>
            <div className="competences-page-footer text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3 className='ttl'>MMO couvre toutes les compétences VRD</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Client />
        </div >
    </React.Fragment>
    )
}
