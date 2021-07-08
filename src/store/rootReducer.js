import { combineReducers } from "redux";
import uiSlice from "./ui/ui.slice";

const rootReducer = combineReducers({
  ui: uiSlice,
});

export default rootReducer;
