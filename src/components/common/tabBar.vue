<template>
	<nav class="tab-bar">
		<a href="javascript:;" v-for="item in tabItems">
			<span :class="['fa', item.icon]"></span>
			<p>{{item.text}}</p>
		</a>
	</nav>
</template>

<script>
export default {
  name: 'tabBar',
  props:['tabItems']
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' >
@import '../../assets/scss/mixin.scss';
.tab-bar{
	position: fixed;
	width: 100%;
	height: 3rem;
	margin: 0 .2rem;
	@include display(flex);
	flex-wrap: wrap;
	align-content: space-between;		
	border-top: 1px solid #ccc;
	bottom: .2rem;
	a{flex-grow: 1;
		position: relative;
		.fa{
	      @include center;
	      font-size: 1rem;
		}
		p{
		@include center;
        top: 83%;
      	}
      	&:not(:last-child){
      		@include border-right(1px solid #ccc) ;
      	}
	}
}
</style>
