import React from "react"
import ReactDOM from "react-dom"

import {Store, StoreProvider} from "./context/store"
import "./App.scss"


export const App: React.FC = () => {
    const context = React.useContext(Store)
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