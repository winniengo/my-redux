export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  updateMarkers(benches) {
    this.benches = benches;
    this.benchIds = this.benches.map(bench => bench.id);

    this._benchesToAdd().forEach(this._createMarker.bind(this));
    this._markersToRemove().forEach(this._removeMarker.bind(this));
  }

  _benchesToAdd() {
    const currentBenchIds = this.markers.map(marker => marker.benchId);

    return this.benches.filter(bench => (
      !currentBenchIds.includes(bench.id)
    ));
  }

  _markersToRemove() {
    return this.markers.filter(marker => (
      !this.benchIds.includes(marker.benchId)
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

  _removeMarker(marker) { // receives marker object
    const idx = this.markers.indexOf(marker);
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
}
