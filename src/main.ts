import { createApp, type Component } from 'vue'
import { createGtm } from '@gtm-support/vue-gtm'
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

if (
  import.meta.env.PROD
  && import.meta.env.VITE_GTM_ID
) {
  app.use(
    createGtm({
      id: import.meta.env.VITE_GTM_ID,
      defer: false,
      compatibility: false,
      enabled: true,
      loadScript: true,
      vueRouter: router,
      trackOnNextTick: false,
    }),
  )
}

loadComponent(app, components)

app.mount('#app')
