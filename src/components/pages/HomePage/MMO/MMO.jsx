import React from 'react'
import { Link } from 'react-router-dom'
export default function MMO(props) {
    return (
        <section className="main-container mmo-section" id="projets">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="step-sec">
                            <div className="heading-tab">
                                <h2 className="heading">{props.ttl}</h2>
                                <h4 className="sub-heading">{props.sub_ttl}</h4>

                                <p>Morin Maîtrise d’Œuvre est une entité nouvellement créée, depuis mars 2012.</p>
                                <p>Après 26 ans passés en entreprise de travaux publics dans un groupe national, Philippe MORIN, a décidé
                de mettre ses compétences acquises sur le terrain au service des maîtres d’ouvrage.</p>
                                <p>7 ans passés sur chantiers, 16 ans en conduite de travaux, et enfin la responsabilité d’un bureau
                                d’études pour toute la Savoie jusqu’en Février 2012, l’ont conduit à créer sa propre entreprise : MMO.
              </p>

                                <p>
                                    De nombreuses conceptions de chantiers confiés par différents maîtres d’ouvrages (publics et privés)
                                    sont déjà venues enrichir son savoir-faire, et la reconnaissance rapide des compétences du bureau
                                    d’études en VRD
              </p>
                                <p>par les clients, lui ont permis de se développer et d’embaucher trois jeunes salariés.</p>
                                <p>L'équipe de MMO Bureau d'étude VRD s'est étoffée et compte maintenant un chef de projet, une
                dessinatrice projeteuse et un dessinateur.</p>
                                <p>MMO maîtrise l’ensemble des techniques liées aux travaux de VRD,ce qui permet de mener à bien les
                projets.</p>
                            </div>
                            <div className="btns-block mr_bt-20">
                                <Link to="/" className="btn btn-md btnborder">en savoir plus</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col_p">
                        <div className="about_img">
                            <div className="img-wrap">
                                <img src={props.img} alt="" />
                            </div>
                            <div className="data">
                                <p>Notre expérience,notre complémentarité,nous permettent de</p>
                                <h5>répondre à vos exigences avec une réactivité optimale.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
