import React, { Component } from 'react';
import './App.css';

class Item extends Component {


  render() {

  return (

      <a className="list-group-item">
        <div className="row">
          <div className="col-md-8 col-sm-8" >
              <strong>Comuna:</strong> {this.props.comuna}
              <br/>
              <strong>Direccion:</strong>  {this.props.direccion}
              <br/>
              <strong>Nombre Cliente:</strong>  {this.props.nombre}
          </div>
          <div className="col-md-4 col-sm-4">
              <strong>Peso Paquete:</strong>  {this.props.peso}
              <br/>
              <strong>Fecha de retiro:</strong>  [date] <br/>
              <button type="button" className="btn btn-success btn-md" onClick={this.props.onIncrement}>
                Retirado
              </button>
          </div>
        </div>

      </a>


  )
}
}

export default Item;
