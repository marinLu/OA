<template>
  <div class="fh-todos">
    <h1 v-text='title'></h1>
    <input type='text' v-model='newItem' @keyup.enter='addItem'>
    <ul>
      <li v-for='item in items' :class='{finished:item.isFinised}' v-text='item.label' @click='tg(item)'></li>
    </ul>
  </div>
</template>

<script>
import Store from '../../store/store'

export default {
  name: 'todo-list',
  data () {
    return {
      title: 'Todo list',
      items:Store.fetch(),
      childWords:'',
      newItem:''
    }
  },
  watch:{
    items:{
      handler:function (items){
        Store.save(items);
      },
      deep:true
    }
  },
  methods:{
    heard:function (msg) {
      this.childWords=msg
    },
    tg:function(item) {
      item.isFinised=!item.isFinised;
    },
    addItem:function () {
      this.items.push({
        label:this.newItem,
        isFinised:true
      });
      this.newItem='';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.fh-todos{
  margin:1rem;
  width:80%;
  text-align: center;
  h1{
    margin:0 auto;
    font-weight: bolder;
  }
  input[type='text']{ 
    width:100%;
    height: 2rem;
    border:1px solid #ccc;
  }
  ul{
    text-align: left;
    margin-left: 1rem;
  }
  .finished{
    color:red;
  }
}
</style>
