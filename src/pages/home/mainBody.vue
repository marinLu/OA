<template>
	<div>
		<fh-title :title-message='home.homeTitle'></fh-title>
		<echarts-component :option='home.option'></echarts-component>
		<list></list>
	</div>
</template>

<script>
import headTop from '../../components/header/header'
import fhTitle from '../../components/common/title'
import echartsComponent from '../../components/common/echarts'
import list from '../../components/common/list';

export default {
    name: 'mainBody',
 	computed:{
    home(){
      return this.$store.state.home
    }
  },
  components:{
        headTop,fhTitle,echartsComponent,list
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '../../assets/scss/ani.scss';
@import '../../assets/scss/mixin.scss';
main{
	margin-top: 3rem;
	.fh-home{
		float: right;
		width: 3rem;
		height: 3rem;
		background: #ccc;
		opacity: .5;
		border-radius: .5rem;
		padding: 0 auto;
		font-size:2rem;
		line-height: 1.4;
		padding-left:.5rem; 
	}
	.nav-bounce{
		display: flex;
		flex-wrap: wrap;
		align-content: space-between;
		width: 20rem;
		height: 20rem;
		margin-top: 8rem;
		@include center;
		background: #999;
		border-radius: 1rem;	
	}
	.fa{
		font-size: 4rem;
		color: #aaa;
		float: right;
	}
}
</style>
