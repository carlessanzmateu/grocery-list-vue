<template>
  <div class="inline-cart-card">
      <img
        class="image"
        :src="item.getImage()"
      />
      <div class="card-information">
        <h3 class="title">
          <strong>{{ item.getName() }}</strong>
        </h3>
        <div class="buy-info">
          <a class="add-item" @click="addItem">+</a>
          <span class="products-left">{{ item.getSelectedStock() }}</span>
          <a class="remove-item" @click="removeItem">-</a>
        </div>
      </div>
      <div class="amount">{{ item.getItemTotalPrice() }}$</div>
    </div>
</template>

<script>
export default {
  name: 'InlineCartCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    addItem () {
      this.$emit('add-item', this.item)
    },
    removeItem () {
      this.$emit('remove-item', this.item)
    }
  }
}
</script>

<style lang="scss" scoped>
.inline-cart-card {
  display: grid;
  grid-template-columns: 75px 1fr 50px;
  width: 100%;
  height: 75px;

  .image {
    width: 75px;
    height: 75px;
  }

  .card-information {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 15px;

    .title {
      font-size: 16px;
    }

    .buy-info {
      .add-item,
      .remove-item {
        cursor: pointer;
        font-size: 20px;
      }

      .add-item {
        margin-right: 10px;
      }
      .remove-item {
        margin-left: 10px;
      }
    }
  }
  .amount {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
