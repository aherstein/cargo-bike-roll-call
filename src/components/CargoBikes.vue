<template>
    <div>
        <div id="bikes-list">
            <router-link to="/addbike" class="button">
                <icon name="plus"></icon>
                Add bike
            </router-link>
            <div v-for="bike in bikes">
                <h3>{{bike.make}} {{bike.model}}</h3>
                <ul>
                    <li v-for="(value, name) in bike"
                        v-if="name != '_id' && name != 'make' && name != 'model' && name != 'meta'">
                        <span class="title">{{name}}</span>: {{value}}
                    </li>
                </ul>
            </div>
        </div>
        <div id="map">
            <mapbox
                    :access-token=mapboxToken
                    :map-options="{
                        container: 'map', // container id
                        style: 'mapbox://styles/mapbox/light-v9', //hosted style id
                        center: [-97.38, 39], // starting position
                        zoom: 3, // starting zoom
                        scrollZoom: false
                    }"
                    @map-load="mapLoaded">
            </mapbox>
        </div>
    </div>
</template>

<script>
import config from '../../config.js'

function byDateDesc (a, b) {
    let keyA = new Date(a.meta.date)
    let keyB = new Date(b.meta.date)

    // Compare the 2 dates
    if (keyA < keyB) return 1
    if (keyA > keyB) return -1
    return 0
}

export default {
    name: 'cargobikes',
    data () {
        return {
            mapboxToken: config.mapboxToken,
            bikes: this.getBikes(),
            mapFeatures: this.getMapFeatures()
        }
    },
    methods: {
        getBikes () {
            const apiURL = 'http://localhost:3000/api/bikes'
            let request = new XMLHttpRequest()
            let self = this
            request.open('GET', apiURL)
            request.onload = function () {
                self.bikes = JSON.parse(request.responseText).sort(byDateDesc)
                console.log(self.bikes)
            }
            request.send()
        },
        getMapFeatures () {
            // Get coordinates from API
            const apiURL = 'http://localhost:3000/api/bikes/map'
            let request = new XMLHttpRequest()
            let self = this
            request.open('GET', apiURL)
            request.onload = function () {
                self.mapFeatures = JSON.parse(request.responseText)
                console.log(self.mapFeatures)
            }
            request.send()
        },
        mapLoaded (map) {
            map.addLayer({
                'id': 'points',
                'type': 'symbol',
                'source': {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': this.mapFeatures
                    }
                },
                'layout': {
                    'icon-image': '{icon}-15',
                    'text-field': '{title}',
                    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                    'text-offset': [0, 0.6],
                    'text-anchor': 'top'
                }
            })
        }
    }
}
</script>

<style>
    #map {
        float: left;
        display: block;
        width: 100%;
    }

    canvas.mapboxgl-canvas {
        position: relative !important;
        height: 500px !important;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    .title {
        font-weight: 600;
    }

    a.button,
    button {
        font-size: large;
        padding: 8px 16px;;
    }
</style>
