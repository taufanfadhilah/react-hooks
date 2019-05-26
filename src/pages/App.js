import React, { useEffect, useContext } from 'react';
// import { initialItems, reducer } from "../reducer";
import swal from 'sweetalert'
import Form from '../components/Form'
import List from '../components/List'
import { Context } from '../context'
function App() {

  // const [items, dispatch] = useReducer(reducer, initialItems)
  const { items, dispatch } = useContext(Context)

  const onSubmit = e => {
    e.preventDefault()
    const data = {
      id: items.length,
      name: e.target.name.value,
      price: e.target.price.value,
      image: e.target.image.value,
    }
    dispatch({
      type: 'add',
      data
    })
    swal('Success', 'Add item success', 'success')
  }

  const onRemove = () => {
    dispatch({
      type: 'remove'
    })
    swal('Success', 'Items has removed', 'info')
  }

  useEffect(() => {
    document.title = `You have ${items.length} items.`
  })

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-4 col-sm-12 mb-3">
          <Form onSubmit={onSubmit} onRemove={onRemove} />
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="row mx-1">
            {
              items.map(item => (
                <List item={item} key={item.id} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
