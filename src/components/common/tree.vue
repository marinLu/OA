<template>
  <div class="tree">
   <li>
        <div
                :class="{bold: isFolder}"
                @click="toggle"
                @dblclick="changeType">
            {{model.name}}
            <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
        </div>
        <ul v-show="open" v-if="isFolder">
            <tree
                    class="item"
                    v-for="model in model.children"
                    :model="model">
            </tree>
            <li class="add" @click="addChild">+</li>
        </ul>
    </li>
  </div>
</template>

<script>
export default {
  name: 'tree',
  props: {
        model: Object
    },
  data () {
    return {open: false
    }
  },
   computed: {
        isFolder: function () {
            return this.model.children &&
                this.model.children.length
        }
    },
    methods: {
        toggle: function () {
            if (this.isFolder) {
                this.open = !this.open
            }
        },
        changeType: function () {
            if (!this.isFolder) {
                Vue.set(this.model, 'children', [])
                this.addChild()
                this.open = true
            }
        },
        addChild: function () {
            this.model.children.push({
                name: 'new stuff'
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .item {
      cursor: pointer;
      /*float: left;*/
  }

  .bold {
      font-weight: bold;
  }

  ul {
      padding-left: 1em;
      line-height: 1.5em;
      list-style-type: dot;
  }
</style>
