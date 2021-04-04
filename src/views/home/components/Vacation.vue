<template>
  <div class="vacation">
    <p class="vacation-title">特惠度假</p>
    <ul class="vacation-list">
      <li class="item" v-for="item in vacationList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.itemTitle }}</p>
          <p class="item-des">{{ item.itemDes }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeVacation',
  props: {
    vacationList: {
      type: Array
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/styles/mixins.less';
.vacation-title {
  line-height: 0.8rem;
  text-indent: 0.2rem;
  text-align: start;
  font-size: 0.35rem;
  background: #eee;
}
.vacation-list {
  .item {
    .item-img-wrapper {
      overflow: hidden;
      height: 0;
      padding-bottom: 60%;
      .item-img {
        width: 100%;
      }
    }
    .item-info {
      min-width: 0;
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
    }
  }
}
</style>
