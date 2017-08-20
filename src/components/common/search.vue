<template>
	<div class="fh-search">
		<div class="search-lable">
			<span class="item1">搜索项目名称、合同、人员</span>
			<span class="item2">状态</span>
			<span class="item3">人员</span>
		</div>
		<div class="search-content">
			<input type="search" class="item1 icon-search" />
			<button class="item2 btn-info">未结案</button>
			<button class="item3 btn-info">本人</button>
		</div>

		
	</div>
</template>

<script>
export default {
  name: 'search',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' >
@import '../../assets/scss/mixin.scss';
.fh-search{
	margin-top:.5rem;
	div[class^="search-"]{
		@include display(flex);
		.item1{
			flex:4;
		}
		.item2{
			flex:1;
			@include display(flex);
			align-items: center;
			justify-content: space-around;
		}
		.item3{
			flex:1;
			@include display(flex);
			align-items: center;
			justify-content: space-around;
		}
	}
	.search-lable{
		font-size:.8rem;
		font-style: italic;
	}
	.search-content{
		margin:.2rem;
		background: #ccc;
		height: 2.3rem;
		border-radius:4px;
		.item1{
			font-size: 1rem;
			line-height: 1;
			margin:.2rem ;
			border-radius: 4px;
			border:1px solid #ccc;
		}
		.btn-info{
			background: blue;
			margin:.2rem;
			color: #fff;
			border-radius: 4px;
		}
	}

}
</style>
