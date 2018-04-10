import React  from 'react';
import { connect } from 'react-redux';

import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Recipe from './recipe'


//import { addNameRecipe } from '../actions/'


class listRecipes extends React.Component {

   render() {
      return (
         <DragDropContextProvider backend={HTML5Backend}>
            <div>

               <div onClick={this.clickAdd}>
                  click to me
               </div>

               <div style={{ overflow: 'hidden', clear: 'both' }}>

               <table>

                  <thead>
                  <tr>
                     <td>Номер</td>
                     <td>Заголовок</td>
                     <td>Описание</td>
                     <td>Цена</td>
                     <td>Удалить</td>
                  </tr>
                  </thead>

                  <tbody>

                     {this.props.recipeInfo.map((item, key) => <Recipe key={key} title={item.title} content={item.content} price={item.price} numberItem={key} />)}
                  </tbody>

               </table>
               </div>

            </div>
         </DragDropContextProvider>

      );
   }

   clickAdd = () => {
      this.props.addRecipeFunction();
   };
}


function mapStateToProps(state) {
   return {
      recipeInfo: state.recipeInfo,
   }
}

function mapDispatchToProps(dispatch) {
   return {
      addRecipeFunction: () => dispatch({
         type: "ADD_RECIPE"
      })
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(listRecipes);