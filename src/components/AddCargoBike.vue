<template>
    <div id="add-cargo-bike">
        <ul>
            <li><span class="label">Make:</span><input type="text" v-model="make"/></li>
            <li><span class="label">Model:</span><input type="text" v-model="model"/></li>
            <li><span class="label">Color:</span><input type="text" v-model="color"/></li>
            <!--<li><input type="text" v-model="location"/></li>-->
            <li><span class="label">Location:</span>
                <places
                        v-model="location"
                        :options="{
                            countries: 'US',
                            type: 'city',
                            useDeviceLocation: true
                        }">
                </places>
            </li>
            <li><span class="label">Features:</span><input type="text" v-model="features"/></li>
            <li><span class="label">Gearing:</span><input type="text" v-model="gearing"/></li>
            <li><span class="label">Wheels:</span><input type="text" v-model="wheels"/></li>
        </ul>
        <a class="button" v-on:click="addBike">Add bike</a>
        <router-link to="/" class="button">Cancel</router-link>
    </div>
</template>

<script>
export default {
    name: 'addcargobike',
    data () {
        return {
            make: '',
            model: '',
            color: '',
            location: '',
            features: '',
            gearing: '',
            wheels: ''
        }
    },
    methods: {
        addBike () {
            const apiURL = 'http://localhost:3000/api/bikes'
            let request = new XMLHttpRequest()
            let self = this
            request.open('POST', apiURL)
            request.setRequestHeader('Content-Type', 'application/json')
            request.onload = function () {
                self.$router.push('/') // Route to home

                let options = { // Options for success/fail notification
                    theme: 'bubble',
                    position: 'top-center',
                    duration: 2000,
                    className: 'toast'
                }

                // Check API request status
                if (request.status === 200) {
                    self.$toasted.success('Cargo bike ' + self._data.make + ' ' + self._data.model + ' added!', options)
                } else {
                    self.$toasted.error('Cargo bike not added!', options)
                }
            }
            request.send(JSON.stringify(this._data))
        }
    }
}
</script>

<style>
    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: block;
        margin: 0 10px;
    }

    input[type=text] {
        width: 21em;
    }

    /* Place autocomplete styles */

    .algolia-places {
        display: inline !important;
        clear: none;
    }

    .ap-input {
        width: 15em;
    }

    .ap-icon-pin,
    .ap-icon-clear,
    .ap-suggestion-icon {
        display: none;
    }

    .ap-suggestion {
        padding: 0;
        margin: 0;
    }

    .ap-name {
        font-size: 12px;
    }
</style>
