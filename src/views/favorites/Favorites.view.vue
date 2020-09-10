<template>
  <div class="favorites grid grid-cols-1">
    <div class="col-span-1">
      <card-list
        :items="favorites"
        @toggle-favorite="toggleFavorite"
        @buy-item="buyItem"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import CardList from '@/components/CardList.vue'

export default {
  name: 'Favorites',
  components: {
    CardList
  },
  mounted () {
    this.getFavorites()
  },
  computed: {
    ...mapState('groceries', ['favorites'])
  },
  methods: {
    ...mapActions('groceries', [
      'getFavorites',
      'setItemAsFavorite'
    ]),
    ...mapMutations('groceries', ['addItemToCart']),
    toggleFavorite (item) {
      this.setItemAsFavorite(item)
    },
    buyItem (item) {
      this.addItemToCart(item)
    }
  }
}
</script>
