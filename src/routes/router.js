
import CalendarA from '../pages/CalendarA.vue'
import HomePage from '../pages/HomePage.vue'
import LogIn from '../pages/LogIn.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'




Vue.use(VueRouter)

const routes = [
    {
      path: '/' ,
      component: HomePage
    },
    {
      path: '/calendario',
      component: CalendarA
    },
    { path: '/login',
       component: LogIn
    },
 ]

 const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes
})

  export default router