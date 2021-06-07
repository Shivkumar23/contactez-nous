import React from 'react'
import InnerBanner from '../../Layout/InnerBanner/InnerBanner';
import InnerHeader from "../../Layout/InnerHeader";
import Client from '../../Layout/Client/Client'
import Team from './Team/Team';
import { Helmet } from "react-helmet";
export default function Bureau() {
    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contactez-nous | Le Bureau</title>
                <meta name="description" content="Bureau Page" />
            </Helmet>
            <InnerHeader />
            <InnerBanner title="Le bureau" />
            <Team />
            <Client />
        </React.Fragment>
    )
}
