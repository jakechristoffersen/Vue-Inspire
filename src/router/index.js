import Vue from 'vue'
import Router from 'vue-router'
import Auth from '../components/Auth'
import Home from '../components/Home'
import Weather from '../components/Weather'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/weather',
      name: 'Weather',
      component: Weather
    },
  ]
})
