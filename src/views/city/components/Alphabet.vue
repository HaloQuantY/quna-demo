<template>
  <ul class="alphabet-list">
    <li class="alphabet-item">A</li>
    <li class="alphabet-item">A</li>
    <li class="alphabet-item">A</li>
    <li class="alphabet-item">A</li>
    <li class="alphabet-item">A</li>
    <li class="alphabet-item">A</li>
    <li class="alphabet-item">A</li>
    <li class="alphabet-item">A</li>
    <li class="alphabet-item">A</li>
    <li class="alphabet-item">A</li>
    <li class="alphabet-item">A</li>
    <li class="alphabet-item">A</li>
    <li class="alphabet-item">A</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet'
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
