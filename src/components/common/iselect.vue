<template>
    <div class="mui-content-padded">
        <h5 class="mui-content-padded" v-text="jsonData.keyname"></h5>
        <select class="mui-btn mui-btn-block" :name="jsonData.key">
            <option value="key" v-text="value.key"  v-for="value in jsonData.values"></option>
        </select>
    </div>
</template>

<script>
export default {
    name:'iselect',
    props:['jsonData'],
}
</script>
<style type="text/css">

</style>