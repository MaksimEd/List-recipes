import { combineReducers } from "redux";


const initialState = [
   {
      name: "1"
   },
   {
      name: "2"
   },
   {
      name: "3"
   }
];



const recipeInfo = (state = initialState, action) => {
   switch (action.type) {

      case "ADD_RECIPE":
         console.log(state);
         return [{ name: action.payload }, ...state];//создаем новый масив

      case "REMOVE_RECIPE":
         let newState = [...state];
         console.log( newState.splice(action.payload, 1) );
         return newState;//создаем новый масив

      default:
         return state;
   }
};

const rootReducer = combineReducers({
   recipeInfo: recipeInfo
});

export default rootReducer;