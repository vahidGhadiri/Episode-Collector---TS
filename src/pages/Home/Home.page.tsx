import React, {useContext, useEffect} from "react"
import {Store} from "../../context/store";
import axios from "axios";

import * as urls from "../../config/urls";
import {setData} from "../../context/actions";
import {EpisodeList} from "./components";

import {Header, Layout} from "./Home.style";


const Home: React.FC = () => {
    const {state, dispatch} = useContext(Store)

    const fetchData = () => {
        return new Promise((resolve, reject) => {
            axios.get<any>(urls.FETCH_DATA)
                .then(async response => await dispatch(setData(response.data._embedded.episodes)))
                .catch(error => reject(error))
        })
    }

    useEffect(() => {
        !state.episodes.length && fetchData()
    }, [])

    return (
        <Layout>
            <Header>
                <h1>Episode Collector</h1>
                <p>Pick your favourite episode</p>
            </Header>
            <EpisodeList data={state.episodes}/>
        </Layout>
    )
}

export default Home