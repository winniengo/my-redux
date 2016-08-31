export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  updateMarkers(benches) {
    this.benches = benches;
    this._benchesToAdd().forEach(this._createMarker.bind(this));
    this._markersToRemove().forEach(this._removeMarker.bind(this));
  }

  _benchesToAdd() {
    const currentBenchIds = this.markers.map(marker => marker.benchId);
    const newBenches = this.benches;
    const newBenchIds = Object.keys(newBenches);

    return newBenchIds.reduce((collection, benchId) => {
      if (!currentBenchIds.includes(benchId)) {
        return (collection.concat([newBenches[benchId]]));
      }
    }, []);
  }

  _markersToRemove() {
    return this.markers.filter(marker => (
      !this.benches.hasOwnProperty(marker.benchId)
    ));
  }

  _createMarker({ lat, lng, id }) { // receives bench object
    const position = new google.maps.LatLng(lat, lng);
    const marker = new google.maps.Marker({
      map: this.map,
      benchId: id,
      position
    });

    this.markers.push(marker);
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf(marker);
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
}
