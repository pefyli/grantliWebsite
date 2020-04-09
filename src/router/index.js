import Vue from 'vue'
import Router from 'vue-router'
import HelloGuest from '@/components/HelloGuest'
import MainPage from '@/components/MainPage'
import AboutMe from '@/components/AboutMe'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloGuest',
      component: HelloGuest
    },
    {
      path: '/mainpage',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/aboutme',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }

  ]
})
