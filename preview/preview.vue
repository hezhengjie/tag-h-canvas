
<template>
  <div id="app">
    <p class="header">@cube/tag-canvas</p>
    <div class="content" v-if="paint">
      <tag :height="height" :width="width" :padding="padding" :bg-color="bgColor" :font-color="fontColor" :font-size="fontSize" :text="text" :borderRadius="borderRadius" :borderWidth="borderWidth" :borderColor="borderColor"></tag>
    </div>
    <div class="example">
      <div class="label"><span class="left">宽度：</span> <input type="text" v-model="width"> </div>
      <div class="label"><span class="left">高度：</span> <input type="text" v-model="height"> </div>
      <div class="label"><span class="left">内间距（padding，左右边距，上下边距）：</span> <input type="text" v-model="padding[0]"><input type="text" v-model="padding[1]"></div>
      <div class="label"><span class="left">文案：</span> <input type="text" v-model="text"></div>
      <div class="label"><span class="left">字体大小：</span> <input type="text" v-model="fontSize"></div>
      <div class="label"><span class="left">背景色：</span> <input type="text" v-model="bgColor"></div>
      <div class="label"><span class="left">字体颜色：</span> <input type="text" v-model="fontColor"></div>
      <div class="label"><span class="left">边框宽度：</span> <input type="text" v-model="borderWidth"></div>
      <div class="label"><span class="left">边框颜色：</span> <input type="text" v-model="borderColor"></div>
      <div class="label"><span class="left">弧度：</span> <input type="text" v-model="borderRadius"></div>
      <div class="btn" @click="rePaint">重新绘制</div>
    </div>
    
  </div>
</template>

<script>
  import Tag from '../src/index';
  export default {
    name: 'tag-canvas',
    components: {
      Tag
    },
    data () {
      return {
        paint:true,
        width:10,
        height:10,
        padding:[0,0],
        text:'玻尿酸',
        fontSize:10,
        bgColor:'#F63',
        fontColor: '#fff',
        borderRadius:0,
        borderWidth:0,
        borderColor:'#fff'
      }
    },
    mounted() {},
    methods:{
      rePaint(){
        this.paint = false;
        this.$nextTick(()=>{
          this.paint = true;
        });
        
      }
    }
  };
</script>

<style>
  #app {
    margin: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  .header{
    font-size: 16px;
    color: #333;
    font-weight: 600;
    line-height: 64px;
    text-align: center;
    margin-bottom:10px;
		left:0;
    top: 0;
    width: 100%;
		background:#fff;
}
  .content {
    margin: 10px;
  }
  .example {
    padding: 0 5px;
    margin-top: 10px;
    
  }
  .example .label {
      font-size: 14px;
      padding: 10px;
      color: #777;
    }
    .example .label .left {
      min-width: 100px;
      display: inline-block;
    }
    .example input {
      border: 1px solid #e1e1e1;
      padding: 5px;
      width: 90px;
      margin-right: 5px;
    }
    .example .btn {
      display: inline-block;
      min-width: 55px;
      height: 26px;
      font-size: 12px;
      background-color: #f63;
      border-radius: 3px;
      line-height: 26px;
      color: #fff;
      padding: 0;
    }
</style>


