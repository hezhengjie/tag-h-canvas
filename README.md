
# tag-h-canvas

## 介绍(Introduction)

tag 组件，canvas 绘制，保证垂直居中


## 安装(Installation)

```bash
npm install tag-h-canvas --save
```

## 引入(Import)

```javascript
import tagCanvas from "tag-h-canvas";
// 或者
const tagCanvas = require("tag-h-canvas");
```

## 使用(Usage)

### CODE

```html
<template>
  <div>
    <tag-canvas
      :height="height"
      :width="width"
      :padding="padding"
      :bg-color="bgColor"
      :font-color="fontColor"
      :font-size="fontSize"
      :text="text"
      :borderRadius="borderRadius"
      :borderWidth="borderWidth"
      :borderColor="borderColor"
    ></tag-canvas>
  </div>
</template>

<script>
  import tagCanvas from "tag-h-canvas";
  export default {
    data() {
      return {
        //传入的所有长度单位支持px和rem，不填默认为px
        height: 15,
        width: "auto", //width和height支持auto，自动根据文字计算宽度，此时padding生效
        padding: [5, 0],
        text: "猜猜我是谁",
        fontSize: 10,
        bgColor: "#F63",
        fontColor: "#fff",
        borderRadius: 0,
        borderWidth: 0,
        borderColor: "#fff"
      };
    },
    computed: {},
    mounted() {},
    methods: {},
    components: {
      tagCanvas
    }
  };
</script>
```

## 组件参数(Prop)

传入的所有长度单位支持px和rem，不填默认为px

| 键值 |  类型  | 默认值 |      说明      |
| :--: | :----: | :----: | :------------: |
| height | Number\|String |   'auto'   | tag高度,支持auto，自动根据文字计算宽度，此时padding生效 |
| width | Number\|String |   'auto'   | tag宽度,支持auto，自动根据文字计算宽度，此时padding生效 |
| padding | Array |   [5,2]   | tag内边距 |
| text | String |   '猜猜我是谁'   | tag内文案 |
| fontSize | Number\|String |   10   | tag字体大小 |
| bgColor | String |   '#F63'   | tag背景色 |
| fontColor| String |   '#fff'   | tag字体颜色 |
| borderRadius | Number\|String |   0   | tag边距弧度 |
| borderColor | String |   '#fff'   | tag边框颜色 |
| borderWidth | Number\|String |   0   | tag边框宽度|

