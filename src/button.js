import React from 'react';

export class Button extends React.Component {
  constructor(props) {
    super(props); 
    // State
    this.state = {
      btnText: 'Compare',
      //selected: false
    };
  }  
  
  render() {
    return (
      <button className="middle" onClick={() => this.switchFunc()}>
        {this.state.btnText}
      </button>
    )
  }

  /** This handles changing the button's text, and based on that calls
   * Product components changeProdState to change its selected state to true
   */
  switchFunc() {        
    if (this.state.btnText === 'Compare') {
      this.setState({btnText: 'Remove '});      
      // For changing ProductState in product class for overlay and being selected
      this.props.changeProdState(true);
    } 
    else {
      this.setState({btnText: 'Compare'});
      this.props.changeProdState(false);
    }    
  }
}