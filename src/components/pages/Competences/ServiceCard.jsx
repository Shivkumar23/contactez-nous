import React from 'react'
import { Link } from 'react-router-dom'
import ServiceData from './ServiceData'
function ServiceCard() {
    return (
        <>
            {
                ServiceData.map((item, index) => {
                    return (
                        <div className="col-lg-4 col-md-6 col-sm-12 d-flex card_box" key={index}>
                            <div className="inner-box">
                                <div className="image">
                                    <Link to="/blog1">
                                        <div className="img-wrap zoom">
                                            <img src={item.img} alt="" className="img-fluid" />
                                        </div>
                                    </Link>
                                </div>
                                <div className="lower-content">
                                    <div className="heading-tab">
                                        <h5 className="sub_ttl"><Link to="/blog1">{item.title}</Link>
                                        </h5>
                                        <h3 className="ttl">{item.body}</h3>
                                    </div>
                                    <div className="btns-block text-center">
                                        <Link className="btn btn-sm btnborder" to="/">{item.pagelink}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

                )
            }
        </>

    )
}

export default ServiceCard
