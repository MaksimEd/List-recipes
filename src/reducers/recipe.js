const initialState = [{
               name: "1"
            },
            {
               name: "2"
            },
            {
               name: "3"
            }];

export default function userInfo (state = initialState, action) {
   switch (action.type) {
      case "ADD_RECIPE":
         console.log(state);
         return [{ name: action.payload }, ...state];//создаем новый масив
      default:
         return state;
   }
}