import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import CreateEvent from '../views/CreateEvent'
import Event from '../views/Event'
import EditEvent from '../views/EditEvent'

const routes = [
  {
    path: '/event',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/create-event',
    name: 'CreateEvent',
    component: CreateEvent
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/event/:id',
    name: 'Event',
    component: Event,
    props: true
  },
  {
    path: '/edit-event/',
    name: 'EditEvent',
    component: EditEvent,
  },
  // redirect
  {
    path: '/',
    redirect: '/event'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), 
  routes,
})

export default router