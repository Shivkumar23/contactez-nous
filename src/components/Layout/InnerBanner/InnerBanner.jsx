import React from 'react'

export default function InnerBanner({ title }) {
    return (
        <>
            <section class="InnerArea bgprimaryNew">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 text-white text-center">
                            <h2 class="heading">{title}</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
