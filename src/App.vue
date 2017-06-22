<template>
    <div id="app">
        <h1>Cargo Bike Roll Call</h1>
        <router-view></router-view>
    </div>
</template>

<!--<script src="/node_modules/vue-awesome/dist/vue-awesome.js"></script>-->

<script>
export default {
    name: 'app'
}
</script>

<style>
    #app {
        font-family: 'Avenir Next', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    a.button,
    button {
        color: #FFF;
        background: #00B7FF;
        border: 0px solid #000;
        border-radius: 4px;
        padding: 4px 8px;
        text-decoration: none;
        font-size: 14px;
        cursor: pointer;
    }

    a.button:hover,
    button:hover {
        background: #0095DD;
    }

    span.label {
        display: inline-block;
        width: 10em;
    }

    .toast {
        font-family: 'Avenir Next', Helvetica, Arial, sans-serif;
        font-weight: 500 !important;
    }

    .fa-icon {
        width: auto;
        height: 1em; /* or any other relative font sizes */
        vertical-align: -0.15em;
    }
</style>
