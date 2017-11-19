import React, { Component } from 'react';
import './App.css';
import Item from './Item';




class List extends Component {


  render() {


    const items = this.props.value.map((i) =>
           <div className="list-group">
              <Item comuna={i.Comuna} direccion={i.Direccion} peso={i.Peso} nombre={i.Cliente}
              store={this.props.store} onIncrement={this.props.onIncrement}/>
              
           </div>

    );





    return (
      <div className="App-intro">
          {items}
      </div>
    );
  }
}

export default List;
