import React from 'react';
import {Product} from './product';

export class ProdTable extends React.Component {
  constructor(props) {
    super(props);
    // State
    this.state = {
      compItems: []
    };
    // Binder to add selected products into ProdTable's state
    this.appendItem = this.appendItem.bind(this);
  }    

  /** Takes a product and its selected state, if its selected pushes it into this
   * components compItems array, if removed compares the id of items already in 
   * the list, if found same item will remove it.
   */
  appendItem(newProduct, selectedState) { 
    const itams = this.state.compItems
    if (selectedState)
      itams.push(newProduct);
    else  
      for (let index = 0; index < itams.length; index++) {
        if (newProduct.id === itams[index].id) {
          itams.splice(index, 1);
        }        
      }

    this.setState({
      compItems: itams //this.state.compItems
    });
    // this sets local state here to global app state of compItems
    this.props.updateItems(itams);
  }
  
  render() {
    const items = this.props.products;
    //const handleClick = e => props.changeColor(e.target.value);    
    return (      
      <div className="product-table">
        <Product key={items[0].id} product={items[0]} appendItem={this.appendItem} />
        <Product key={items[1].id} product={items[1]} appendItem={this.appendItem} />
        <Product key={items[2].id} product={items[2]} appendItem={this.appendItem} />
        <Product key={items[3].id} product={items[3]} appendItem={this.appendItem} />        
      </div>
    );
  }

}

// something else to test having it as a function component instead
// export function ProdTable1 (props) {
//   const handleClick = e => props.changeColor(e.target.value);
//   return (
//     <div className="product-table">
//       <button value="red" onClick={handleClick}></button>  
//     </div>
//   );  
// }




