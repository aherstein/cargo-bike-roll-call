<template>
    <div>
        <h2>Add Bike</h2>
        Make: <input type="text" v-model="make"/>
        Model: <input type="text" v-model="model"/>
        <button v-on:click="addBike">Add bike</button>
    </div>
</template>

<script>
    let data = {
        make: "test",
        model: "test"
    }

    export default {
        data: function () {
            return data
        },
        methods: {
            addBike: function() { // POST to bikes API
//                 alert(this.make + ' ' + this.model + ' added to Cargo Bike Roll Call!');
                //TODO figure out how to get request
                let that = this;
                let options = {
                    method: 'POST',
                    url: 'http://localhost:3000/api/bikes',
                    headers: { 'content-type': 'application/json' },
                    body: { that },
                    json: true
                };
                request(options, function (error, response, body) {
                    if (error) throw new Error(error);

                    console.log(body);
                });
            }
        }

    }
</script>

<style lang="css">
</style>