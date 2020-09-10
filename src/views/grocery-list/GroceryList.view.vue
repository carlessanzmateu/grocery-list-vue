<template>
  <div class="home grid grid-cols-1 lg:grid-cols-3">
    <spinner v-if="!fullList.length"/>
    <div class="col-span-1 lg:col-span-2">
      <card-list
        :items="fullList"
        @toggle-favorite="toggleFavorite"
        @buy-item="buyItem"
      />
    </div>
    <div class="hidden lg:block lg:col-span-1">
      <inline-cart-card-list
        :items="cart"
        @add-item="addItem"
        @remove-item="removeItem"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import Spinner from '@/components/Spinner.vue'
import CardList from '@/components/CardList.vue'
import InlineCartCardList from '@/components/InlineCartCardList.vue'

export default {
  name: 'Home',
  components: {
    CardList,
    InlineCartCardList,
    Spinner
  },
  mounted () {
    this.getAllGroceries()
  },
  computed: {
    ...mapState('groceries', [
      'fullList',
      'cart'
    ])
  },
  methods: {
    ...mapActions('groceries', [
      'getAllGroceries',
      'setItemAsFavorite'
    ]),
    ...mapMutations('groceries', [
      'addItemToCart',
      'increaseItemFromCart',
      'removeItemFromCart'
    ]),
    toggleFavorite (item) {
      this.setItemAsFavorite(item)
    },
    buyItem (item) {
      this.addItemToCart(item)
    },
    addItem (item) {
      this.increaseItemFromCart(item)
    },
    removeItem (item) {
      this.removeItemFromCart(item)
    }
  }
}
</script>
