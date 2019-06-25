import Vue from 'vue'
import Router from 'vue-router'
import Index from  './components/index'
import StationMonitor from './components/stationMonitor.vue'

Vue.use(Router)

export default new Router({
  routes: [
   {
     path:'/',
     component:Index,
   },
   {
     path:'/stationMonitor',
     component:StationMonitor
   }
  ]
})
