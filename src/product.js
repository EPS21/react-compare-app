import React from 'react';
import {Button} from './button'

export class Product extends React.Component {
  constructor(props) {
    super(props);
    // State
    this.state = {
      product: this.props.product,
      selected: false
    };
    // Binder from button to change products selected state
    this.changeProdState = this.changeProdState.bind(this);
  }  

  /** using setState second parameter, does callback function to append item to ProdTable's 
   * state array when a product's state is changed */ 
  changeProdState (newState) {
    this.setState(
      {selected: newState}, () => this.props.appendItem(this.props.product, this.state.selected));
  }  

  // To have overlay effect when an item is selected
  renderOverlay() {
    if (this.state.selected === true) {      
      return (
        <div className="layerSelect"></div>
      )
    } else {
      return (
        <div className="layer"></div>
      )
    }
  }
  
  render() {    
    const item = this.props.product
    return (
      <div className="product-container">
        <div className="img-container">
          <img className="product-img" src={item.img} alt={item.name} />
            {this.renderOverlay()}            
          <Button 
            product = {item}
            changeProdState = {this.changeProdState}            
            // isSelected={this.props.isSelected}
          />
        </div> 
        <div className="product-desc">
          <p>Name: {item.name}, Price {item.price}</p>
          <p>Summary: {item.shortdesc}</p>
        </div>

        {/* This was before I figured out setState() had a second parameter for callbacks */}
        {/* <button onClick={() => this.props.appendItem(this.props.product, this.state.selected)}>asdfasdf</button> */}      
      </div>      
    );
  }

}

