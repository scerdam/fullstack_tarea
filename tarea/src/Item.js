import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Item extends Component {
  render() {
  return (

      <a class="list-group-item">
        <div class="row">
          <div class="col-md-8 col-sm-8">
              <strong>Comuna:</strong> {this.props.comuna}
              <br/>
              <strong>Direccion:</strong>  {this.props.direccion}
              <br/>
              <strong>Nombre Cliente:</strong>  {this.props.nombre}
          </div>
          <div class="col-md-4 col-sm-4">
              <strong>Peso Paquete:</strong>  {this.props.peso}
              <br/>
              
          </div>
        </div>

      </a>


  );
}
}

export default Item;
