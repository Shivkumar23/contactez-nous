import React from 'react'
import Blogs from './Blog/Blogs'
import Client from '../../Layout/Client/Client'
import Competences from './Competences/Competences'
import MMO from './MMO/MMO'
import Project from './Project/Project'
import Service from './Service/Service'
import Banner from './Home/Banner'
import Header from '../../Layout/Header'
import { Helmet } from "react-helmet";

export default function Home() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contactez-nous | Home</title>
                <meta name="description" content="Home Page" />
            </Helmet>
            <Header />
            <Banner />
            <Project />
            <Competences />
            <MMO ttl="MMO" img='./assets//images/about.jpg' sub_ttl='situé à Challes-les-Eaux, 245 avenue des Massettes, Immeuble l’Orion.' />
            <Service />
            <Blogs />
            <Client />
        </>
    )
}
