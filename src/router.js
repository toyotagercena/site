import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Contacts from './views/Contacts'
import Service from './views/Service'
import Polezno from './views/Polezno'
import To from './views/To'
import Sale from './views/Sale'
// import Profile from './views/Profile'
// import Reg from './views/Reg'
// import Login from './views/Login'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/polezno',
      name: 'polezno',
      component: Polezno
    },
    {
      path: '/to',
      name: 'to',
      component: To
    },
    {
      path: '/sale',
      name: 'sale',
      component: Sale
    },
    // {
    //   path: '/profile',
    //   name: 'profile',
    //   component: Profile
    // },
    // {
    //   path: '/reg',
    //   name: 'reg',
    //   component: Reg
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login
    // }
  ]
})
