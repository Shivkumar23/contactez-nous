import React from "react";
import { Link } from "react-router-dom";
import Items from "./Items";

const Blogs = () => {
    return (
        <section className="main-container section-padding blog-section" id="blog">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="step-sec text-center">
                            <div className="heading-tab">
                                <h2 className="heading">Actualites & Blog</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua</p>
                                <div className="img-wrap">
                                    <img src="./assets/images/heading-arrow.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="inner-container blog-sec">
                            <div className="row">{
                                Items.map((item, index) => {
                                    return (
                                        <div className="col-lg-3 col-md-6 intro-tab" key={index}>
                                            <div className="card shadow-aqua">
                                                <div className="img-wrap scale">
                                                    <Link to={item.id}>
                                                        <img src={item.image} className="card-img-top" alt="..." />
                                                    </Link>
                                                </div>
                                                <div className="card-body">
                                                    <h6 className="card-title">{item.title}</h6>
                                                </div>
                                                <div className="card-footer d-flex justify-content-between align-items-center">
                                                    <small className="blue">{item.date}</small>
                                                    <Link to={item.id}>
                                                        <small className="text-muted">{item.text} <i className="fas fa-angle-right"></i></small>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                        <div className="btns-block text-center pd_tp_20">
                            <a href="//#region" className="btn btn-md btnborder">Toutes les actualités</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Blogs;
