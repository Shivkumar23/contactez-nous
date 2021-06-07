import React from 'react'
import CardData from './CardData'
export default function Competences() {
    return (
        <section className="main-container competences-section" id="projets">
            <div className="container-fluid">
                <div className="row">
                    {
                        CardData.map((item, index) => {
                            return (
                                <div className="col-lg-4 col-md-6 col_p" key={index}>
                                    <div className="gallery">
                                        <div className="img-wrap">
                                            <img src={item.img} alt={item.alt} className="ing-fluid" />
                                        </div>
                                        <div className="desc">
                                            <h3 className="ttl">{item.ttl}</h3>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}
