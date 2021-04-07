<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <p class="title">当前城市</p>
        <ul class="button-list">
          <li class="button-wrapper">
            <div class="button">{{ city }}</div>
          </li>
        </ul>
      </div>

      <div class="area">
        <p class="title">热门城市</p>
        <ul class="button-list">
          <li class="button-wrapper" v-for="item in hotCities" :key="item.id">
            <div class="button">{{ item.name }}</div>
          </li>
        </ul>
      </div>

      <div class="area" v-for="(item, key) in cities" :key="key">
        <p class="title">{{ key }}</p>
        <ul class="item-list">
          <li class="item" v-for="innerItem in item" :key="innerItem.id">
            {{ innerItem.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BSroll from '@better-scroll/core'

export default {
  name: 'CityList',
  props: {
    city: {
      type: String
    },
    cities: {
      type: Object
    },
    hotCities: {
      type: Array
    }
  },
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
    padding-left: 0.2rem;
    line-height: 0.54rem;
    font-size: 0.26rem;
    color: #666;
    background: #eee;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  .button-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    .button-wrapper {
      width: 33.33%;
      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }
  .item-list {
    .item {
      padding-left: 0.2rem;
      line-height: 0.76rem;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
