import React from "react"


const initialState = {}

export const Store = React.createContext(initialState)

export const StoreProvider: React.FC = (props: any) => {
    return <Store.Provider value="test">{props.children}</Store.Provider>
}

const reducer = () => {
    return null
}