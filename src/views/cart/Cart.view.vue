<template>
  <div class="cart grid grid-cols-1">
    <div class="col-span-1">
      <inline-cart-card-list
        :items="cart"
        @add-item="addItem"
        @remove-item="removeItem"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import InlineCartCardList from '@/components/InlineCartCardList.vue'

export default {
  name: 'Cart',
  components: {
    InlineCartCardList
  },
  computed: {
    ...mapState('groceries', ['cart'])
  },
  methods: {
    ...mapMutations('groceries', [
      'increaseItemFromCart',
      'removeItemFromCart'
    ]),
    addItem (item) {
      this.increaseItemFromCart(item)
    },
    removeItem (item) {
      this.removeItemFromCart(item)
    }
  }
}
</script>
