import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Item from './Item';




class List extends Component {


  render() {

    const items = this.props.value.map(function(i) {
      return <div class="list-group">
                <Item comuna={i.Comuna} direccion={i.Direccion} peso={i.Peso} nombre={i.Cliente}/>
             </div>
    });


    return (
      <div className="App-intro">
          {items}
      </div>
    );
  }
}

export default List;
