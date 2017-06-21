<template>
    <div id="add-cargo-bike">
        Make: <input type="text" v-model="make"/>
        Model: <input type="text" v-model="model"/>
        <button v-on:click="addBike">Add bike</button>
    </div>
</template>

<script>
export default {
    name: 'addcargobike',
    data () {
        return {
            make: '',
            model: ''
        }
    },
    methods: {
        addBike () {
            const apiURL = 'http://localhost:3000/api/bikes'
            let xhr = new XMLHttpRequest()
//            let self = this
            xhr.open('POST', apiURL)
            xhr.onload = function () {
                // TODO
            }
            xhr.send()
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    a.button {
        color: #FFF;
        background: #00B7FF;
        border: 0px solid #000;
        border-radius: 4px;
        padding: 4px 8px;
        text-decoration: none;
    //text-transform: uppercase;
        font-size: 14px;

    }

    a.button:hover {
        background: #0095DD;
    }
</style>
