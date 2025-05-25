import { type App, type Component } from 'vue'

export const loadComponent = (
  app: App,
  collection: Record<string, { default: Component }>,
): void => {
  Object.entries(collection).forEach(([path, definition]) => {
    const componentName: string | undefined = path
      .split('/')
      ?.pop()
      ?.replace(/\.\w+$/, '')

    if (componentName) {
      app.component(componentName, definition?.default)
    }
  })
}
