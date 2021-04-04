<template>
  <div class="header">
      <div class="header-left">
        <i class="iconfont iconarrow-left-bold"></i>
      </div>
      <div class="header-input">
        <i class="iconfont iconsearch"></i>输入城市/景点/游玩主题
      </div>
      <div class="header-right">
        {{ city }}<i class="iconfont iconarrow-down-filling"></i>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/styles/variable.less';
  .header {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: .86rem;
      line-height: .86rem;
      color: #fff;
      background: @theme-color;
      .header-left {
        width: .64rem;
        .iconfont {
          position: relative;
          top: .02rem;
          font-size: .4rem;
        }
      }
      .header-input {
        flex: 1;
        height: .64rem;
        padding-left: .2rem;
        line-height: .64rem;
        text-align: start;
        color: #ccc;
        background: #fff;
      }
      .header-right {
        width: 1.24rem;
        text-align: center;
        .iconfont {
          margin-left: .04rem;
          font-size: .2rem;
        }
      }
  }
</style>
