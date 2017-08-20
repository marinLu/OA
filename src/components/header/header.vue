<template>
	<header class="nav-title">
		<span @click='goTo(-1)'>
			<span  class="fa fa-angle-left"></span>返回
		</span>
		<span>{{navTitle}}</span>
		<span @click='more=!more'>更多
			<span class="fa fa-plus-circle"></span>
			<ul class="see-more" v-if='more'>
				<li><a href="javascript:;">1</a></li>
				<li><a href="javascript:;">2</a></li>
				<li><a href="javascript:;">3</a></li>
			</ul>
		</span>
	</header>
</template>

<script>
export default {
  name: 'head',
  props:['navTitle'],
  data(){
  	return{
	more:false
  	}
  },
  methods:{
  	goTo(i){
  		this.$router.go(i);
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

@import '../../assets/scss/common.scss';
@import '../../assets/scss/mixin.scss';

.nav-title{
	position: fixed;
	top: 0;
	height: 2rem;
	width: 100%;
	background: $vue-blue-light;
	display: flex;
	justify-content: space-between;
	span{
		color: $vue-white; 
		margin-top: .2rem;
	}
	span:nth-child(2){
		margin-top: 0;
		font-size: 1.4rem;
		font-weight: bold;
		.see-more{
		}
	};
}
</style>
