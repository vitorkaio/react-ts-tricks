import { Action } from 'redux'
/* import { ICustomAction } from "./Sidenav/Sidenav.types";

export interface IAppState {
    settings: ISettingsState
    ticket: ITicketState
    user: IUserState
} */

export interface IReduxAction extends Action {
    payload?: any
}