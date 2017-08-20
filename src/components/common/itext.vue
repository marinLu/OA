<template>
    <div class="mui-content-padded">
    	<input :type="jsonData.type" :name='jsonData.key' :placeholder="jsonData.keyname">     
    </div>
</template>

<script>
export default {
    name:'itext',
    props:['jsonData'],
}
</script>
<style type="text/css">

</style>