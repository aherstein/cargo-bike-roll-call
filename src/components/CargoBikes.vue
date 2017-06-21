<template>
    <div id="bikes-list">
        <!--<a href="/addbike" class="button">Add your bike</a>-->
        <div v-for="bike in bikes">
            <h3>{{bike.make}} {{bike.model}}</h3>
            <ul>
                <li v-for="(value, name) in bike"
                    v-if="name != '_id' && name != 'make' && name != 'model' && name != 'meta'">
                    {{name}}: {{value}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'hello',
    data () {
        return {
            bikes: []
        }
    },
    methods: {
        getBikes () {
            this.$http
                .get('http://localhost:3000/api/bikes', (data) => {
                    this.bikes = data
                })
                .error((err) => console.log(err))
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
</style>
