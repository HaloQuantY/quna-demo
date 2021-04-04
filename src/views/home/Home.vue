<template>
  <div class="home">
    <HomeHeader />
    <HomeSwiper />
    <HomeItems />
    <HomeRecommend />
    <HomeVacation />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeItems from './components/Items'
import HomeRecommend from './components/Recommend'
import HomeVacation from './components/Vacation'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeItems,
    HomeRecommend,
    HomeVacation
  }
}
</script>

<style scoped>

</style>
