export interface IState {
    episodes: Array<string>,
    favourites: Array<string>
}

export interface IAction {
    type: string,
    payload: any
}

export interface IEpisode {
    airdate: string
    airstamp: string
    airtime: string
    id: number,
    name: string
    number: number
    runtime: number
    season: number
    summary: string
    url: string
    image: { medium: string, original: string }
}