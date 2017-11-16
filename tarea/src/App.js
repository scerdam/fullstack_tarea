import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import List from './List';

var data = [
  {
    Comuna: 'Maipu',
    Direccion: 'Calle falsa #123',
    Peso:'2 Kg',
    Cliente:'Mr Bean Frijolito'
  },
  {
    Comuna: 'Pudahuel',
    Direccion: 'Avenida siempre viva #123',
    Peso:'1.2 Kg',
    Cliente:'Perico los palotes'
  },
  {
    Comuna: 'Maipu',
    Direccion: 'Av. Longitudinal #234',
    Peso:'0.5 Kg',
    Cliente:'Nombre generico'
  }
];

var data1 = [
  {
    url: 'https://newmedia.thomson.co.uk/live/vol/3/b678f9d04c49b11b09fda3244da5bbe65bf586d7/658x370/web/ASIAFAREASTTHAILANDTHAILANDDES_000423.jpg',
    caption: 'Hong Kong!'
  },
  {
    url: 'https://newmedia.thomson.co.uk/live/vol/3/b678f9d04c49b11b09fda3244da5bbe65bf586d7/658x370/web/ASIAFAREASTTHAILANDTHAILANDDES_000423.jpg',
    caption: 'Cows'
  },
  {
    url: 'https://newmedia.thomson.co.uk/live/vol/3/b678f9d04c49b11b09fda3244da5bbe65bf586d7/658x370/web/ASIAFAREASTTHAILANDTHAILANDDES_000423.jpg',
    caption: 'Scooters'
  }
];

const numbers = [111, 222, 333, 444, 555];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Mis Retiros</h3>
        </div>

        <div className="App-body">

          <List value={data}/>

        </div>
      </div>
    );
  }
}

export default App;
