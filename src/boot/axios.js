import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.use(axios)
export { axios }