<template>
  <div class="wrap">
    <div class="banner"></div>

    <div class="rights">
      <h1>经销商5大特权</h1>
      <ul>
        <li class="aa">
          <div class="img1"></div>
          <h3>海量资源</h3>
          <p>优质货源任意选择</p>
        </li>
        <li class="aa">
          <div class="img2"></div>
          <h3>收入丰厚</h3>
          <p>价格自定义</p>
        </li>
        <li class="aa">
          <div class="img3"></div>
          <h3>培训支持</h3>
          <p>行业大咖导师1对1培训</p>
          <p>帮助销售业绩翻倍</p>
        </li>
        <li class="aa">
          <div class="img4"></div>
          <h3>市场支持</h3>
          <p>一件代发，专业售后</p>
          <p>轻松解决后顾之忧</p>
        </li>
        <li class="aa">
          <div class="img5"></div>
          <h3>市场巨大</h3>
          <p>行业前景广阔</p>
          <p>开启全新创业路</p>
        </li>
      </ul>
    </div>

    <div class="ruless">
      <div class="headBar">经销商条款</div>
      <ul class="friend-items">
        <li>
          <div class="msg">
            <p class="name">1.具备公司资质</p>
            <p class="age">具有独立法人资格，合法经营</p>
          </div>
        </li>
        <li>
          <div class="msg">
            <p class="name">2.具有销售团队</p>
            <p class="age">专职销售团队，具有互联网或SaaS领域销售经营背景。</p>
          </div>
        </li>
        <li>
          <div class="msg">
            <p class="name">3.具有客户资源</p>
            <p class="age">拥有当地丰富的企业级资源或线下门店资源。</p>
          </div>
        </li>
        <li>
          <div class="msg">
            <p class="name">4.认可饷店文化</p>
            <p class="age">认同饷店的产品价值和文化理念，愿意跟饷店长期合作。</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="joins">
      <h2>成为经销商</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.wrap {
  width: 100%;
  background: #fff;
  .service-entrance {
    width: 90px;
    height: 100px;
    position: fixed;
    bottom: 60px;
    right: 0;
    z-index: 100;
  }
  .banner {
    width: 100%;
    padding-bottom: 36%;
    // background-image: url("../common/img/city-banner.jpg");
    background-size: 100% 100%;
  }
  .rights {
    margin-top: 82px;
    h1 {
      font-size: 36px;
      font-family: PingFang-SC-Heavy, microsoft yahei, arial, hiragino sans gb;
      font-weight: 800;
      color: #333;
      line-height: 50px;
    }
    ul {
      padding: 59px 100px 70px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        li.aa {
          display: flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;          
        }
        .img1, .img2, .img3, .img4, .img5 {
          width:72px;
          height:72px;
          background-size: 100% 100%!important;
        }
        h3 {
          font-size: 16px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          color:#333;
          line-height:22px;
          margin: 10px 0 9px;
        }
        p {
          font-size:12px;
          font-family:PingFangSC-Regular;
          font-weight:400;
          color:#666;
          line-height:17px;
        }
        // .img1 {
        //   background-image: url('../common/img/source.png');
        // }
        // .img2 {
        //   background-image: url('../common/img/rich.png');
        // }
        // .img3 {
        //   background-image: url('../common/img/study.png');
        // }
        // .img4 {
        //   background-image: url('../common/img/market.png');
        // }
        // .img5 {
        //   background-image: url('../common/img/cook.png');
        // }
      }
    }
  }
  .ruless {
    .headBar {
      font-size: 36px;
      font-family: PingFang-SC-Heavy, microsoft yahei, arial, hiragino sans gb;
      font-weight: 800;
      color: #333;
      line-height: 50px;
    }
    .friend-items {
      height: 150px;
      margin-top: 54px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      li {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 220px;
        height: 100%;
        text-align: left;
        background: #f7f7f7;
        .msg {
          p.name {
            font-size: 18px;
            font-family: PingFang-SC-Heavy, microsoft yahei, arial,
              hiragino sans gb;
            font-weight: 800;
            color: #333;
            line-height: 25px;
            margin: 28px auto 13px;
            text-align: center;
          }
          p.age {
            font-size: 14px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: #666;
            line-height: 22px;
            padding: 0 20px;
          }
        }
      }
    }
  }
  .joins {
    width: 100%;
    padding-bottom: 60px;
    .inline {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      & > div {
        width: 49%;
      }
    }
    h2 {
      font-size: 36px;
      font-family: PingFang-SC-Heavy, microsoft yahei, arial, hiragino sans gb;
      font-weight: 800;
      color: #333;
      line-height: 50px;
      padding: 76px 0 42px;
    }
    .btn {
      width: 140px;
      height: 44px;
      background: #ec2232;
      border-radius: 2px;
      position: relative;
      left: 430px;
      top: 36px;
      &:hover {
        background: #fc3142;
      }
      &.disable {
        opacity: 0.3;
        color: #fff;
      }
    }
    em {
      padding: 0 0 10px 0;
      font-style: normal;
      display: inline-block;
      &::after {
        content: "*";
        display: inline-block;
        margin-left: 4px;
        line-height: 1;
        font-family: SimSun;
        font-size: 12px;
        color: #ed4014;
      }
    }
  }
}
</style>