import React  from 'react';
import { connect } from "react-redux";

class recipe extends React.Component {
   constructor(props){
      super(props);

      this.state = {
         click: 0
      };
   }

   render() {
      return (
         <tr style={{cursor: "pointer"}}>
            <td> {this.props.name} - </td>
            <td>{this.state.click}</td>
            <td onClick={ this.handClick }>+</td>
         </tr>
      );
   }



   handClick = () => this.props.removeRecipeFunction( this.props.numberItem );
}



function mapDispatchToProps(dispatch) {
   return {
      removeRecipeFunction: id => dispatch({
         type: "REMOVE_RECIPE",
         payload: id
      }),
   }
}

export default connect(null, mapDispatchToProps)(recipe);