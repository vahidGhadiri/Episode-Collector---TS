import React from "react"
import {IEpisode} from "../../../../config/interfaces";


const EpisodeList: React.FC = ({data}: any) => {
    return (
        <section>
            {data.map((item: IEpisode) => (
                <section key={item.id}>
                    <img src={item.image.original} alt={`episode ${item.name}`}/>
                    <div>{item.name}</div>
                    <section>
                        Season: {item.season} - Episode: {item.number}
                    </section>
                </section>
            ))}
        </section>
    )
}

export default EpisodeList