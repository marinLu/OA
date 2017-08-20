<template>
  <div id="app"> 
    <grid :gridItems='app.gridItems'></grid>
    <tab-bar :tabItems='app.tabItems'></tab-bar>
  </div>
  
</template>

<script>
import grid from './components/common/grid'
import tabBar from './components/common/tabBar'

export default {
  name: 'app',
  computed:{
    app(){
      return this.$store.state.app
    }
  },
  components:{
    grid,tabBar
  },
}
</script>

<style lang='scss'>

@import './assets/css/font-awesome.css'
</style>
