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
  data () {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl:
            '//img1.qunarzz.com/sight/p0/1503/36/3632781bccd39362.water.jpg_256x160_61fa1ced.jpg',
          itemTitle: '百里杜鹃',
          itemDes: '每年杜鹃花开时，漫山遍野一片红'
        },
        {
          id: '002',
          imgUrl:
            '//img1.qunarzz.com/sight/p0/1604/dd/dd5d2dd67f1d656990.img.jpg_256x160_a399ac13.jpg',
          itemTitle: ' 西江千户苗寨',
          itemDes: '游览千户苗寨，感受苗族风情'
        },
        {
          id: '003',
          imgUrl:
            '//img1.qunarzz.com/sight/p0/201405/29/b0768d0d5b8e70848df1808b467128cb.jpg_256x160_2b11b66c.jpg',
          itemTitle: '小七孔景区',
          itemDes: '山、水、林、洞、湖、瀑为一体的原始奇景'
        },
        {
          id: '004',
          imgUrl:
            '//img1.qunarzz.com/sight/p0/201311/25/581435d34c44340438a51592a21a2799.jpg_256x160_c937ee0e.jpg',
          itemTitle: '黄果树瀑布',
          itemDes: '是世界著名大瀑布之一'
        }
      ]
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
