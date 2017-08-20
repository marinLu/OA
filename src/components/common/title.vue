<template>
	<div class="main-title">
		<h1>{{titleMessage.title}}</h1>
		<p>{{titleMessage.p}}</p>
	</div>
</template>

<script>
export default {
  name: 'title',
  props:['titleMessage'],
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' >
	.main-title{
		margin-top: 2.5rem;
		border-left:.5rem solid #ccc; 
		padding-left: 1rem;
	p{
	margin-left: .5rem;
	font-size: 1.4rem;
	font-style: italic;
	}
}
</style>
