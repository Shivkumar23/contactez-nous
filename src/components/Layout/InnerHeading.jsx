import React from 'react'
import { Link } from 'react-router-dom'

export default function InnerHeading({ title }) {
    return (
        <React.Fragment >
            <div className="clearfix"></div>
            <div className="small-padding clearfix">
                <div className="container">
                    <div className='inner-heading'>
                        <div className="inner-tab">
                            <div className="img-wrap">
                                <img src="./assets/images/heading-arrow-left.jpg" alt="" />
                            </div>
                            <h2>{title}</h2>
                        </div>
                        <div class="dropdown dropleft">
                            <Link class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            </Link>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link class="dropdown-item" to="/">Action</Link>
                                <Link class="dropdown-item" to="/">Another action</Link>
                                <Link class="dropdown-item" to="/">Something else here</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
