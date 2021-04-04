<template>
  <div class="recommend">
    <p class="recommend-title">热销推荐</p>
    <ul class="recommend-list">
      <li class="item" v-for="item in recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{ item.itemTitle }}</p>
          <p class="item-des">{{ item.itemDes }}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: {
      type: Array
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/styles/mixins.less';
.recommend-title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  text-indent: 0.2rem;
  text-align: start;
  font-size: 0.35rem;
  background: #eee;
}
.recommend-list {
  .item {
    display: flex;
    height: 1.9rem;
    border-bottom: 1px solid #eee;
    .item-img {
      max-width: 100%;
      padding: 0.1rem;
    }
    .item-info {
      min-width: 0;
      flex: 1;
      padding: 0.1rem;
      text-align: start;
      font-size: 0.28rem;
      .item-title {
        line-height: 0.54rem;
        font-size: 0.32rem;
        .ellipsis();
      }
      .item-des {
        line-height: 0.4rem;
        color: #ccc;
        .ellipsis();
      }
      .item-btn {
        margin-top: .2rem;
        padding: .05rem .2rem;
        font-size: .28rem;
        color: #fff;
        background: #ff9300;
        border-radius: 0.06rem;
        border: none;
      }
    }
  }
}
</style>
