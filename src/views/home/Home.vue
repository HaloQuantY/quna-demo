<template>
  <div class="home">
    <HomeHeader />
    <HomeSwiper :list="swiperList"/>
    <HomeItems :itemList="itemList"/>
    <HomeRecommend :recommendList="recommendList"/>
    <HomeVacation :vacationList="vacationList"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeItems from './components/Items'
import HomeRecommend from './components/Recommend'
import HomeVacation from './components/Vacation'

import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeItems,
    HomeRecommend,
    HomeVacation
  },
  data () {
    return {
      swiperList: [],
      itemList: [],
      recommendList: [],
      vacationList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getIndexInfo () {
      axios.get('/api/index.json?city=' + this.city).then(res => {
        const data = res.data
        this.swiperList = data.swiperList
        this.itemList = data.itemList
        this.recommendList = data.recommendList
        this.vacationList = data.vacationList
      })
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getIndexInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getIndexInfo()
    }
  }
}
</script>

<style scoped></style>
