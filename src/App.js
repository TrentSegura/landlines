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
      style: "mapbox://styles/mapbox/satellite-v9",

      // Keep this?
      places: [
        {
          toc: 0,
          name: "Birth of a Borderlands 1845-1868",
          contributor: "Joe Carpio",
          location: "Ft. Garland",
          latitude: 37.4281735,
          longitude:-105.436074,
          image: "",
          description:
          
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et dui ut justo scelerisque semper et sit amet magna. Vestibulum in sapien aliquet, congue lectus in, euismod dolor."
          },
      
          {
          toc: 1,
          name: "State of the Basin",
          contributor: "Rio de la Vista",
          location: "Del Norte",
          latitude: 37.6788919,
          longitude:-106.3533684,
          image: "",
          description:
          
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et dui ut justo scelerisque semper et sit amet magna."
          },

          {
          toc: 2,
          name: "Pictures and Notes on Rural Phenomenology",
          contributor: "Richard W. Saxton",
          location: "Center",
          latitude: 37.751310,
          longitude:-106.109683,
          image: "",
          description:
          
          "Morbi aliquam, ligula lacinia iaculis aliquet, eros nunc rutrum tellus, quis euismod tellus sapien non tortor. Aliquam eu mollis odio. Pellentesque id enim et purus dictum faucibus volutpat vel urna."
          },

          {
          toc: 3,
          name: "(Sheep), Poems",
          contributor: "Peggy Godfrey",
          location: "Moffat",
          latitude: 37.997866,
          longitude:-105.907463,
          image: "",
          description:
          
            "Vestibulum in sapien aliquet, congue lectus in, euismod dolor. Morbi aliquam, ligula lacinia iaculis aliquet, eros nunc rutrum tellus, quis euismod tellus sapien non tortor."
          },


          {
          toc: 4,
          name: "(Sheep), Poems",
          contributor: "Peggy Godfrey",
          location: "Moffat",
          latitude:  37.007649,
          longitude:-106.456118,
          image: "",
          description:
          
            "Vestibulum in sapien aliquet, congue lectus in, euismod dolor. Morbi aliquam, ligula lacinia iaculis aliquet, eros nunc rutrum tellus, quis euismod tellus sapien non tortor."
          },

          {
          toc: 5,
          name: "(Sheep), Poems",
          contributor: "Peggy Godfrey",
          location: "Moffat",
          latitude:  37.199645, 
          longitude: -105.425158,
          image: "",
          description:
          
            "Vestibulum in sapien aliquet, congue lectus in, euismod dolor. Morbi aliquam, ligula lacinia iaculis aliquet, eros nunc rutrum tellus, quis euismod tellus sapien non tortor."
          },



          
      ]
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




// {
//   name : "Birth of a Borderlands 1845-1868",
//   longitude : -106.113384,
//   latitude: 37.747004,
//   },
  
// {
//   name : "Birth of a Borderlands 1845-1868",
//   longitude : -106.113384,
//   latitude: 37.747004,
//   },

// {
//   name : "Birth of a Borderlands 1845-1868",
//   longitude : -106.113384,
//   latitude: 37.747004,
//   },
  
// {
//   name : "Birth of a Borderlands 1845-1868",
//   longitude : -106.113384,
//   latitude: 37.747004,
//   },
