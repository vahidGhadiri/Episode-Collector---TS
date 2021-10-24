import React, {useContext} from "react"
import {IEpisode} from "../../../../config/interfaces";
import {Card, Container} from "./EpisodeList.style";
import {Store} from "../../../../context/store";
import {removeFavEpisode, setFavEpisodes} from "../../../../context/actions";


const EpisodeList: React.FunctionComponent<{ data: any }> = ({data}) => {
    const {state, dispatch} = useContext(Store)

    const toggleFavAction = (episode: IEpisode) => {
        const isEpisodeInFav = state.favEpisodes.includes(episode)
        const favWithoutEpisode = state.favEpisodes.filter((item: IEpisode) => item.id !== episode.id)
        isEpisodeInFav ? dispatch(removeFavEpisode(favWithoutEpisode)) : dispatch(setFavEpisodes(episode))
        console.log(state.favEpisodes)
    }

    return (
        <Container>
            {data.map((episode: IEpisode) => (
                <Card key={episode.id}>
                    <img src={episode.image.original} alt={`episode ${episode.name}`}/>
                    <h3>{episode.name}</h3>
                    <section>
                        <div> Season: {episode.season} - Episode: {episode.number} </div>
                        <button type="button" onClick={() => toggleFavAction(episode)}>
                            Fav
                        </button>
                    </section>
                </Card>
            ))}
        </Container>
    )
}

export default EpisodeList