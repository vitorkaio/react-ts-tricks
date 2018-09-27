import { Map } from "immutable";
import * as SidenavActions from "./Sidenav.actions";
import { ICustomAction } from "./Sidenav.types";

const initialize = Map({
  component: ""
});

const SidenavReducer = (state = initialize, action: ICustomAction) => {
  switch (action.type) {
    case SidenavActions.PUSH:
      state = state.set("component", action.payload.component);
      // console.log(state.get("component"));
      return state;
  
    default:
      break;
  }
  return state;
}

export default SidenavReducer;