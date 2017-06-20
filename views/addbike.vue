<template>
    <div id="add-bike">
        <h2>Add Bike</h2>
        Make: <input type="text" v-model="make"/>
        Model: <input type="text" v-model="model"/>
        <button v-on:click="addBike">Add bike</button>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {}
        }
    }
</script>

<style lang="css">
</style>