import React from 'react'
import data from './data'
import { Link } from 'react-router-dom'
export default function Client() {
    return (
        <React.Fragment>
            <div className="clearfix"></div>

            <section className="main-container client-section">
                <div className="container">
                    <div className="logo-carousel owl-carousel">
                        {
                            data.map((item, index) => (
                                <div className="client-single-logo" key={index}>
                                    <img src={item.img} className="img-fluid" alt="" />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="links-section sm-padding">
                    <div className="container">
                        <ul className="list-unstyled d-flex justify-content-around flex-wrap">
                            <li><Link to="/">Burand</Link></li>
                            <li><a href="/competences">Compétences</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/historique">Actualites</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/">Plan du site</a></li>
                        </ul>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}
