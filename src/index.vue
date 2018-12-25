<template>
  <div>
    <canvas ref="tag"></canvas>
  </div>
</template>

<script>
  export default {
    name: 'tag-canvas',
    props: {
      // 传入的所有长度单位支持px和rem，不填默认为px
      width: {
        type: Number | String,
        default: 'auto'
      },
      height: {
        type: Number | String,
        default: 'auto'
      },
      padding: {
        type: Array,
        default () {
          return [5, 2]
        }
      },
      text: {
        type: String,
        default: '猜猜我是谁'
      },
      fontSize: {
        type: Number | String,
        default: 10
      },
      bgColor: {
        type: String,
        default: '#F63'
      },
      fontColor: {
        type: String,
        default: '#fff'
      },
      borderRadius: {
        type: Number | String,
        default: 0
      },
      borderWidth: {
        type: Number | String,
        default: 0
      },
      borderColor: {
        type: String,
        default: '#fff'
      }
    },
    data () {
      return {
        option: {},
        canvas: null,
        context: null
      }
    },
    computed: {
      // 实际绘制的尺寸
      realSize () {
        return {
          width: this.option.width * this.ratio,
          height: this.option.height * this.ratio,
          borderWidth: this.option.borderWidth * this.ratio,
          borderRadius: this.option.borderRadius * this.ratio
        }
      },
      // 高清屏下绘制文字不清晰，先放大，在缩小canvas；
      ratio () {
        let devicePixelRatio = window.devicePixelRatio || 1
        let backingStoreRatio = this.context.webkitBackingStorePixelRatio ||
          this.context.mozBackingStorePixelRatio ||
          this.context.msBackingStorePixelRatio ||
          this.context.oBackingStorePixelRatio ||
          this.context.backingStorePixelRatio || 1
        return devicePixelRatio / backingStoreRatio;
      }
    },
    mounted () {
      this.canvas = this.$refs.tag;
      this.context = this.canvas.getContext('2d');
      this.option = {
        width: this.width === 'auto' ? this.getWidth(this.text) + 2 * this.formatToPx(this.padding[0]) : this.formatToPx(this.width),
        height: this.height === 'auto' ? this.getHeight(this.text) + 2 * this.formatToPx(this.padding[1]) : this.formatToPx(this.height),
        text: this.text,
        fontSize: this.formatToPx(this.fontSize),
        bgColor: this.bgColor,
        fontColor: this.fontColor,
        borderRadius: this.formatToPx(this.borderRadius),
        borderWidth: this.formatToPx(this.borderWidth),
        borderColor: this.borderColor
      }
      this.scaling();
      this.drawRoundedRect(this.context, 0, 0, this.realSize.width, this.realSize.height, this.realSize.borderRadius, this.bgColor, this.borderColor, this.realSize.borderWidth);
      this.drawText(this.text);
    },
    methods: {
      /** 绘制圆角矩形
       */
      drawRoundedRect (ctx, _x, _y, _width, _height, r, fillColor, strokeColor, lineWidth) {
        let x = _x + lineWidth / this.ratio;
        let y = _y + lineWidth / this.ratio;
        let width = _width - lineWidth;
        let height = _height - lineWidth;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + width, y, x + width, y + r, r);
        ctx.arcTo(x + width, y + height, x + width - r, y + height, r);
        ctx.arcTo(x, y + height, x, y + height - r, r);
        ctx.arcTo(x, y, x + r, y, r);
        if (fillColor) {
          ctx.fillStyle = fillColor;
          ctx.fill();
        }
        if (strokeColor) {
          ctx.strokeStyle = strokeColor;
          ctx.lineWidth = lineWidth;
          ctx.stroke();
        }
        ctx.restore();
      },
      // 绘制文字
      drawText (text) {
        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle';
        // 使用`font`设置字体。
        this.context.font = `${this.fontSize * this.ratio}px PingFangSC-Regular`;
        // 使用`fillStyle`设置字体颜色。
        this.context.fillStyle = this.fontColor;
        // 使用`fillText()`方法显示字体。
        this.context.fillText(text, this.realSize.width / 2, this.realSize.height / 2);
      },
      // 缩放
      scaling () {
        this.canvas.width = this.realSize.width;
        this.canvas.height = this.realSize.height;
        this.canvas.style.width = this.realSize.width / this.ratio + 'px';
        this.canvas.style.height = this.realSize.height / this.ratio + 'px';
      },
      // 计算宽度
      getWidth (text) {
        return this.context.measureText(text).width;
      },
      // 计算高度，常常会以W字母测量出来的宽度值加上一点点，就可以大致认为是当前文本的高度值了。
      getHeight (text) {
        let textWidth = this.context.measureText('W').width;
        return textWidth + textWidth / 6;
      },
      // 格式化成Px
      formatToPx (size) {
        if (this.isNumber(size)) {
          // 数字类型，直接返回，默认px
          return size;
        }
        let RegNum = /^[0-9.]*$/g;
        let RegPx = /[0-9.]*px$/g;
        let RegRem = /[0-9.]*rem$/g;
        let num = parseFloat(size.match(/[0-9.]*/g)[0]);
        if (RegNum.test(size)) {
          // 数字字符串直接剥离数字
          return num;
        }
        if (RegPx.test(size)) {
          // px单位直接剥离数字
          return num;
        }
        if (RegRem.test(size)) {
          // rem单位
          let remBase = parseFloat(getComputedStyle(document.querySelector('html')).fontSize.match(/[0-9.]*/g)[0]);
          console.log(remBase)
          return num * remBase;
        }
        console.error('请保证输入的参数是数字或者rem或者px');
      },
      isNumber (obj) {
        return typeof obj === 'number' && !isNaN(obj)
      }
    }
  };
</script>