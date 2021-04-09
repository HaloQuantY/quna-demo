<template>
  <div class="header">
    <router-link to="/" tag="div" class="header-abs" v-if="showAbs">
      <i class="iconfont iconarrow-left-bold"></i>
    </router-link>
    <div class="header-fixed" v-else :style="styleObj">
      景点详情
      <router-link class="header-fixed-back" to="/" tag="span">
        <i class="iconfont iconarrow-left-bold"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      styleObj: {
        opacity: 0
      },
      timer: null
    }
  },
  methods: {
    handleScroll () {
      if (this.timer) {
        return
      }
      this.timer = setTimeout(() => {
        const top = document.documentElement.scrollTop
        if (top > 60) {
          this.showAbs = false
          let opacity = top / 140
          opacity = opacity > 1 ? 1 : opacity
          this.styleObj.opacity = opacity
        } else {
          this.showAbs = true
        }
        this.timer = null
      }, 100)
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="less" scoped>
.header-abs {
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  text-align: center;
  line-height: 0.8rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.4rem;
  .iconfont {
    font-size: 0.4rem;
    color: #fff;
  }
}
.header-fixed {
  @import '~@/assets/styles/variable.less';
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: @header-height;
  line-height: @header-height;
  text-align: center;
  color: #fff;
  background: @theme-color;
  .header-fixed-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-decoration: none;
    font-size: 0.4rem;
    color: #fff;
  }
}
</style>
