import React from 'react'
import { Link } from 'react-router-dom'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default function Banner() {

    return (
        <section className="banner">
            <OwlCarousel id="banner-slider" className='owl-theme'
                margin={0}
                loop={true}
                dots={false}
                nav={true}
                autoplay={false}
                autoplayTimeout={3000}
                autoplayHoverPause={false}
                items={1}
                navText={["<img src='./assets/images/left-arrow.png'>", "<img src='./assets/images/right-arrow.png'>"]}

            >
                <div className="item banner-style" style={{ backgroundImage: "radial-gradient(circle at 70% 55%, rgba(255, 255, 255, 0) 0%, rgb(4 24 227 / 73%) 19%), url(assets/images/banner/slider-2.jpg)" }}>
                    {/* <!-- Banner Caption --> */}
                    <div className="banner-caption">
                        <div className="container">
                            <div className="inner-container">
                                <h1 className="banner-heading">
                                    MMO, bureau d'études VRD,<br />terrassements et espace verts<br />à Challes-les-Eaux</h1>
                                <h2 className="sub-heading">au service maîtres d'ouvrage en Savoie intervient sur :</h2>
                                <div className="info-tab d-flex justify-content-center">
                                    <ul className="list-unstyled">
                                        <li>la Savoie</li>
                                        <li>la Haute-Savoie</li>
                                        <li>l'Isère</li>
                                        <li>l'Ain</li>
                                    </ul>
                                    <ul className="list-unstyled">
                                        <li>la Drome,</li>
                                        <li>l'Ardèche,</li>
                                        <li>le Rhône,</li>
                                    </ul>
                                </div>
                            </div>
                            <p>avec quelques interventions en Côte d’Or, dans le Gard et la Picardie</p>
                        </div>
                        <div className="btns-block">
                            <Link to="/" className="btn btn-md btnprimary">Nos réalisations</Link>
                        </div>
                    </div>
                    {/* <!-- ./Banner Caption --> */}
                </div>
            </OwlCarousel >
        </section >
    )
}
