<template>
  <div class="wrap">
    <div class="banner"></div>
    <div class="cluture">
      <div class="head">我们的职场</div>
      <div class="msg-content">
        <p class="t1"><span>加入饷店开启全新职业生涯，</span><span class="youxiu">与优秀的人一起做优秀的事。</span></p>
        <ul>
          <li>
            <p>我们致力于为社会创造更大价值，打造全新电商生态圈。我们砥砺前行，勇敢无畏，走出了属于自己的崭新道路。</p>
          </li>
          <li>
            <h4>饷店的招商达人们</h4>
            <p>不断拓展品牌资源、为品牌赋能，致力于打造真正优质的货源。</p>
          </li>
        </ul>
        <ul>
          <li>
            <h4>饷店的技术大牛们</h4>
            <p>用他们严谨而创新的思维，通过一串串代码，构建了饷店这个坚实的产品。</p>
          </li>
          <li>
            <h4>饷店的品控大神们</h4>
            <p>“确保交付品质”是他们的首要信念。从饷店发出的每件商品，都要经过他们的火眼金睛。</p>
          </li>
        </ul>
        <ul>
          <li>
            <h4>饷店的增长大咖们</h4>
            <p>洞悉行业前沿趋势，抢占业务拓展赛道，他们个个身怀独门绝技，推动饷店不断变化。</p>
          </li>
          <li>
            <h4>饷店的市场大牛们</h4>
            <p>擅长爆款营销/社群营销，让合伙人的饷店的市场影响力无所不在。</p>
          </li>
        </ul>
      </div>
      <div class="pic-content">
        <ul class="lineOne">
          <li v-for="item in 3" :key="item"></li>
        </ul>
        <ul class="lineTwo">
          <li v-for="item in 3" :key="item"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped lang="less">
  .wrap {
    width: 100%;
    background: #fff;
    .banner {
      width: 100%;
      padding-bottom: 54%;
      background-image: url('../common/img/xcjike.jpg');
      background-size: 100% 100%;
    }
    .cluture {
      width: 100%;
      padding-bottom: 60px;
      .head {
        font-size:36px;
        font-family:PingFang-SC-Heavy,microsoft yahei,arial,hiragino sans gb;
        font-weight:800;
        color:#2B2E33;
        line-height:50px;
        padding: 78px 0 50px 0;
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
          &.lineOne {
            li:first-child {
              background-image: url('../common/img/about6.png');
            }
            li:nth-child(2) {
              background-image: url('../common/img/about2.png');
            }
            li:last-child {
              background-image: url('../common/img/about5.png');
            }
          }
          &.lineTwo {
            margin-top: 14px;
            li:first-child {
              background-image: url('../common/img/about3.png');
            }
            li:nth-child(2) {
              background-image: url('../common/img/about4.png');
            }
            li:last-child {
              background-image: url('../common/img/about1.png');
            }
          }
        }
      }
    }
  }
</style>
