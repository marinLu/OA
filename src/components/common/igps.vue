<template>
    <div class="mui-content col-xs-12">
        <button class="mui-btn mui-btn-primary" :id="jsonData.key" @click="takeLocation(this.id)" v-text='jsonData.value'>       
        </button>
    </div>
</template>

<script>
var hasQuestDB=false;
export default {
    name:'igps',
    props:['jsonData'],
}
</script>
<style type="text/css">

</style>