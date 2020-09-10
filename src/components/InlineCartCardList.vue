<template>
  <section class="inline-cart-card-list grid grid-cols-1 p-4">
    <h3 class="pb-3">Cart</h3>
    <inline-cart-card
      class="col-span-1"
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      @add-item="addItem"
      @remove-item="removeItem"
    />
    <checkout
      :total-amount="totalAmount"
    />
  </section>
</template>

<script>
import Checkout from '@/components/Checkout.vue'
import InlineCartCard from '@/components/InlineCartCard'

export default {
  name: 'InlineCartCardList',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    InlineCartCard,
    Checkout
  },
  computed: {
    totalAmount () {
      if (!this.items.length) {
        return 0
      }
      let totalAmount = 0

      this.items.forEach(item => {
        totalAmount += item.getItemTotalPrice()
      })

      return totalAmount
    }
  },
  methods: {
    addItem (item) {
      this.$emit('add-item', item)
    },
    removeItem (item) {
      this.$emit('remove-item', item)
    }
  }
}
</script>
