<template>
  <div class="detail">
    <DetailBanner />
    <DetailHeader />
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="less" scoped>
  .content {
    height: 50rem;
  }
</style>
