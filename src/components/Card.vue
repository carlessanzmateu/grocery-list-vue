<template>
  <div class="card w-full relative rounded-sm">
    <span :class="[getFavoriteClasses]" @click="toggleFavorite"></span>
    <img
      class="image w-full bg-cover rounded-t-sm"
      :alt="item.getDescription()"
      :src="item.getImage()"
    />
    <div class="card-information p-2">
      <h3 class="title truncate w-full"><strong>{{ item.getName() }}</strong></h3>
      <p class="description truncate w-full mb-2" :title="item.getDescription()">
        {{ item.getDescription() }}
      </p>
      <div class="buy-info flex justify-between">
        <span class="products-left pt-2">Stock: {{ item.getStockLeft() }}</span>
        <span class="products-left pt-2">Price: {{ item.getPrice() }}$</span>
      </div>
      <a
          class="add-btn rounded-sm cursor-pointer text-center p-1"
          @click="buyItem"
        >
        Comprar
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    getFavoriteClasses () {
      return {
        favorite: true,
        filled: this.item.getIsFavorite()
      }
    }
  },
  methods: {
    toggleFavorite () {
      this.$emit('toggle-favorite', this.item)
    },
    buyItem () {
      this.$emit('buy-item', this.item)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  max-width: 250px;
  height: 365px;
  background-color: var(--white-500);
  box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.22)
  }

  .favorite:before {
    content: '\2665';
    color: var(--white-500);
    font-size: 40px;
    position: absolute;
    right: 15px;
    cursor: pointer;

  }

  .filled:before {
    color: var(--red-500);
  }

  .image {
    height: 60%;
  }

  .card-information {
    .title {
      font-size: 19px;
    }

    .description {
      font-size: 17px;
    }

    .add-btn {
      height: 40px;
      color: var(--white-500);
      background-color: var(--blue-500);
      line-height: 37px;

      &:hover {
        background-color: var(--violet-500);
      }
    }
  }

  @media (max-width: 768px) {
    max-width: 350px;
  }

  @media (max-width: 768px) {
    max-width: 250px;
  }
}
</style>
