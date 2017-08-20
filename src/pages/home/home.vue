<template>
	<main class="fh-home">
		<head-top :nav-title='home.homeTitle.nav'></head-top>
		<i class="fa fa-plus-square"  @click='show=!show'></i>
		<transition name="bounce" v-if='show'>
			<span class="nav-bounce">
				<div class="fh-bounce-nav">
					<a class="item" 
				    v-for="item in home.subNav"
			      @click='go(item.text)'
				    >
					<span :class="['fa', item.icon]"></span>
					<p>{{item.text}}</p>
					</a>
				</div>
			</span>
		</transition>
		<keep-alive>
		  <component :is="currentView">
		  </component>
		</keep-alive>
	</main>
</template>

<script>
import headTop from '../../components/header/header'
import fhTitle from '../../components/common/title'
import echartsComponent from '../../components/common/echarts'

import mainh from './mainBody'
import daily from '../daily/daily'
import project from '../project/project'
import message from '../message/message'


export default {
  name: 'home',
  data () {
    return {
    	show:false,
    	currentView:mainh
    }
  },
  computed:{
    home(){
      return this.$store.state.home
    }
  },
  methods:{
	go(to){
		this.currentView=to;
		this.show=false;
	}
  },
  components:{
        headTop,fhTitle,echartsComponent,message,mainh,project,daily
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
		width: 15rem;
		height: 15rem;
		margin-top: 6rem;
		@include center;
		background: #999;
		border-radius: 1rem;	
	}
	i.fa{
		font-size: 4rem;
		color: #aaa;
		float: right;
	}
	.fh-bounce-nav{
	  width: 100%;
	  height: 150px;
	  position: relative;
	  .item{
		position: absolute;
		color: #ccc;
		width: 4rem;
	  	height: 4rem;
	  	line-height: 4rem;
	  	border:2px solid #fff;
		border-radius: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
	  }
	  .fa{
	  	margin-top: .8rem;
	  	font-size: 2.5rem;
	  }
	  p{
	  	margin-top: -.5rem;
	  	color: #fff;
	  }
	  .item:nth-child(1){
	  	top:.5rem;
		left:38%;
	  }
	  .item:nth-child(2){
		top:55%;
		margin-left: .5rem;
	  }
	  .item:nth-child(3){
		top:55%;
		margin-left: 10.5rem;
	  }
	  .item:nth-child(4){
		bottom:-45%;
		margin-left: 5.5rem;
	  }
	  
	}
}
</style>
