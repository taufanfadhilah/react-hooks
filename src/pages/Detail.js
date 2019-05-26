import React, { useContext, useState } from 'react'
import { Context } from '../context'

function Detail({ history, match }) {

    const { items } = useContext(Context)
    // eslint-disable-next-line
    const [item] = useState(items.filter(item => item.id == match.params.id)[0])

    return (
        <div className="container">
            <div className="row m-5">
                <div className="col-md-4">
                    <img src={item.image} alt="..." className="img-thumbnail" style={{ width: '100%' }}></img>
                    <button onClick={() => history.goBack()} className="btn btn-secondary mt-3" style={{ width: '100%' }}>Back</button>
                </div>
                <div className="col-md-8">
                    <h4>{item.name}</h4>
                    <hr />
                    <small className="text-muted">Rp. {item.price}</small>
                    <p className="lead">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium reprehenderit temporibus, porro, veritatis libero saepe facere aut officiis provident vero cum in! Quidem, nihil incidunt consequatur iusto in unde ratione.
                    </p>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Detail