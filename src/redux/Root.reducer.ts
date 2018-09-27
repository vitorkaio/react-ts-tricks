import { combineReducers } from 'redux'

import Sidenav from "./Sidenav/Sidenav.reducer";

export default combineReducers<any>({
  sidenav: Sidenav
});