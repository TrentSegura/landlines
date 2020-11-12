    // Rael Architects popup
    const Rael = [-105.925708, 37.061179]
    const RaelPopup = new mapbox.Popup
     
    // create DOM element for the marker
    var RaelEl = document.createElement('div');
    RaelEl.id = 'RaelMarker';
     
    // create the marker
    const raelMarker = new mapbox.Marker(RaelEl)
    raelMarker.setLngLat(Rael)
    raelMarker.setPopup(raelPopup) // sets a popup on this marker
    raelMarker.addTo(map);