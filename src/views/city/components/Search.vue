<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="less" scoped>
@import '~@/assets/styles/variable.less';
  .search {
    height: .72rem;
    padding: 0 .1rem;
    background: @theme-color;
    .search-input {
      box-sizing: border-box;
      width: 100%;
      height: .62rem;
      padding: 0 .1rem;
      line-height: .62rem;
      text-align: center;
      color: #666;
      border-radius: .1rem;
      border: none;
      outline: none;
    }
  }
</style>
