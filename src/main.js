import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(router)
app.use(vue3GoogleLogin, {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  idConfiguration: {
    hosted_domain: 'stu.nknush.kh.edu.tw'
  },
  buttonConfig: {
    // locale: "zh_TW",
    shape: 'pill',
    // width: "300"
  }
})

app.mount('#app')

