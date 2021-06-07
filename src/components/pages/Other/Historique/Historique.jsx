import React from 'react'
import { Helmet } from "react-helmet";
import Client from '../../../Layout/Client/Client';
import InnerBanner from '../../../Layout/InnerBanner/InnerBanner';
import InnerHeader from '../../../Layout/InnerHeader';
import InnerHeading from '../../../Layout/InnerHeading';
import ItemCard from './Card/ItemCard';

export default function Historique() {
    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contactez-nous | Le Bureau HISTORIQUE</title>
                <meta name="description" content="Historique Page" />
            </Helmet>
            <InnerHeader />
            <InnerBanner title="Le bureau" />
            <InnerHeading title='Historique' />

            <section className='main-container historique-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="historique-sec-img">
                                <div className="img-wrap">
                                    <img src="./assets/images/logo1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inner-contianer small-padding">
                    <div className="container">
                        <div className="row">
                            <ItemCard />
                        </div>
                    </div>
                </div>
            </section>
            <Client />
        </React.Fragment>
    )
}
