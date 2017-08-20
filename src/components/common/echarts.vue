<template>
  <div class="main">
    <div class="vue-echarts"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
    name:'echartsComponent',
    props:['option'],
    methods : {
     eRender (){
      var myChart = echarts.init(document.querySelector('.vue-echarts'));
      myChart.setOption(this.option);
     }
    },
    created(){
      this.$nextTick(
        this.eRender
      )
  }
}
   

</script>

<style lang="scss" >
@import '../../assets/scss/mixin.scss';
.main{
	@include display(flex);
	justify-content: space-between;
	flex-direction:column;
	.vue-echarts {
		margin:.5rem auto;
		width: 20rem;
		height: 10rem;
		border: solid #D01257 1px;
		box-shadow: 0 0 8px #FB90B7;
	}   
}


</style>