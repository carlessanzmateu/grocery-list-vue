import Vue from 'vue'
import Axios from 'axios'
import apiRoutes from '@/shared/constants/api.routes'

const instance = Axios.create({
  baseURL: apiRoutes.$server
})

Vue.prototype.$http = instance

export default instance
