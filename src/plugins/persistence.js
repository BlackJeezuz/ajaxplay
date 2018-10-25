export default function ({ app }) {
  if (process.browser) {
    window.addEventListener('beforeunload', () => {
      app.$storage.setCookie('state', app.store.state)
    })
  }
}