import { createApp, type Component } from 'vue'
import { createPinia } from 'pinia'
import persisteStorage from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import { loadComponent } from './utils'

import '@/assets/scss/main.scss'

const app = createApp(App)
const pinia = createPinia()

const components = import.meta.glob('@/components/*.vue', {
  eager: true,
}) as Record<string, { default: Component }>

pinia.use(persisteStorage)

app.use(pinia)
app.use(router)

loadComponent(app, components)

app.mount('#app')
