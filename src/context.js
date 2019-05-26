import React, { useReducer } from 'react'
import {initialItems, reducer } from './reducer'

const Context = React.createContext()

const Provider = props => {
    const [items, dispatch] = useReducer(reducer, initialItems)
    const data = {
        items,
        dispatch
    }
    return (
        <Context.Provider value={data}>
            {props.children}
        </Context.Provider>
    )
}

export { Context, Provider }