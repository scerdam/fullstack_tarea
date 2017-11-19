import React, { Component } from 'react';
import './App.css';
import List from './List';



var data = [
  {
    Comuna: 'Maipu',
    Direccion: 'Calle falsa #123',
    Peso:'2 Kg',
    Cliente:'Mr Bean Frijolito',
    completed: true
  },
  {
    Comuna: 'Pudahuel',
    Direccion: 'Avenida siempre viva #123',
    Peso:'1.2 Kg',
    Cliente:'Perico los palotes',
    completed: false
  },
  {
    Comuna: 'Maipu',
    Direccion: 'Av. Longitudinal #234',
    Peso:'0.5 Kg',
    Cliente:'Nombre generico',
    completed: false
  }
];


class App extends Component {

  constructor(props) {
  super(props);

}
  render() {
    const { sto, onIncrement, onDecrement } = this.props
    return (

      <div className="App">
        <div className="App-header">

          <div className="col-md-8 col-sm-8 " >
              <h3>Mis Retiros </h3>
          </div>
          <div className="col-md-4 col-sm-4" >
              <h3><button type="button" className="btn btn-info btn-md"> Completados <span className="badge">{sto}</span></button> </h3>
          </div>

        </div>

        <div className="App-body">

          <List value={data} store={this.props.sto} onIncrement={this.props.onIncrement}
          onDecrement={() => sto.dispatch({ type: 'DECREMENT' })}/>

        </div>

      </div>
    )
  }
}



export default App;
