import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
export default defineNuxtPlugin((_) => {
  const { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId } =
    useRuntimeConfig().public
  const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  return {
    provide: {
      auth
    }
  }
})
