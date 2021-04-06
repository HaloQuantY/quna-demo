<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <p class="title">当前城市</p>
        <ul class="button-list">
          <li class="button-wrapper">
            <div class="button">北京</div>
          </li>
          <li class="button-wrapper">
            <div class="button">北京</div>
          </li>
          <li class="button-wrapper">
            <div class="button">北京</div>
          </li>
          <li class="button-wrapper">
            <div class="button">北京</div>
          </li>
          <li class="button-wrapper">
            <div class="button">北京</div>
          </li>
        </ul>
      </div>

      <div class="area">
        <p class="title">热门城市</p>
        <ul class="button-list">
          <li class="button-wrapper">
            <div class="button">北京</div>
          </li>
          <li class="button-wrapper">
            <div class="button">北京</div>
          </li>
          <li class="button-wrapper">
            <div class="button">北京</div>
          </li>
          <li class="button-wrapper">
            <div class="button">北京</div>
          </li>
          <li class="button-wrapper">
            <div class="button">北京</div>
          </li>
        </ul>
      </div>

      <div class="area">
        <p class="title">A</p>
        <ul class="item-list">
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
        </ul>
      </div>
      <div class="area">
        <p class="title">A</p>
        <ul class="item-list">
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
        </ul>
      </div>
      <div class="area">
        <p class="title">A</p>
        <ul class="item-list">
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BSroll from '@better-scroll/core'

export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BSroll(this.$refs.wrapper, {})
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/styles/variable.less';
.list {
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  .title {
    padding-left: .2rem;
    line-height: .54rem;
    font-size: .26rem;
    color: #666;
    background: #eee;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  .button-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: .1rem .6rem .1rem .1rem;
    .button-wrapper {
      width: 33.33%;
      .button {
        margin: .1rem;
        padding: .1rem 0;
        text-align: center;
        border: .02rem solid #ccc;
        border-radius: .06rem;
      }
    }
  }
  .item-list {
    .item {
      padding-left: .2rem;
      line-height: .76rem;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
