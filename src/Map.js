import React, { Component } from 'react';
import mapbox from 'mapbox-gl';
import './Map.css';
import places from './data/data.json';
import * as ufoData from './data/ufo.json';
import * as mtnData from './data/mtns.json';
import landmarks from './data/landmarks.json'


class Map extends Component {
    state = {
        projects: '',
        
    }
    
    componentDidMount(){


        const app = this.props.app
        mapbox.accessToken = 'pk.eyJ1IjoibTEyLXRyZW50IiwiYSI6ImNrNDNuejljbjA0NzMzZW15eGk4OWMwdTEifQ.8rs6af8i7F8oeHDpbD_zQw';
        var bounds = [
            [-110.113384, 35.747004], // Southwest coordinates
            [-102.113384, 39.747004] // Northeast coordinates
        ]
        const map = new mapbox.Map({
            container: 'map',
            style: app.state.style,
            zoom: 9,
            maxZoom: 12,
            minZoom: 6,
            center: [app.state.longitude, app.state.latitude],
            maxBounds: bounds // Sets bounds as max
            });
        const navigationControl = new mapbox.NavigationControl()
        map.addControl(navigationControl, 'bottom-right')
        map.scrollZoom.disable();

        // Landmarks popup
        landmarks.forEach((landmark) => {
            const landCoord = [landmark.longitude, landmark.latitude]
            const landPopup = new mapbox.Popup()
         
            landPopup.setMaxWidth("300px")
            landPopup.setHTML(`
            <div class="mapboxgl-popup-content-header">
                <h3>${landmark.name}</h3>
            </div>

            <div class="description">
            <img alt="${landmark.name}" src="http://richardsaxton.org/websites/m12_landlines/${landmark.image}" />
            <a href=${landmark.url} class="card-btn">Website </a>
            </div>
            `)
            landPopup.on('open', function(){
                map.flyTo({
                    center: [landmark.longitude, (landmark.latitude + .015)],
                    zoom: 12,
                })
            });
            landPopup.on('close', function(){
                map.flyTo({
                    center: [app.state.longitude, app.state.latitude],
                    zoom: 8.5,
                })
            });
    
            var el = document.createElement('div');
            el.id = 'landmarker';
            el.setAttribute("style", `background-image: url('http://richardsaxton.org/websites/m12_landlines/${landmark.icon}')`); 
            
            const landmarker = new mapbox.Marker(el)
            landmarker.setLngLat(landCoord)
            landmarker.setPopup(landPopup)
            landmarker.addTo(map);
        });
        


            // San Luis Valley Cut Out
        //     map.on('load', function () {
        //         map.addSource('route', {
        //         'type': 'geojson',
        //         'data': slv
        //     });
        //     map.addLayer({
        //         'id': 'route',
        //         'type': 'fill',
        //         'source': 'route',
        //         'layout': {},
        //         'paint': {
        //             'fill-color': '#000',
        //             'fill-opacity': 0.9,
        //         }
        //     })
    // });


        map.on('load', function () {
            map.addSource('lines', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [
                        places[0].coordinates,
                        places[1].coordinates,
                        places[6].coordinates,
                        places[11].coordinates,
                        places[3].coordinates,
                        places[13].coordinates,
                        places[16].coordinates,
                        places[10].coordinates,
                        places[6].coordinates,
                        places[5].coordinates,

                        places[3].coordinates,
                        places[4].coordinates,
                        places[7].coordinates,
                        places[9].coordinates,
                        places[14].coordinates,

                        places[4].coordinates,
                        places[8].coordinates,
                        places[11].coordinates,
                        places[1].coordinates,
                        places[14].coordinates,

                        places[0].coordinates,
                        places[2].coordinates,
                        places[13].coordinates,
                        places[4].coordinates,
                    ]
                }
            }    
        });
            map.addLayer({
                'id': 'lines',
                'type': 'line',
                'source': 'lines',
                'layout': {
                'line-join': 'round',
                'line-cap': 'round'
                },
                'paint': {
                'line-color': '#fff',
                'line-opacity': 0.7,
                'line-width': 1.5
                }
                });
            });

    // Maping UFO Data       
    ufoData.features.forEach((ufo) =>{
        const ufoCoord = [ufo.geometry.coordinates[0],ufo.geometry.coordinates[1]]
        const ufoPopup = new mapbox.Popup();

        ufoPopup.setMaxWidth("300px")
        ufoPopup.setHTML(`
        <div class="mapboxgl-popup-content-header">
            UFO Sighting
            <h3>${ufo.properties.Name}</h3>
        </div>
        <div class="description">    
            ${ufo.properties.description}

        </div>
        `)

        const ufoEl = document.createElement('div');
        ufoEl.id = 'ufo-marker';
        
        const ufoMarker = new mapbox.Marker(ufoEl)
        ufoMarker.setLngLat(ufoCoord)
        ufoMarker.setPopup(ufoPopup)
        ufoMarker.addTo(map);
 
    });


    // Maping Mountain Data       
    mtnData.features.forEach((mtn) =>{
        const mtnCoord = [mtn.geometry.coordinates[0],mtn.geometry.coordinates[1]]
        const mtnPopup = new mapbox.Popup();
        
        mtnPopup.setHTML(`
        <div class="mapboxgl-popup-content-header">
            <h3>${mtn.properties.Name}</h3>    
        </div>
        `)

        const mtnEl = document.createElement('div');
        mtnEl.id = 'mtn-marker';
        
        const mtnMarker = new mapbox.Marker(mtnEl)
        mtnMarker.setLngLat(mtnCoord)
        mtnMarker.setPopup(mtnPopup)
        mtnMarker.addTo(map);
    });
    
        
    // Mapping of Project data
    places.forEach((place) => {
        const coord = [place.longitude, place.latitude]
        const popup = new mapbox.Popup()

        popup.setMaxWidth("300px")

        popup.setHTML(`
        <div class="mapboxgl-popup-content-header">
            <h3>${place.name}</h3>
            ${place.contributor}
        
        <img alt="${place.name}" src="http://richardsaxton.org/websites/m12_landlines/${place.image}" />
        </div>
        `)



        popup.on('open', function(){
            map.flyTo({
                center: [place.longitude, (place.latitude + .015)],
                zoom: 12,
            })
        });
        popup.on('close', function(){
            map.flyTo({
                center: [app.state.longitude, app.state.latitude],
                zoom: 8.5,
            })
        });

        var el = document.createElement('div');
        el.id = 'marker';
        
        const marker = new mapbox.Marker(el)
        marker.setLngLat(coord)
        marker.setPopup(popup)
        marker.addTo(map);
    });





}


    render(){
        return (
            <div id="map"></div>
        );
    }
}

export default Map;