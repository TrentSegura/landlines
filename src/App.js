import React, {Component} from 'react';
import Map from './Map';
import './App.css';


class App extends Component {

  // toggle maps ??
  constructor(props){
    super(props)

    
    this.state = {
      map: null,
      latitude: 37.548004,
      longitude: -106.113384,
      style: "mapbox://styles/m12-trent/ckg9xlrw62gxc19lc9hbaylmf",
      // style: "mapbox://styles/mapbox/satellite-v9",         
    }
  }



  render(){
    return (
      <div className="App">
        <Map app={this}></Map>
        <div className="Mapoverlay">
          <h1>Landlines</h1>
          <h2>M12 Studio</h2>
        </div>


      </div>
    );
  }
}

export default App;
