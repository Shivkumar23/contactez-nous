import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Blog = () => {
    const { id } = useParams();
    const data = {
        "1": {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing eliteiusmod",
            btn: "Lire la suite",
            date: "20-8-2020",
            desc: "This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1",
            image: "../assets/images/blog/blog1.jpg"
        },
        "2": {
            title: "Eiusmod tempor incididunt ut labore et dolore magna",
            btn: "Lire la suite",
            date: "20-8-2020",
            desc: "This is test Description for service 2 Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1",
            image: "../assets/images/blog/blog2.jpg"
        },
        "3": {
            title: "Suspendisse ultrices gravida. Risus commodo viverra maecenas. .accumsan lacus vel facilisis.",
            btn: "Lire la suite",
            date: "20-8-2020",
            desc: "This is test Description for service 2 Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1",
            image: "../assets/images/blog/blog3.jpg"
        },
        "4": {
            title: "Accumsan lacus vel facilisis quis ipsum sed do.",
            btn: "Lire la suite",
            date: "20-8-2020",
            desc: "This is test Description for service 2 Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1This is test Description for service 1",
            image: "../assets/images/blog/blog4.jpg"
        }
    };

    return (
        <section className="main-container section-padding blog-section" id="blog">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="step-sec text-center">
                            <div className="heading-tab">
                                <h2 className="heading">Actualites & Blog</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua</p>
                                <div className="img-wrap">
                                    <img src="./assets/images/heading-arrow.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="inner-container blog-sec">
                            <div className="row">
                                <div className="col-lg-11 mx-auto col-md-6 col_p shadow">
                                    <div className="img-wrap scale">
                                        <img src={data[id].image} className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h6 className="card-title">{data[id].title}</h6>
                                        <p classNameName="card-text">{data[id].desc}</p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between align-items-center">
                                        <small className="blue">{data[id].date}</small>
                                        <Link to={data[id]}>
                                            <small className="text-muted">{data[id].btn} <i className="fas fa-angle-right"></i></small>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Blog;