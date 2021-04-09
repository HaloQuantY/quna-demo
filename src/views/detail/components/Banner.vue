<template>
  <div class="banner">
    <img
      class="banner-img"
      src="https://img1.qunarzz.com/vs_ceph_b2c_001/bb53a330-192a-4847-9004-aae600cd96cd.jpg_r_640x420x95_094b9e2b.jpg"
      @click="showGallary"
    />
    <div class="banner-info">
      <p class="banner-title">产品编号<span>2048783229</span></p>
      <p class="banner-number">9<i class="iconfont iconpic"></i></p>
    </div>
    <CommonGallary
      :imgs="imgs"
      v-show="ifShowGallary"
      @closeGallary="handleCloseGallary"
    />
  </div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      imgs: [
        'https://img1.qunarzz.com/vs_ceph_b2c_001/bb53a330-192a-4847-9004-aae600cd96cd.jpg_r_640x420x95_094b9e2b.jpg',
        'https://img1.qunarzz.com/vs_ceph_b2c_001/9e95f938-040a-492e-960b-f5669653d55d.jpg_r_640x420x95_7f193f8d.jpg'
      ],
      ifShowGallary: false
    }
  },
  methods: {
    showGallary () {
      this.ifShowGallary = true
    },
    handleCloseGallary () {
      this.ifShowGallary = false
    }
  }
}
</script>

<style lang="less" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    .banner-title {
      font-size: 0.32rem;
      padding-left: 0.2rem;
    }
    .banner-number {
      height: 0.32rem;
      padding: 0 0.4rem;
      margin-top: 0.14rem;
      line-height: 0.32rem;
      font-size: 0.24rem;
      background: rgba(0, 0, 0, 0.15);
      border-radius: 0.2rem;
      .icon-font {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
