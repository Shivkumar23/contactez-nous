import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 70) {
                handleShow(true);
            }
            else {
                handleShow(false);
            }
        })
    }, [])
    return (
        <>
            <div id="header-fix" className={`header ${show && 'active'}`}>
                <div className="top_header_bar d-lg-block">
                    <div className="container">
                        <div className="top_menu mb-0">
                            <p><span>Contactez-nous par téléphone :</span>04 56 11 20 38</p>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <div className="img-wrap">
                                <img src="assets/images/logo.png" className="img-fluid" alt="" />
                            </div>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/bureau">Le bureau </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/projet">Projets</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/competences">Compétences</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/blog">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                            <ul className="d-flex top_social flex-wrap list-unstyled">
                                <li className='search_icon'>
                                    <form className="search-box">
                                        <input type="text" placeholder=" " />
                                        <button type="reset"></button>
                                    </form>
                                </li>
                                <li><a href="https://www.facebook.com" target='blank'><i className="fab fa-facebook-f"> </i> </a>
                                    <a href="https://www.linkedin.com" target='blank'><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
