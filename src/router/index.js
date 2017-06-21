import Vue from 'vue'
import Router from 'vue-router'
import CargoBikes from '@/components/CargoBikes'
import AddCargoBike from '@/components/AddCargoBike'

Vue.use(Router)

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
