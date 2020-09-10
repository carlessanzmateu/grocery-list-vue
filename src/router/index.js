import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'GroceryList',
    component: () => import('../views/grocery-list/GroceryList.view.vue')
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import('../views/favorites/Favorites.view.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/cart/Cart.view.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
