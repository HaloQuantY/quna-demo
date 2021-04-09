<template>
  <div class="detail">
    <DetailBanner />
    <DetailHeader />
    <DetailList :list="list" />
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人三馆联票',
              children: [
                {
                  title: '成人三馆联票 - 某连锁酒店销售'
                }
              ]
            },
            { title: '成人五馆联票' }
          ]
        },
        {
          title: '学生票'
        },
        {
          title: '儿童票'
        },
        {
          title: '特惠票'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  height: 50rem;
}
</style>
