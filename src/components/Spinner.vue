<template>
  <div class="spinner w-full flex justify-center items-center fixed inset-0 z-50">
    <img class="image-animation" src="/spinner.gif" alt="spinner" />
  </div>
</template>

<script>
export default {
  name: 'Spinner'
}
</script>

<style lang="scss" scoped>
.spinner {
  .image-animation {
    height: 100px;
    width: 100px;
  }
}
</style>
