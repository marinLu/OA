<template>
    <ul class="fh-list">
        <li v-for='value in lists.values' class="fh-list-item" :id="value.id"
            >
            <a href="javascript:;">
                <span class="fa fa-hand-peace-o"></span>
                <div class="list-item-body" >
                    <h3 v-text="value.title"></h3>
                    <span class="list-ellipsis" v-text="value.abstra"></span>
                </div>
                <span class="time" v-text="value.date"></span>
            </a>
        </li>
    </ul>
</template>

<script type="text/javascript">
export default {
    name:'project',
    computed:{
    lists(){
      var ps=this.$store.state.projects;
      ps.values.slice().sort(function (a, b) {
        return b['date'] - a['date'];
      });
      [].forEach.call(ps.values, function (i){
        var time = parseInt(i.date);
        var mo = new Date(time).getMonth()+1;
        var d = new Date(time).getDate();
        var h = new Date(time).getHours();
        var m = new Date(time).getMinutes();
        i.date = (mo >= 10 ? mo : '0' + mo) + '月'+(d >= 10 ? d : '0' + d) + '日' + (h >= 10 ? h : '0' + h) + '时' + (m >= 10 ? m : '0' + m) + '分';
       return i.date;
      });
      return ps;
      }
    }
}
</script>
<style lang='scss'>
@import '../../assets/scss/mixin.scss';
.fh-list{
    margin: -.3rem 1rem;
    li.fh-list-item{
        height: 4rem;
        border-top:1px solid #ccc;
        a{
            @include display(flex);
            justify-content: space-around;
            margin: .5rem;
            span.fa{
                flex:1;
                font-size: 3rem;
                color: blue;
            }
            span.time{
                flex:1;
                float: right;
                font-size: .5rem;
            }
            div.list-item-body{
                flex:3;
                h3{
                    font-weight: bolder;
                }
                span{
                    font-size: .8rem;
                    text-overflow: ellipsis;
                }
            }
           
        }
    }
    .fh-list-item:first-child{
       border-bottom:0;
    }
}
</style>
