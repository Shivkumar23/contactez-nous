import React from 'react'
import InnerBanner from '../../Layout/InnerBanner/InnerBanner';
import InnerHeader from "../../Layout/InnerHeader";
import Client from '../../Layout/Client/Client'
import Pagination from '../../Layout/Pagination/Pagination';
import { Helmet } from "react-helmet";
export default function Projets() {
    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contactez-nous | Project</title>
                <meta name="description" content="Project Page" />
            </Helmet>
            <div className='projets-page-section'>
                <InnerHeader />
                <InnerBanner title="Project" />
                <div className="clearfix"></div>
                <div className="serach_from">
                    <form action="#" className="search-box">
                        <div className="container-fluid">
                            <div className="row">
                                {/* Panding Work */}
                                <div className="col-lg-2 col-md-6  serach-box">
                                    <div className="select-itms">
                                        <input type="text" placeholder='Mot clé(s)' />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6  serach-box">
                                    <div className="select-itms ">
                                        <select name="select" id="select1" tabindex="0">
                                            <option className="special" value="1">Catégories</option>
                                            <option className="special" value="2">Services-2</option>
                                            <option className="special" value="3">Services-3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6  serach-box">
                                    <div className="select-itms">
                                        <select name="select" id="select1" tabindex="0">
                                            <option className="special" value="1">Liste des projets par catégorie</option>
                                            <option className="special" value="2">Services-2</option>
                                            <option className="special" value="3">Services-3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6  serach-box">
                                    <div className="d-flex justify-content-around">
                                        <a href="//#region" className='btn_blue btn'>Recherche</a>
                                        <a href="//#region" className='btn_dark btn'>Tout nos projets</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="clearfix"></div>
                <div className="Project-content-section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 d-flex left-part">
                                <div className="text-right ">
                                    <h3 className='ttl'>Découvrez en image notre</h3>
                                    <h2 className='sub_ttl'>bureau d'études VRD en Savoie</h2>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 d-flex right-part">
                                <div className="text-left ">
                                    <p>MMO, Bureau d'études VRD près de Chambéry, vous propose
                                quelques-unes de ses réalisations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-pagination-section">
                    <div className="container">
                        <div className="row">

                        </div>
                    </div>
                </div>
                <Pagination />
                <Client />
            </div>
        </React.Fragment>
    )
}
