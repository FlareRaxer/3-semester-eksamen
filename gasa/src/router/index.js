import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Booking from '../Components/booking.vue'
import Mainpage from '@/Components/mainpage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/booking',
      name: 'booking',
      component: Booking
    },
    {
    path: '/mainpage',
    name: 'mainpage',
    component: Mainpage
    }
  ]
})

export default router