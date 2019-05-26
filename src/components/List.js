import React from 'react'
import { Link } from 'react-router-dom'
function List({ item }) {
    return (
        <div className="col-md-6 mb-3">
            <div className="card">
                <img src={item.image} className="card-img-top" alt="..." style={{ height: 240 }}/>
                <div className="card-body">
                    <Link to={{
                        pathname: `/detail/${item.id}`,
                    }}>
                        <h5 className="card-title">{item.name}</h5>
                    </Link>
                    <p className="card-text">Rp. {item.price}</p>
                    <button className="btn btn-primary">add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default List