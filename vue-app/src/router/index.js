import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/listrender',
    name: 'ListRender',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "listRender" */ '../views/ListRender.vue')
  },
  {
    path: '/learning',
    name: 'ResourceApp',
    component: () => import(/* webpackChunkName: "ResourceApp" */ '../views/ResourceApp.vue')
  },
  {
    path: '/handlingform',
    name: 'HandlingForm',
    component: () => import(/* webpackChunkName: "HandlingForm" */ '../views/HandlingForm.vue')
  },
  {
    path: '/httprequest',
    name: 'HttpRequests',
    component: () => import(/* webpackChunkName: "HttpRequests" */  '../views/HttpRequests.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
