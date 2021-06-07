import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [textarea, setTextarea] = useState("");
    const [prenom, setPrenome] = useState('');
    const notify = () => toast.success('Form Successfully', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    function getFormData(e) {
        let data = { name, email, address, textarea, prenom }
        console.warn(data)
        e.preventDefault()

    }

    return (
        <>
            <div className="clearfix"></div>
            <div className="form-content">
                <div className="form-left small-padding">
                    <div className=" step-sec heading-tab">
                        <h2 className='title'>Nos coordonnées</h2>
                        <div className="head">
                            <h5 className='ttl'>Address</h5>
                            <p>245 rue des Massette - <br />Immeuble l’Orion 73190 Challes-les-Eaux</p>
                        </div>
                        <div className="head">
                            <h5 className='ttl'>Téléphone</h5>
                            <p><span className='number'>04 56 11 20 38</span></p>
                        </div>
                        <div className="head">
                            <h5 className='ttl'>Mail</h5>
                            <p><span className='email'>contact@mmo.com</span></p>
                        </div>
                        <div className="head">
                            <a href="https://www.facebook.com" target="blank"><i class="fab fa-facebook-f"> </i> </a><a href="https://www.linkedin.com" target="blank"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="right-from small-padding">
                    <div className="heading-tab step-sec">
                        <h3 className="heading">Contactez MMO à Challes-les-Eaux</h3>
                        <p>N’hésitez pas à nous adresser vos demandes à l’aide de ce formulaire de contact, nous vous répondrons dans les plus brefs délais.</p>
                    </div>
                    <Form onSubmit={getFormData}>
                        <Form.Group controlId="formGroupname">
                            <Form.Label>NQM</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formGroupprenom">
                            <Form.Label>Prenom</Form.Label>
                            <Form.Control type="text" value={prenom} onChange={(e) => setPrenome(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={5} value={textarea} onChange={(e) => setTextarea(e.target.value)} />
                        </Form.Group>
                        <div className="btns-block text-right">
                            <button className="btn btnborder bg_blue" onClick={notify}>Envoyer</button>
                            <ToastContainer />
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}
