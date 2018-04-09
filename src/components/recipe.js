import React  from 'react';

class recipe extends React.Component {
   constructor(props){
      super(props);

      this.state = {
         click: 0
      };

      this.handClick = this.handClick.bind(this);
   }

   render() {
      return (
         <tr style={{cursor: "pointer"}}>
            <td> {this.props.name} - </td>
            <td>{this.state.click}</td>
            <td onClick={this.handClick}>+</td>
         </tr>
      );
   }



   handClick = () => this.setState({ click: this.state.click + 1 });
}


export default recipe;