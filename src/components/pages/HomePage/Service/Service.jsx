import React from 'react'
import data from './data'

export default function Service() {
    return (
        <>
            <section className="main-container service-section small-padding" id="competences">
                <div className="container">
                    {/* <!-- Heading --> */}
                    <div className="heading-tab">
                        <h2 className="heading text-uppercase">EN Savoir plus</h2>
                    </div>
                    {/* <!-- ./Heading --> */}
                    {/* <!-- Inner container --> */}
                    <div className="inner-container sm-padding">
                        <div className="row">
                            {
                                data.map((item, index) => (
                                    <div className="col-lg-4 col-md-4 service-tab" key={index}>
                                        <div className="inner">
                                            <div className="icon-wrap">
                                                <div className="icon-img">
                                                    <img className="img-fluid" src={item.img} alt={item.alt} />
                                                </div>
                                            </div>
                                            <div className="txt text-white">
                                                <h5 className="ttl">{item.ttl}</h5>
                                                <p className="desc">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog_footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 mx-auto">
                            <div className="row">
                                <div className="col-lg-5 col-md-6 blog-sec">
                                    <div className="img-wrap">
                                        <img src="./assets/images/plus-logo.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-6">
                                    <div className="info">
                                        <p>Pour plus de renseignements ou pour établir un devis détaillé,</p>
                                        <h5 className="ttl">n’hésitez pas à contacter MMO à Challes-les-Eaux.</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
