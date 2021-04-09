<template>
  <div class="list-wrapper">
    <ul class="list">
      <li class="item" v-for="(item, index) in list" :key="index">
        <div class="item-title">
          <span class="item-title-icon iconfont iconyinhangyouhui"></span>
          {{ item.title }}
        </div>
        <div v-if="item.children" class="item-children">
          <DetailList :list="item.children" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: {
      type: Array
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/styles/variable.less';
.item-title {
  line-height: 0.8rem;
  font-size: 0.32rem;
  padding: 0 0.2rem;
  border-bottom: 1px solid #ccc;
  .item-title-icon {
    display: inline-block;
    width: 0.36rem;
    height: 0.36rem;
    margin-right: .1rem;
    color: @theme-color;
  }
}
.item-children {
  padding: 0 .2rem;
}
</style>
