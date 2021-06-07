import React from 'react'
import BackToTop from './BackToTop'

export default function Footer() {
    return (
        <>
            <div className="clearfix"></div>

            {/* Footer */}
            <footer className="footer main-container section-padding" id="contact">
                <div className="container">
                    <div className="heading-tab">
                        <h2 className="heading">VRD, terrassements et espaces verts</h2>
                    </div>
                    <div className="row">
                        {/* Footer Items */}
                        <div className="col-lg-3 col-md-6">
                            <div className="footer_sec">
                                <ul className="list-unstyled">
                                    <li><img src="./assets/images/blue-right-arrow.png" alt="" />Aménagement routier</li>
                                    <li><img src="./assets/images/blue-right-arrow.png" alt="" /> Aménagements urbains</li>
                                </ul>
                            </div>
                        </div>
                        {/* ./Footer Items */}
                        {/* Footer Items */}
                        <div className="col-lg-3 col-md-6">
                            <div className="footer_sec">
                                <ul className="list-unstyled">
                                    <li><img src="./assets/images/blue-right-arrow.png" alt="" /> Réseaux secs</li>
                                    <li><img src="./assets/images/blue-right-arrow.png" alt="" /> Réseaux hydrauliques</li>
                                </ul>
                            </div>
                        </div>
                        {/* ./Footer Items */}
                        {/* Footer Items */}
                        <div className="col-lg-3 col-md-6">
                            <div className="footer_sec">
                                <ul className="list-unstyled">
                                    <li><img src="./assets/images/blue-right-arrow.png" alt="" /> Conception</li>
                                    <li><img src="./assets/images/blue-right-arrow.png" alt="" /> Réalisation</li>
                                </ul>
                            </div>
                        </div>
                        {/* ./Footer Items */}
                        {/* Footer Items */}
                        <div className="col-lg-3 col-md-6">
                            <div className="footer_sec">
                                <ul className="list-unstyled">
                                    <li><img src="./assets/images/blue-right-arrow.png" alt="" /> Travaux de VRD</li>
                                    <li><img src="./assets/images/blue-right-arrow.png" alt="" /> Etc</li>
                                </ul>
                            </div>
                        </div>
                        {/*./Footer Items */}
                    </div>
                </div>
            </footer>
            {/*./ Footer */}
            {/* Copyright */}
            <div className="copyright-section sm-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="img-wrap">
                                        <img src="assets/images/logo.png" className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-6">
                                    <address>
                                        245 rue des Massette -<br />
                Immeuble l’Orion 73190 Challes-les-Eaux<br />
                Téléphone : <span>04 56 11 20 38</span> <br />
                                    </address>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="footer_social_link">
                                <h6 className="heading">Suivez-nous :</h6>
                                <ul className="d-flex footer_social list-unstyled">
                                    <li>
                                        <a href="https://www.facebook.com" target='blank'><i class="fab fa-facebook-f"> </i> </a>
                                        <a href="https://www.linkedin.com" target='blank'><i class="fab fa-linkedin-in"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ./Copyright */}
            <BackToTop />
        </>
    )
}
