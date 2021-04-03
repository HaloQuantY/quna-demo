<template>
  <div class="home">
    <HomeHeader />
    <HomeSwiper />
    <HomeItems />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeItems from './components/Items'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeItems
  }
}
</script>

<style scoped>

</style>
