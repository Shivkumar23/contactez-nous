// import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function AApi() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((resp) => {
                resp.json().then((result) => {
                    setData(result);
                })
            })

    }, [])
    return (
        <div className='container section-padding'>
            <div className="row justify-content-center">
                {
                    data.map((item, index) => {
                        return (
                            <div className="col-lg-4 mb-4 d-flex" key={index}>
                                <div className="card shadow">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.body}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
