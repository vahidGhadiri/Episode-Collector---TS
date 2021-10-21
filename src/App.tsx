import React, {useContext, useEffect} from "react"
import ReactDOM from "react-dom"

import {Store, StoreProvider} from "./context/store"
import "./App.scss"
import {fetchData} from "./context/actions";


export const App: React.FC = () => {
    const {state} = useContext(Store)

    useEffect(() => {
        state.episodes.length === 0 && fetchData()
    }, [])

    return (
        <div>
            <h1>Rick & Morty</h1>
            <p>Pick your favourite episode</p>
        </div>
    )
}

ReactDOM.render(
    <StoreProvider>
        <App/>
    </StoreProvider>,
    document.getElementById('root'))