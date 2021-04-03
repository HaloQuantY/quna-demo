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
  data () {
    return {
      swiperOptions: {},
      itemList: [
        {
          id: '001',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
          imgSub: '酒店'
        },
        {
          id: '002',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
          imgSub: '机票'
        },
        {
          id: '003',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/train.png',
          imgSub: '火车票'
        },
        {
          id: '004',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
          imgSub: '度假'
        },
        {
          id: '005',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
          imgSub: '景点门票'
        },
        {
          id: '006',
          imgUrl:
            'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png',
          imgSub: '海外酒店'
        },
        {
          id: '007',
          imgUrl:
            'https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png',
          imgSub: '低价机票'
        },
        {
          id: '008',
          imgUrl:
            'https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png',
          imgSub: '火车票船票'
        },
        {
          id: '009',
          imgUrl:
            'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
          imgSub: '自由行'
        }
      ]
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
.items {
  overflow: hidden;
  height: 0;
  display: flex;
  flex-wrap: wrap;
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
      bottom: 0.44rem;
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
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      font-size: 0.16rem;
      font-weight: 600;
      color: @dark-color;
      // background: cyan;
    }
  }
}
</style>
