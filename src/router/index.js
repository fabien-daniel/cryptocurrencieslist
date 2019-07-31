import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'
import Currency from '@/views/Currency.vue'


Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/contact', name: 'Contact', component: Contact },
        { path: '/currency/:id', name: 'Currency', component: Currency },
    ]
})

