<template>
    <form class="mui-input-group mui-content-padded">
        <div class="mui-input-row mui-checkbox mui-left" v-for="value in jsonData.values">
            <label v-text='value.key'></label>
            <input :name="jsonData.key" :type="jsonData.type" :value="value.key">
        </div>
	</form>
</template>

<script>
export default {
    name:'icheckbox',
    props:['jsonData'],
}
</script>
<style type="text/css">

</style>