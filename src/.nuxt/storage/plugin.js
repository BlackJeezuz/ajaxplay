import Storage from './storage'
import { serialize } from 'uri-js';

export default function nuxtUniversalStorage(ctx, inject) {
  // Create new instance of Storage class
  const storage = new Storage(ctx, {
  "vuex": {
    "namespace": "storage"
  },
  "cookie": {
    "prefix": "",
    "options": {
      "path": "/"
    }
  },
  "localStorage": {
    "prefix": ""
  }
})

  // Inject into context as $storage
  inject('storage', storage)
}
