export interface IState {
    episodes: Array<string>,
    favourites: Array<string>
}

export interface IAction {
    type: string,
    payload: any
}