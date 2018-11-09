import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './header';
import {ProdTable} from './product-table';
import {CompTable} from './comp-table';
import './index.css';
// another way to import an image
// import image from './img/foosball.jpg';

const products = [
  { id: 1, name: 'Foosball', shortdesc: 'Table-top game', longdesc: 'Full-wood foosball table set', manufacturer: 'USA', cond: 'new', price: '$350', img: require("./img/foosball.jpg") },
  { id: 2, name: 'Airplane', shortdesc: 'Flying machine', longdesc: 'actually its airplane movie', manufacturer: 'Canada', cond: 'used', price: '$6.99', img: require("./img/airplane.jpg") },
  { id: 3, name: 'Soccerball', shortdesc: 'Ball for football', longdesc: 'patterned leather ball, HQ', manufacturer: 'Brazil', cond: 'new', price: '$10', img: require("./img/soccerball.jpg") },
  { id: 4, name: 'Doll', shortdesc: 'Messy hair boy', longdesc: 'Doll of boy by Linlin™', manufacturer: 'Taiwan', cond: 'used', price: '$20', img: require("./img/eric.png") }
];

// Main App Class
class App extends React.Component {
  constructor(props) {
    super(props);        
    // State
    this.state = {
      products,
      compItems: []
    };
    // State binding thing in constructor
    this.updateItems = this.updateItems.bind(this);
  }  
  
  // to take the state from product tables and put it in here
  updateItems (newState) {
    this.setState({
      compItems: newState
    });
  }

  render() {
    return (
      <main>
        <Header />
        <div className="tables-container">
          <ProdTable 
            products={this.state.products}
            updateItems={this.updateItems}
          />          
          <CompTable 
            compItems={this.state.compItems}
          />
        </div>
      </main>
    )
  }
}

// ===============================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

