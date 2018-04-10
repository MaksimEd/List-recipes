import React, { PureComponent }  from 'react';
import { connect } from "react-redux";

class recipe extends React.Component {
   /*constructor(props){
      super(props);

   }*/

   render() {
      return (
         <tr style={{cursor: "pointer"}}>
            <td>
               {this.props.numberItem}
            </td>
            <td>
               <input type="text" name="title" data-id={this.props.numberItem} value={this.props.title} onChange={this.handleChange.bind(this)} />
            </td>
            <td>
               <textarea name="content" data-id={this.props.numberItem} value={this.props.content} cols="50" rows="2" onChange={this.handleChange.bind(this)} />
            </td>
            <td>
               <input type="text" name="price" data-id={this.props.numberItem} value={this.props.price} onChange={this.handleChange.bind(this)} />
            </td>
            <td onClick={ this.handleClick }>+</td>
         </tr>
      );
   }


   handleChange = (event) => { this.props.EditRecipeFunction(event.target.dataset.id, event.target.name, event.target.value); };

   handleClick = () => this.props.removeRecipeFunction( this.props.numberItem );
}



function mapDispatchToProps(dispatch) {
   return {
      removeRecipeFunction: id => dispatch({
         type: "REMOVE_RECIPE",
         payload: id
      }),
      EditRecipeFunction: (id, name, value) => dispatch({
         type: "EDIT_RECIPE",
         id: id,
         name: name,
         payload: value
      })
   }
}

export default connect(null, mapDispatchToProps)(recipe);