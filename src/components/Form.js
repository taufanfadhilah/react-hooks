import React from 'react'

function Form({onSubmit, onRemove}) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title text-center">Input Catalog</h5>
                <hr />
                <form action="" onSubmit={onSubmit}>
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" className="form-control" placeholder="Playstation 4" required />
                    <label htmlFor="">Price</label>
                    <input type="number" name="price" className="form-control" placeholder="5000000" min='1' required />
                    <label htmlFor="">Image (url)</label>
                    <input type="text" name="image" className="form-control" placeholder="http://www.tiny.com" required />
                    <button type="submit" className="btn btn-success mt-2" style={{ width: '100%' }}>Save</button>
                    <p onClick={onRemove} className="text-right text-primary">click here to remove items.</p>
                </form>
            </div>
        </div>
    )
}

export default Form