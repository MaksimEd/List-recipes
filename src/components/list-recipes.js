import React  from 'react';
import { connect } from 'react-redux';

import Recipe from './recipe'
import { addNameRecipe } from '../actions/'



class listRecipes extends React.Component {

   render() {
      return (
         <div>
            <table>

               <thead>
               <tr>
                  <td>Заголовок</td>
                  <td>Количество кликов</td>
                  <td>Удалить</td>
               </tr>
               </thead>

               <tbody>

               {this.props.recipeInfo.map((item, key) => <Recipe name={item.name} key={key}/>)}
               </tbody>

            </table>

            <div onClick={this.clickAdd}>
               click to me
            </div>
         </div>


      );
   }

   clickAdd = () => {
      this.props.addNameFunction('lol');
      this.props.addAuthorFunction('ghsrgsrg');
   };
}
function mapStateToProps(state) {
   return {
      recipeInfo: state.recipeInfo,
   }
}

function mapDispatchToProps(dispatch) {
   return {
      addNameFunction: name => dispatch(addNameRecipe(name))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(listRecipes);