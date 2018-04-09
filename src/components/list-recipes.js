import React  from 'react';
import { connect } from 'react-redux';

import Recipe from './recipe'
//import { addNameRecipe } from '../actions/'



class listRecipes extends React.Component {

   render() {
      return (
         <div>

            <div onClick={this.clickAdd}>
               click to me
            </div>

            <table>

               <thead>
               <tr>
                  <td>Заголовок</td>
                  <td>Количество кликов</td>
                  <td>Удалить</td>
               </tr>
               </thead>

               <tbody>

               {this.props.recipeInfo.map((item, key) => <Recipe key={key} name={item.name} numberItem={key} />)}
               </tbody>

            </table>

         </div>


      );
   }

   clickAdd = () => {
      this.props.addRecipeFunction('lol');
   };
}


function mapStateToProps(state) {
   return {
      recipeInfo: state.recipeInfo,
   }
}

function mapDispatchToProps(dispatch) {
   return {
      addRecipeFunction: name => dispatch({
         type: "ADD_RECIPE",
         payload: name
      })
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(listRecipes);