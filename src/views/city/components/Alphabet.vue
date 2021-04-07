<template>
  <ul class="alphabet-list">
    <li
      class="alphabet-item"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: {
      type: Object
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0
    }
  },
  methods: {
    handleLetterClick (e) {
      const letter = e.target.innerText
      this.$emit('letterClick', letter)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.timer) {
        return
      }
      this.timer = setTimeout(() => {
        // 节流
        if (this.touchStatus) {
          // touchY为滑动时触发元素到视口顶部距离减去header组件距离, 即到自身组件顶部距离
          const touchY = e.touches[0].clientY - 150
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index <= this.letters.length) {
            this.$emit('letterClick', this.letters[index])
          }
        }
        this.timer = null
      }, 100)
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  computed: {
    // 对接收到cities数据进行处理, handleTouchMove中的值传递
    letters () {
      const letters = []
      for (const i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  // ajax获取数据后更新视图就会触发
  updated () {
    // startY为侧边栏中A到组件顶部距离
    this.startY = this.$refs.A[0].offsetTop
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/styles/variable.less';
.alphabet-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  list-style: none;
  .alphabet-item {
    text-align: center;
    line-height: 0.4rem;
    color: @theme-color;
  }
}
</style>
