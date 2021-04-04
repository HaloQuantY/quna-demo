<template>
  <div class="home">
    <HomeHeader :city="city"/>
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
      city: '',
      swiperList: [],
      itemList: [],
      recommendList: [],
      vacationList: []
    }
  },
  methods: {
    getIndexInfo () {
      axios.get('/api/index.json').then(res => {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.itemList = data.itemList
        this.recommendList = data.recommendList
        this.vacationList = data.vacationList
      })
    }
  },
  mounted () {
    this.getIndexInfo()
  }
}
</script>

<style scoped></style>
