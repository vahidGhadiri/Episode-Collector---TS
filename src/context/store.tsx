import React, {useReducer} from "react"
import {initialState, reducer} from "./reducers";


export const Store = React.createContext(initialState)

export const StoreProvider: React.FC = (props: any) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>
}


