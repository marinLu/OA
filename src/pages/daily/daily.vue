<template>
	<div class="fh-daily">
		<head-top :nav-title='dailyTitle.nav'></head-top>
		<fh-title :title-message='dailyTitle'></fh-title>
    <todos></todos>
	</div>
</template>

<script>
import headTop from '../../components/header/header';
import fhTitle from '../../components/common/title';
import todos from '../../components/common/todolist';

export default {
  name: 'daily',
  data () {
    return {
      dailyTitle:{
        title:'日报',
        p:'daily news',
        nav:'项目'
      }
    }
  },
  components:{
        headTop,
        fhTitle,
        todos
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.fh-daily{
	margin:0 auto;
}
</style>
