<script type="text/javascript">
export default {
    name:'chat',
       render: function render(h) {
        var that = this;
        return h('div',{'class':'fh-chat'}, [h('ul', {
            'class': 'msg-list'
        }, Array.apply(null, that.chat).map(function(item) {
            return h('li', {
                'class': ['msg-item', item.type === 'send' ? 'msg-item-self' : '']
            }, [h('p', {
                    'class': ['msg-title', item.type === 'send' ? 'msg-title-self' : '']
                }, [h('span', 'aa'), h('span', that.time)]),
                h('i', {
                    'class': ['fa','msg-user' ,item.type === 'send' ? 'fa-hand-peace-o' : 'fa-pencil-square-o']
                }), h('div', {
                    'class': 'msg-content'
                }, [item.value, h('span', {
                    'class': 'msg-content-arrow'
                })])
            ]);
        })), h('footer', {
            'class': 'chat-footer'
        }, [h('input', {
            'class': 'input-text',
            domProps: {
                value: that.newSend
            },
            on: {
                input: function input(e) {
                    that.newSend = e.target.value;
                },
                change: this.toggleIcon
            }
        }), h('span', {
            'class': ['fa', !this.vsend ? 'fa-paper-plane' : 'fa-pencil-square-o'],
            on: {
                click: this.send
            }
        })])]);
    },
    data() {
        return {
            vsend: true,
            newSend: '',
            t:new Date().toString().slice(15,24)
        };
    },
    computed:{
    chat(){
      return this.$store.state.chat
    },
    time(){
        return this.t;
    }
  },
    methods: {
        toggleIcon: function toggleIcon() {
            this.vsend = !this.vsend;
        },
        send: function send() {
            if (this.newSend) {
                this.chat.push({
                    type: 'send',
                    value: this.newSend
                },{
                    type: 'recieve',
                    value: 'reply:'+this.newSend
                });
            }
            this.newSend = '';
        },
    }
            
}
</script>
<style lang='scss' scoped>

.fh-chat .msg-list {
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    margin-bottom: 4.5rem !important;
}

.msg-item {
    padding: 8px;
    clear: both;
    margin-top: 2rem;
    height: 0;
}

.msg-item .msg-user {
    width: 38px;
    height: 38px;
    border: solid 1px #d3d3d3;
    display: inline-block;
    background: #fff;
    border-radius: 3px;
    vertical-align: top;
    text-align: center;
    float: left;
    padding: 3px;
    color: #ddd;
}

.msg-item .msg-content {
    display: inline-block;
    border-radius: 5px;
    border: solid 1px #d3d3d3;
    background-color: #FFFFFF;
    color: #333;
    padding: 8px;
    vertical-align: top;
    font-size: 15px;
    position: relative;
    margin: 0 8px;
    max-width: 75%;
    min-width: 35px;
    float: left;
}

.msg-item .msg-content .msg-content-inner {
    overflow-x: hidden;
}

.msg-item .msg-content .msg-content-arrow {
    position: absolute;
    border: solid 1px #d3d3d3;
    border-right: none;
    border-top: none;
    background-color: #FFFFFF;
    width: 10px;
    height: 10px;
    left: -5px;
    top: 12px;
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
}

.msg-item-self .msg-user,
.msg-item-self .msg-content {
    float: right;
}

.msg-item-self .msg-content .msg-content-arrow {
    left: auto;
    right: -5px;
    -webkit-transform: rotateZ(225deg);
    transform: rotateZ(225deg);
}

.msg-item-self .msg-content,
.msg-item-self .msg-content .msg-content-arrow {
    background-color: #4CD964;
    color: #fff;
    border-color: #2AC845;
}
.msg-title{
    margin-bottom:-.2rem;
    display: table-cell;
    span{
        margin:0 .5rem 0 0;
        &:first-child{
            font-weight: bold;
            color: blue;
        };
        &:last-child{
            font-size: .5rem;
        };
    }
}

.msg-title-self{
    position: relative;
    margin-top: 1.2rem;
    span{
        &:first-child{
            position: absolute;
            right: -3rem;
        };
        &:last-child{
            margin-left: 19.5rem;
            margin-top: -1.9rem;
            margin-right: -1.5rem;
        }
    }
    .msg-content{
        background-color: #4CD964;
        color: #fff;
        border-color: #2AC845;
        .msg-contetn-arrow{
            extend{}
        }
    }
}
.fa{
    font-size: 2rem;
}

.chat-footer {
    position: fixed;
    bottom: .1rem;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    width: 100%;
    height: 2.5rem;
    padding: .1rem 0;
    margin: 0 1px;
    line-height: 1;
    border-top: solid 1px #bbb;
    background-color: #fafafa;
    .input-text {
        -webkit-flex: auto;
        flex: auto;
        background: #fff;
        border: solid 1px #ddd;
    }
    span{
        color: blue;
        padding: 2px;
    }

}

</style>
