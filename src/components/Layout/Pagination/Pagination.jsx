import React, { useState } from "react";
import Pagi from "react-js-pagination";
import { Link } from 'react-router-dom'
import Bdata from './Bdata'

const Pagination = () => {
    const todosPerPage = 9;
    const [activePage, setCurrentPage] = useState(1);

    const indexOfLastTodo = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = Bdata.slice(indexOfFirstTodo, indexOfLastTodo);
    const renderTodos = currentTodos.map((item, index) => {
        return (
            <div className="news-block-four col-lg-4 col-md-6 col-sm-12 d-flex" key={index}>
                <div className="inner-box">
                    <div className="image">
                        <Link to={item.component}>
                            <div className="img-wrap zoom">
                                <img src={item.image} alt="" className="img-fluid" />
                            </div>
                        </Link>
                    </div>
                    <div className="lower-content">
                        <div className="heading-tab">
                            <h5 className='sub_ttl'>
                                <Link to={item.component}>{item.title}</Link></h5>
                            <h3 className='ttl'>{item.sub_title}</h3>
                        </div>

                        <div className="btns-block"><Link className="btn btn-sm btnborder" href="/">detail project</Link></div>
                    </div>
                </div>
            </div>
        )
    })

    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setCurrentPage(pageNumber)
    };

    return (
        <>
            <div className="clearfix"></div>
            <section className="news-section-four">
                <div className="container">
                    <div className="styled-pagination border-b">
                        <Pagi
                            activePage={activePage}
                            itemsCountPerPage={5}
                            totalItemsCount={Bdata.length}
                            pageRangeDisplayed={5}
                            onChange={handlePageChange}
                        // firstPageText={false}
                        // lastPageText={false}
                        />
                    </div>
                    <div className="inner-container paginaiton-sec small-padding">
                        <div className="row">
                            {renderTodos}
                        </div>
                    </div>
                    <div className="styled-pagination border-t">
                        <Pagi
                            activePage={activePage}
                            itemsCountPerPage={5}
                            totalItemsCount={Bdata.length}
                            pageRangeDisplayed={5}
                            onChange={handlePageChange}
                        // firstPageText={false}
                        // lastPageText={false}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pagination
