<template>
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
        <div id="map">
            <mapbox
                    access-token="pk.eyJ1IjoiYWhlcnN0ZWluIiwiYSI6IlFUR1ZZWXcifQ.2jkwY2YGFPqCmIGMv5qdLQ"
                    :map-options="{
                        container: 'map', // container id
                        style: 'mapbox://styles/mapbox/dark-v9', //hosted style id
                        center: [-77.38, 39], // starting position
                        zoom: 3 // starting zoom
                    }">
            </mapbox>
        </div>
    </div>
</template>

<script>
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
            bikes: this.getBikes()
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
        }
    }
}
</script>

<style scoped>
    #map {
        float: left;
        display: block;
        width: 100%;
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
