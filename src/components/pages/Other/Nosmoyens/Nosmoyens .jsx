import React from 'react'

import { Helmet } from "react-helmet";
import Client from '../../../Layout/Client/Client';
import InnerBanner from '../../../Layout/InnerBanner/InnerBanner';
import InnerHeader from '../../../Layout/InnerHeader';
import InnerHeading from '../../../Layout/InnerHeading';
export default function Nosmoyens() {
    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contactez-nous | Le Bureau HISTORIQUE</title>
                <meta name="description" content="Historique Page" />
            </Helmet>
            <InnerHeader />
            <InnerBanner title="Le bureau" />
            <InnerHeading title='Nos moyens' />
            <div className="Nosmoyens-page-section">
                <div className="Nosmoyens-section main-container">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 col_p">
                                <h2 className='ttl'>Matériels</h2>
                                <div className="img-wrap full">
                                    <img src="./assets/images/moyens1.png" className='img-fluid' alt="" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="Nosmoyens-sec">
                                    <div className="Nosmoyens-tab">
                                        <h3><span>7</span> Ordinateurs portables HP EliteBook 85760w en triple écran et en réseau</h3>
                                        <h3><span>1</span> Photocopieur / imprimante / scanner couleur A3/A4 HP.</h3>
                                        <h3><span>1</span> Photocopieur / imprimante / scanner couleur A3/A4 Konica Minolta Bizhub C224e</h3>
                                        <h3><span>1</span>  Traceur grand format HP T1300</h3>
                                        <h3><span>1</span> Combiné coupeuse / plieuse de plan Cosinus 11530</h3>
                                        <h3><span>1</span> Station topographique totale TS12 LEICA</h3>
                                        <h3><span>1</span>  vidéo projecteur</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Logiciels-section main-container section-padding">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 col_p">
                                <h2 className='ttl'>Logiciels :</h2>
                                <div className="img-wrap">
                                    <img src="./assets/images/moyens2.jpg" className='img-fluid' alt="" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="Nosmoyens-sec">
                                    <div className="Nosmoyens-tab">
                                        <h3>Logiciel <span> Autocad </span> 2018</h3>                                    <h3>Logiciel <span> Covadis </span> 2018</h3>                                    <h3>Logiciel <span> Allplan </span> 2013</h3>                                    <h3>Microsoft Office Pro</h3>
                                        <h3>Logiciel <span>  Giration, Girabase </span></h3>
                                        <h3><span> MS Project </span></h3>
                                        <h3><span> Papyrus </span> (dimensionnement canalisations)</h3>
                                        <h3><span> Dialux </span> (étude d’éclairement)</h3>
                                        <h3><span> Oduc </span>(calcul bassin versant, dimensionnement des canalisations)</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="competences-page-footer text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                <h3 className="ttl">Ce matériel fait du bureau d’études MMO un bureau autonome avec une capacité de réactivité et d’adaptabilité à n’importe quel type de projet</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Client />
        </React.Fragment>
    )
}
