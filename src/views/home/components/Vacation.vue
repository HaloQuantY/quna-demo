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
  data () {
    return {
      vacationList: [
        {
          id: '001',
          imgUrl:
            '//imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg',
          itemTitle: '贵阳-三亚6天跟团游',
          itemDes: '含往返飞机票(含税)+5晚住宿'
        },
        {
          id: '002',
          imgUrl:
            '//imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg',
          itemTitle: ' 贵阳-丽江6天自由行',
          itemDes: '含往返飞机票+5晚住宿'
        },
        {
          id: '003',
          imgUrl:
            '//imgs.qunarzz.com/p/p12/201302/28/83ba8aa24931fbe493835fbb.jpg_256x160_7331b3d5.jpg',
          itemTitle: '贵阳-稻城亚丁7天跟团游',
          itemDes: '含往返飞机票+6晚住宿'
        },
        {
          id: '004',
          imgUrl:
            '//imgs.qunarzz.com/p/p14/201302/28/218ac6605f1d637f93835fbb.jpg_256x160_bfee6c2d.jpg',
          itemTitle: '贵阳-桂林7天跟团游',
          itemDes: '含往返火车票+6晚住宿'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/styles/mixins.less';
.vacation-title {
  margin-top: 0.2rem;
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
