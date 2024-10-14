// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/acerca', component: AboutView },
  { path: '/servicios', component: ServicesView },
  { path: '/contacto', component: ContactView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
