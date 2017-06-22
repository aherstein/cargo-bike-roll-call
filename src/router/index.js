import Vue from 'vue'
import Router from 'vue-router'
// Plugins
import Toasted from 'vue-toasted'
import SweetModal from 'sweet-modal-vue'
import Places from 'vue-places'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import Mapbox from 'mapbox-gl-vue'
// Components
import CargoBikes from '@/components/CargoBikes'
import AddCargoBike from '@/components/AddCargoBike'
window.mapboxgl = require('mapbox-gl')

Vue.use(Router)
Vue.use(Toasted)
Vue.use(SweetModal)
Vue.component('icon', Icon)
Vue.component('mapbox', Mapbox)
Vue.component('places', Places)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Cargo Bike Roll Call',
            component: CargoBikes
        },
        {
            path: '/addbike',
            name: 'Add a Cargo Bike',
            component: AddCargoBike
        }
    ]
})
