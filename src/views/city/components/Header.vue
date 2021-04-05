<template>
  <div class="header">
    城市选择
    <router-link class="header-back" to="/">
      <i class="iconfont iconarrow-left-bold"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="less" scoped>
@import '~@/assets/styles/variable.less';
.header {
  position: relative;
  overflow: hidden;
  height: @header-height;
  line-height: @header-height;
  text-align: center;
  font-size: .32rem;
  color: #fff;
  background: @theme-color;
  .header-back {
    position: absolute;
    top: 0;
    left: 0;
    width: .64rem;
    text-decoration: none;
    font-size: .4rem;
    color: #fff;
  }
}
</style>
