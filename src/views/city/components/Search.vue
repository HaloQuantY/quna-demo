<template>
  <div class="search-wrapper">
    <div class="search">
      <input
        type="text"
        class="search-input"
        placeholder="输入城市名或拼音"
        v-model="keyword"
      />
    </div>
    <div class="search-content" ref="searchPop" v-show="keyword">
      <ul class="search-list">
        <li class="search-item" v-for="item in list" :key="item.id">
          {{ item.name }}
        </li>
        <li class="search-item" v-show="showTip">
          没有匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScoll from '@better-scroll/core'

export default {
  name: 'CitySearch',
  props: {
    cities: {
      type: Object
    }
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    showTip () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const i in this.cities) {
          this.cities[i].forEach(element => {
            if (
              element.spell.indexOf(this.keyword) !== -1 ||
              element.name.indexOf(this.keyword) !== -1
            ) {
              result.push(element)
            }
          })
          this.list = result
        }
        this.timer = null
      }, 200)
    }
  },
  mounted () {
    this.bs = new BScoll(this.$refs.searchPop, {})
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/styles/variable.less';
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: @theme-color;
  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    padding: 0 0.1rem;
    line-height: 0.62rem;
    text-align: center;
    color: #666;
    border-radius: 0.1rem;
    border: none;
    outline: none;
  }
}
.search-content {
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: 1;
  background: #ccc;
  .search-list {
    .search-item {
      line-height: 0.62rem;
      padding-left: 0.2rem;
      color: #666;
      background: #fff;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
