import { combineReducers } from "redux";
import recipeInfo from "./recipe";

const rootReducer = combineReducers({
   recipeInfo: recipeInfo
});

export default rootReducer;