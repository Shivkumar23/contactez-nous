import React from 'react'
import InnerBanner from '../../Layout/InnerBanner/InnerBanner';
import InnerHeader from "../../Layout/InnerHeader";
import Client from '../../Layout/Client/Client'
import Pagination from '../BlogPage/Pagination/Pagination';
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
export default function Blog() {
    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contactez-nous | Blog</title>
                <meta name="description" content="Blog Page" />
            </Helmet>
            <div className='blog-page-section'>
                <InnerHeader />
                <InnerBanner title="Blog - Actualités" />
                <div className="clearfix"></div>
                <div className="blog-content-section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="text-right step-sec">
                                    <div className="heading-tab border-r">
                                        <h3 className='heading'>Lorem ipsum dolor sit amet,</h3>
                                        <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="text-left left-part step-sec">
                                    <div className="heading-tab d-flex">
                                        <h5 className='heading'>recherche</h5>
                                        <input type="text" />
                                        <div className="btns-block">
                                            <Link className="btn btnborder bg_blue" to="/">
                                                <i className="fa fa-search"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Pagination />
                <Client />
            </div>
        </React.Fragment>
    )
}
