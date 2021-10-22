import React from "react"
import {IEpisode} from "../../../../config/interfaces";

import {Card, Container} from "./EpisodeList.style";


const EpisodeList: React.FunctionComponent<{ data: any }> = ({data}) => {
    return (
        <Container>
            {data.map((item: IEpisode) => (
                <Card key={item.id}>
                    <img src={item.image.original} alt={`episode ${item.name}`}/>
                    <h3>{item.name}</h3>
                    <section>
                        Season: {item.season} - Episode: {item.number}
                    </section>
                </Card>
            ))}
        </Container>
    )
}

export default EpisodeList