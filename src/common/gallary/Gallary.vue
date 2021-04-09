<template>
  <div class="gallary-container" @click="handleGallaryClick">
    <div class="container-wrapper">
      <div class="gallry-wrapper">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(url, index) in imgs" :key="index">
            <img class="gallary-img" :src="url" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer: true,
        observerParents: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('closeGallary')
    }
  }
}
</script>

<style lang="less" scoped>
.gallary-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #000;
  .container-wrapper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 66.6%;
    background: #fff;
    .gallary-img {
      width: 100%;
    }
  }
}
</style>
