import React from 'react';

export class CompTable extends React.Component {  

  renderCompList() {
    if (this.props.compItems.length === 0) { // change to less than 2 for only showing if 2 items
      //don't show stuff
      return (null)
    } 
    else {
      //show stuff
      return (
        <div id="comp-table" className="product-table">
          <div className="product-container">
            <h3 id="qwer">asdf</h3>
            <p>Price:</p>
            <p>Description:</p>
            <p>Manufacturer:</p>
            <p>Condition:</p>
          </div>

          {this.props.compItems.map(i => {
            return (
              <div key={i.id} id="comp-container" className="product-container">
                <h3>{i.name}</h3>
                <p>{i.price}</p>
                <p>{i.longdesc}</p>
                <p>{i.manufacturer}</p>
                <p>{i.cond}</p>
              </div>
            )
          })}

        </div>
      );
    }
  }  

  render() {
    return (  
      this.renderCompList()
    );
  }
}