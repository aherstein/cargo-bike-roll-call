import Vue from 'vue'
import Router from 'vue-router'
import CargoBikes from '@/components/CargoBikes'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Cargo Bike Roll Call',
            component: CargoBikes
        }
    ]
})
