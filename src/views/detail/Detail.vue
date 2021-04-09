<template>
  <div class="detail">
    <DetailBanner
      :productNumber="productNumber"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    />
    <DetailHeader />
    <DetailList :list="list" />
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      productNumber: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios
        .get('api/detail.json', {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.handleRes)
    },
    handleRes (res) {
      if (res.data.ret) {
        const data = res.data.data
        this.productNumber = data.productNumber
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="less" scoped>
.content {
  height: 50rem;
}
</style>
