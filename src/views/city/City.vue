<template>
  <div class="city">
    <CityHeader />
    <CitySearch />
    <CityList :city="city" :cities="cities" :hotCities="hotCities" />
    <CityAlphabet :cities="cities"/>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

import axios from 'axios'

export default {
  name: 'City',
  data () {
    return {
      city: '',
      cities: {},
      hotCities: []
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.handleCityInfo)
    },
    handleCityInfo (res) {
      if (res.data.ret) {
        const data = res.data.data
        this.city = data.city
        this.cities = data.cities
        this.hotCities = data.hotCities
        console.log(data)
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="less" scoped></style>
