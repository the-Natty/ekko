<template>
  <div class="wrap">
    <div class="banner">
      <img src="../common/img/once.jpg" style="height: 500px;">
      <p>我还是曾经那个少年</p>
    </div>
    <div class="ruless">
      <div class="headBar">同程</div>
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

    <div class="banner">
      <img src="../common/img/second.jpg" style="height: 400px;">
      <p>怀揣梦想上路</p>
    </div>
    <div class="ruless">
      <div class="headBar">携程</div>
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

    <!-- <div class="banner">
      <img src="../common/img/second.jpg" style="height: 400px;">
      <p>道路的选择</p>
    </div> -->
    <div class="ruless">
      <div class="headBar">爱库存</div>
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
    this.setTab(1)
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
  .banner {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
    p {
      text-align: right;
      font-size:12px;
      font-family:PingFangSC-Regular,sans-serif;
      font-weight:400;
      color:#666;
      line-height:17px;
    }
  }
  .ruless {
    margin: 22px 0 90px 0;
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
}
</style>