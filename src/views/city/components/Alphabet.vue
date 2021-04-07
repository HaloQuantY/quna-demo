<template>
  <ul class="alphabet-list">
    <li class="alphabet-item" v-for="(item, key) in cities" :key="key">
      {{ key }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: {
      type: Object
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/styles/variable.less';
  .alphabet-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: .4rem;
    list-style: none;
    .alphabet-item {
      text-align: center;
      line-height: .4rem;
      color: @theme-color;
    }
  }
</style>
