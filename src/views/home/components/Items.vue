<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(page, index) in pages" :key="index">
      <ul class="items">
        <li class="item" v-for="item in page" :key="item.id">
          <div class="icon-wrapper">
            <img class="icon" :src="item.imgUrl" />
          </div>
          <p class="icon-sub">{{ item.imgSub }}</p>
        </li>
      </ul>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  name: 'HomeItems',
  props: {
    itemList: {
      type: Array
    }
  },
  data () {
    return {
      swiperOptions: {}
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    },
    pages () {
      const pages = []
      this.itemList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/styles/variable.less';
@import '~@/assets/styles/mixins.less';
.items {
  overflow: hidden;
  height: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: .1rem;
  list-style: none;
  padding-bottom: 50%;
  // background: #ccc;
  .item {
    position: relative;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    // background: crimson;
    .icon-wrapper {
      box-sizing: border-box;
      position: absolute;
      top: 0;
      right: 0;
      bottom: .8rem;
      left: 0;
      padding: 0.1rem;
      // background: darkgoldenrod;
      .icon {
        display: block;
        height: 100%;
        margin: 0 auto;
      }
    }
    .icon-sub {
      .ellipsis();
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.8rem;
      line-height: 0.8rem;
      text-align: center;
      font-size: 0.3rem;
      font-weight: 600;
      color: @dark-color;
      // background: cyan;
    }
  }
}
</style>
