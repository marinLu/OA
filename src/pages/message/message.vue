<template>
  <div >
    <head-top :nav-title='messageTitle.nav'></head-top>
    <fh-title :title-message='messageTitle'></fh-title>
    <fh-chat></fh-chat>
  </div>
</template>

<script>
import headTop from '../../components/header/header';
import fhTitle from '../../components/common/title';
import fhChat from '../../components/common/vuechat';

export default {
  name: 'message',
  data () {
    return {
      messageTitle:{
        title:'回复',
        p:'reply',
        nav:'项目'
      }
    }
  },
  components:{
        headTop,
        fhTitle,
        fhChat
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.fh-home{
	margin-top: 2.5rem;
}
</style>
