import React, { Component } from 'react';
import mapbox from 'mapbox-gl';
import './Map.css';




class Map extends Component {
    

    componentDidMount(){
        const app = this.props.app
        
        const places = this.props.app.state.places

        mapbox.accessToken = 'pk.eyJ1IjoibTEyLXRyZW50IiwiYSI6ImNrNDNuejljbjA0NzMzZW15eGk4OWMwdTEifQ.8rs6af8i7F8oeHDpbD_zQw';

        var bounds = [
            [-110.113384, 35.747004], // Southwest coordinates
            [-102.113384, 39.747004] // Northeast coordinates
        ]
        
        const map = new mapbox.Map({
            container: 'map',
            style: app.state.style,
            // zoom: 9,
            maxZoom: 12,
            minZoom: 7.7,
            center: [app.state.longitude, app.state.latitude],
            maxBounds: bounds // Sets bounds as max
            });
        
        const navigationControl = new mapbox.NavigationControl()

        map.addControl(navigationControl, 'bottom-right')

        map.scrollZoom.disable();

        map.on('load', function(){
            map.addSource( 'route', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': [
                                [-105.436074, 37.4281735],
                                [-106.3533684, 37.6788919],
                                [-106.109683, 37.751310],
                                [-105.436074, 37.4281735],
                                [-105.907463, 37.997866],
                                [-106.3533684, 37.6788919],
                                [-105.425158, 37.199645],
                                [-106.456118, 37.007649],
                                [-105.436074, 37.4281735],
                                [-106.3533684, 37.6788919],
                                [-106.456118, 37.007649],
                                [-106.109683, 37.751310],
                                [-105.907463, 37.997866],
                                [-105.425158, 37.199645],
                                [-106.109683, 37.751310],
                                
                                
                                

                        ]
                       
                    }
                }
            });
        map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
                // 'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#fff',
                'line-width': 3
            }
        })
        })


        places.map((place) => {


            const coord = [place.longitude, place.latitude]
            const popup = new mapbox.Popup()

            popup.setHTML(`
            <div class="mapboxgl-popup-content-header">
                <h3>${place.name}</h3>
                ${place.contributor}
            </div>
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Del_Norte_%26_Sangres.jpg">
            <p class="description">${place.description}</p>
            `)

            popup.on('open', function(){
                map.flyTo({
                    center: coord,
                    zoom: 12,
                })
                });

            popup.on('close', function(){
                map.flyTo({
                    center: [app.state.longitude, app.state.latitude],
                    zoom: 9.5,
                })
                });

            var el = document.createElement('div');
            el.id = 'marker';

            
            
            

            const marker = new mapbox.Marker(el)
            marker.setLngLat(coord)
            marker.setPopup(popup)
            marker.addTo(map);
            
        
        }
        
            
        );


    }


    render(){




        
        return (
            <div id="map">
                
            </div>
        );
    }
}

export default Map;