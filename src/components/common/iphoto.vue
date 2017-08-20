<template>
    <div class="mui-content-padded">
	    <span v-text="jsonData.keyname"></span>
	    <button :name="jsonData.key" @click="takePhoto(this.name)" class="mui-btn mui-btn-primary" v-text='jsonData.value'></button> 
	    <img :id="jsonData.key" height="70" width="100" class="img-rounded">
	</div>
</template>

<script>
export default {
    name:'iphoto',
    props:['jsonData'],
}
</script>
<style type="text/css">

</style>