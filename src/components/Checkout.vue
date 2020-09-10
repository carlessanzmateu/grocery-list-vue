<template>
  <section class="checkout w-full p-5">
    <p class="total-amount pb-5">Total Amount: {{ totalAmount }}$</p>
    <a class="button w-full p-2">Checkout</a>
  </section>
</template>

<script>
export default {
  name: 'Checkout',
  props: {
    totalAmount: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.checkout {
  .button {
    height: 40px;
    color: var(--white-500);
    background-color: var(--blue-500);
    line-height: 37px;

    &:hover {
      background-color: var(--violet-500);
    }
  }
}
</style>
