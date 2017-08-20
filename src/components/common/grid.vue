<template>
	<div class="fh-grid">
		<router-link class="item" 
    v-for="item in gridItems"
    :to='go(item.text)'>
			<span :class="['fa', item.icon]"></span>
			<p>{{item.text}}</p>
		</router-link>
	</div>
</template>

<script>
export default {
  name: 'grid',
  props:['gridItems'],
  methods:{
    go(text) {
      return '/'+text
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' >
@import '../../assets/scss/mixin.scss';
.fh-grid{
  width: 100%;
  height: 150px;
  @include display(flex);
  flex-flow: row wrap;
  align-content: flex-start;
  .item {
    @include display(flex);
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    flex: 0 0 25%;
    height: 7rem;
    border: 1px solid #ccc;
    text-decoration: none;
    span.fa{
      transform: translate(-.5rem,-1.0rem);
      font-size: 3.1rem;
    }
    p{
      margin-top:4.5rem;
      margin-left:-3.5rem;
    }
  }
}

</style>
