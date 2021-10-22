import React from "react"
import ReactDOM from "react-dom"
import {StoreProvider} from "./context/store"

import {Home} from "./pages";
import "./App.scss"


ReactDOM.render(
    <StoreProvider>
        <Home/>
    </StoreProvider>,
    document.getElementById('root'))