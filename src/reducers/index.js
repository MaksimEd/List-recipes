import { combineReducers } from "redux";


const initialState = [
   {
      name: "test 1"
   },
   {
      name: "test 2"
   },
   {
      name: "test 3"
   }
];



const recipeInfo = (state = initialState, action) => {
   switch (action.type) {

      case "ADD_RECIPE":
         return [{ name: action.payload }, ...state];//создаем новый масив

      case "REMOVE_RECIPE":
         let newStateRemove = [...state];
         newStateRemove.splice(action.payload, 1);
         return newStateRemove;//создаем новый масив

      case "EDIT_RECIPE":
         let newStateEdit = [...state];
         newStateEdit.splice(action.id, 1, action.payload );

         return newStateEdit;//создаем новый масив

      default:
         return state;
   }
};

const rootReducer = combineReducers({
   recipeInfo: recipeInfo
});

export default rootReducer;