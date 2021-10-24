import React, {useContext} from "react"
import {RiHeart3Fill, RiHeart3Line} from "react-icons/ri"

import {Store} from "../../../../context/store";
import {removeFavEpisode, setFavEpisodes} from "../../../../context/actions";
import {IEpisode} from "../../../../config/interfaces";

import {Button, Card, Container, Detail} from "./EpisodeList.style";


const EpisodeList: React.FunctionComponent<{ data: any }> = ({data}) => {
    const {state, dispatch} = useContext(Store)

    const toggleFavAction = (episode: IEpisode): void => {
        const isEpisodeInFav = state.favEpisodes.includes(episode)
        const favWithoutEpisode = state.favEpisodes.filter((item: IEpisode) => item.id !== episode.id)
        isEpisodeInFav ? dispatch(removeFavEpisode(favWithoutEpisode)) : dispatch(setFavEpisodes(episode))
    }


    return (
        <Container>
            {data.map((episode: IEpisode) => (
                <Card key={episode.id}>
                    <img src={episode.image.original} alt={`episode ${episode.name}`}/>
                    <Detail>
                        <h3>{episode.name}</h3>
                        <Button type="button" onClick={() => toggleFavAction(episode)}>
                            {state.favEpisodes.find((item: IEpisode) => item.id === episode.id) ?
                                <RiHeart3Fill/> :
                                <RiHeart3Line/>}
                        </Button>
                    </Detail>
                    <section>
                        <div> Season: {episode.season} - Episode: {episode.number} </div>
                    </section>

                </Card>
            ))}
        </Container>
    )
}

export default EpisodeList