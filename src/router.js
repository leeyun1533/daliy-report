import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro'
import Day from '@/components/Day'
import Calendar from '@/components/Calendar'
import Setting from '@/components/Setting'
import About from '@/components/About'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'intro',
      component: Intro
    },
    {
      path: '/day/:date',
      name: 'day',
      component: Day
    },
    {
      path: '/calender',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
