import mapboxgl from 'mapbox-gl';
import {tilesUrl} from './config';

/**
 * Represents the map that is displayed in the main view and deals with tiles etc., should be independent from
 * any vector layers on top of it.
 */
export class Map {

    constructor(container) {
        this._map = this._createMap(container);
    }

    setCenter(lng, lat) {
        this._map.setCenter([lng, lat]);
    }

    getCenter() {
        return this._map.getCenter();
    }

    setZoom(zoom) {
        this._map.setZoom(zoom);
    }

    getZoom() {
        return this._map.getZoom();
    }

    _createMap(container) {
        return new mapboxgl.Map({
            // docs: https://www.mapbox.com/mapbox-gl-js/api/#map
            container: container,
            minZoom: 0,
            maxZoom: 24,
            longitude: 0,
            latitude: 0,
            zoom: 1,
			style: {
				"version": 8,
				"sources": {
					"graphhopper-mvt": {
						"type": "vector",
						"tiles": [
							tilesUrl
						]
					}
				},
				"layers": [
					{
						"id": "gh",
						"type": "line",
						"source": "graphhopper-mvt",
						"source-layer": "roads",
						"layout": {
							"line-cap": "round",
							"line-join": "round"
						},
						"paint": {
							"line-opacity": 0.6,
							"line-color": "rgb(53, 175, 109)",
							"line-width": 2
						}
					}
				]
			},
            // map is not interactive, all user interaction will be done via deck.gl
            interactive: false,
        });
    }
}
