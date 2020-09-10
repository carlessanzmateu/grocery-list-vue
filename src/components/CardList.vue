<template>
  <section class="card-list grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 p-4">
    <card
      class="col-span-1"
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      @toggle-favorite="toggleFavorite"
      @buy-item="buyItem"
    />
  </section>
</template>

<script>
import Card from '@/components/Card'

export default {
  name: 'CardList',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    Card
  },
  methods: {
    toggleFavorite (item) {
      this.$emit('toggle-favorite', item)
    },
    buyItem (item) {
      this.$emit('buy-item', item)
    }
  }
}
</script>
