import { combineReducers } from "redux";


const initialState = [
   {
      title: "test 1",
      content: "lorem12",
      price: ""
   },
   {
      title: "test 2",
      content: "lorem12",
      price: ""
   },
   {
      title: "test 3",
      content: "lorem12",
      price: ""
   }
];



const recipeInfo = (state = initialState, action) => {
   switch (action.type) {

      case "ADD_RECIPE":
         return [{ title: '', price: '', content: '' }, ...state];//создаем новый масив

      case "REMOVE_RECIPE":
         let newStateRemove = [...state];
         newStateRemove.splice(action.payload, 1);
         return newStateRemove;//создаем новый масив

      case "EDIT_RECIPE":
         let newStateEdit = [...state];
         newStateEdit[action.id][action.name] = action.payload;
         return newStateEdit;//создаем новый масив

      default:
         return state;
   }
};

const rootReducer = combineReducers({
   recipeInfo: recipeInfo
});

export default rootReducer;