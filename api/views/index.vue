<template>
    <div id="bikes-list">
        <a href="/addbike" class="button">Add your bike</a>
        <div v-for="bike in bikes">
            <h3>{{bike.make}} {{bike.model}}</h3>
            <ul>
                <li v-for="(value, name) in bike" v-if="name != '_id' && name != 'make' && name != 'model' && name != 'meta'">
                    {{name}}: {{value}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {}
        },
        methods: function () {
            return {}
        }
    }
</script>

<style lang="css">
</style>