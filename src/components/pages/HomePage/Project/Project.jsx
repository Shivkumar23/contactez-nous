import React from 'react'

export default function Project() {
    return (
        <>
            <section className="main-container projets-section" id="project">
                <div className="container">
                    <div className="step-tab">
                        <div className="step-sec">
                            {/* <!-- Heading --> */}
                            <div className="heading-tab text-center">
                                <h2 className="heading">Projets</h2>
                                <h5 className="sub-heading">MMO couvre toutes les compétences en VRD,</h5>
                                <p>terrassements et espaces verts</p>
                                <div className="img-wrap">
                                    <img src="./assets/images/heading-arrow.png" alt="" />
                                </div>
                            </div>
                            {/* <!-- ./Heading --> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
