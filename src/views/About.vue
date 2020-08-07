<template>
  <div class="wrap">
    <div class="cluture">
      <div class="head">我们的职场</div>
      <div class="msg-content">
        <p class="t1"><span>加入前端团队开启全新职业生涯，</span><span class="youxiu">与优秀的人一起做优秀的事。</span></p>
        <ul>
          <li>
            <p>我们致力于为用户提供顶级UI，打造全新互联网生态圈。我们砥砺前行，勇敢无畏，走出了属于自己的崭新道路。</p>
          </li>
          <li>
            <h4>同程的技术达人们</h4>
            <p>不断创新，不断的寻找最合适的技术栈，一直在学习在进步，跟上团队步伐，做出贡献。</p>
          </li>
        </ul>
        <ul>
          <li>
            <h4>携程的开发大牛们</h4>
            <p>用他们严谨而创新的思维，通过一串串代码，构建了携程搜索这个坚实的产品。</p>
          </li>
          <li>
            <h4>爱库存的码农大神们</h4>
            <p>“确保交付品质”是他们的首要信念。从业务角度出发，第一时间提供顶级用户界面。</p>
          </li>
        </ul>
      </div>
      <div class="pic-content">
        <ul v-for="em in 2" :key="em"  :class="`line${em}`" >
          <li v-for="item in 3" :key="item" :style="`background-image: url('${$imgs['about' + (em == 1 ? item : item + 3)]}')`"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
    }
  },
  mounted() {
    this.setTab(3)
    window.scrollTo(0, 0)
  },
  methods: {
    ...mapMutations(['setTab'])
  }
}
</script>

<style scoped lang="less">
  .wrap {
    width: 100%;
    background: #fff;
    .cluture {
      width: 100%;
      padding-bottom: 60px;
      .head {
        font-size:36px;
        font-family:PingFang-SC-Heavy,microsoft yahei,arial,hiragino sans gb;
        font-weight:800;
        color:#2B2E33;
        line-height:50px;
        padding: 38px 0 50px 0;
      }
      .msg-content {
        width: 100%;
        text-align: left;
        p.t1 {
          font-size:16px;
          font-family:PingFangSC-Regular;
          font-weight:400;
          color:#5F6166;
          line-height:28px;
          .youxiu {
            color: #2B2E33;
            font-weight: bold;
            font-family:PingFang-SC-Bold,PingFangSC-Semibold, sans-serif;
          }
        }
        ul {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-top: 17px;
          li {
            width: 470px;
            h4 {
              font-size:16px;
              font-family:PingFang-SC-Bold,PingFangSC-Semibold, sans-serif;
              font-weight:bold;
              color:#2B2E33;
              line-height:28px;
            }
            p {
              font-size:16px;
              font-family:PingFangSC-Regular;
              color:#5F6166;
              line-height:28px;
            }
          }
        }
      }
      .pic-content {
        margin-top: 50px;
        ul {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          height: 215px;
          width: 100%;
          li {
            width: 323px;
            height: 100%;
            background-size: 100% 100%;
          }
        }
      }
    }
  }
</style>
