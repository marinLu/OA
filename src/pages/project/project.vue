<template>
  <div >
    <head-top :nav-title='projectTitle.nav'></head-top>
    <fh-title :title-message='projectTitle'></fh-title>
    <search></search>
    <list></list>
  </div>
</template>

<script>
import echarts from 'echarts'
import headTop from '../../components/header/header'
import fhTitle from '../../components/common/title';
import list from '../../components/common/list';
import search from '../../components/common/search';


export default {
  name: 'project',
  data () {
    return {
      projectTitle:{
        title:'xxx项目',
        p:'xxx-project',
        nav:'项目',
      }
    } 
  },
  components:{
        headTop,
        fhTitle,
        list,
        search,
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.fh-home{
	margin-top: 2.5rem;
}
</style>
