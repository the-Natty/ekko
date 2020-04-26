<template>
  <div class="wrap">
    <div class="ruless">
      <div class="headBar">同程</div>
      <ul class="friend-items">
        <li>
          <div class="msg">
            <p class="name">1.营销专栏</p>
            <p class="age">营销活动宣传落地页开发 & 专题模板项目</p>
          </div>
        </li>
        <li>
          <div class="msg detail">
            <Poptip trigger="hover" placement="right" width="320" content="content">              
              <a href="https://m.ly.com/tailor/" target="_blank">
                <p class="name">2.包团定制</p>
                <p class="age">定制旅游，团队报名，只玩自己想玩的。</p>
              </a>
              <div slot="content">
                <img src="../common/img/dz.png" style="width: 100%; height: 100%">
              </div>
            </Poptip>
          </div>
        </li>
        <li>
          <div class="msg detail">
            <Poptip trigger="hover" placement="right" width="420" content="content">
              <a href="https://gny.ly.com/line/t1j4p1030735c321.html?pos=4" target="_blank">
                <p class="name">3.产品详情点评</p>
                <p class="age">官网国内游产品详情页，<strong style="font-weight: bolder;">用户点评</strong>。</p>
              </a>
              <div slot="content">
                <img src="../common/img/dp.png" style="width: 100%; height: 100%">
              </div>
            </Poptip>
          </div>
        </li>
        <li>
          <div class="msg">
            <p class="name">4.eOrder皓月</p>
            <p class="age">国旅集团订单后台管理系统，管理所有订单信息。</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="ruless">
      <div class="headBar">携程</div>
      <ul class="friend-items">
        <li>
          <div class="msg">
            <p class="name">1.app搜索列表页</p>
            <p class="age">app主搜搜索页进入，列表页业务开发</p>
          </div>
        </li>
        <li>
          <div class="msg detail" @click="openInApp">
            <Poptip trigger="hover" placement="right" width="320" content="content">
              <p class="name">2.搜索列表页重构</p>
              <p class="age">Ctrip Lizard框架 > Ctrip React Native(CRN)</p>
              <div slot="content">
                <img src="../common/img/list.png" style="width: 100%; height: 100%">
              </div>
            </Poptip>
          </div>
        </li>
        <li>
          <div class="msg detail" @click="openInApp">
            <Poptip trigger="hover" placement="right" width="320" content="content">
              <p class="name">3.搜索地图应用</p>
              <p class="age">基于Lizard框架，支持百度地图、谷歌地图（国外）。</p>
              <div slot="content">
                <img src="../common/img/map.png" style="width: 100%; height: 100%">
              </div>
            </Poptip>
          </div>
        </li>
        <li>
          <div class="msg">
            <p class="name">4.搜索引流查询管理后台</p>
            <p class="age">inspinia_admin仓库提供的UI风格重构应用</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="ruless">
      <div class="headBar">爱库存</div>
      <ul class="friend-items">
        <li>
          <div class="msg">
            <p class="name">1.支付收银台</p>
            <p class="age">微信小店开店费用，支持微信、支付宝支付</p>
          </div>
        </li>
        <li>
          <div class="msg detail">
            <Poptip trigger="hover" placement="right" width="320" content="content">
              <a href="https://mall.xiangtuan.xyz/api/auth/t01hFd1jg3?distributorId=u9tHkcSR9D&channel=h5Mall&spm=30.36.935&ud=t0xGsh0Luf&ut=d&t=1587801815" target="_blank">
                <p class="name">2.饷店1.0</p>
                <p class="age">微信小店，开启用户自己店铺</p>
              </a>
              <div slot="content">
                <img src="../common/img/xd.png" style="width: 100%; height: 100%">
              </div>
            </Poptip>
          </div>
        </li>
        <li>
          <div class="msg detail">
            <Poptip trigger="hover" placement="right" width="320" content="content">              
              <a href="https://h5.xiangdian.shop/" target="_blank">
                <p class="name">3.饷店移动端官网</p>
                <p class="age">店铺定义宣导，官方网站移动端</p>
              </a>
              <div slot="content">
                <img src="../common/img/xdgw.png" style="width: 100%; height: 100%">
              </div>
            </Poptip>
          </div>
        </li>
        <li>
          <div class="msg">
            <p class="name">4.销冠管理后台</p>
            <p class="age">用户查询管理，店铺查询管理</p>
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
    ...mapMutations(['setTab']),
    openInApp() {
      this.$Notice.open({
        title: '请在携程APP上打开，主搜入口',
        duration: 3
      });
    }
  }
}
</script>

<style scoped lang="less">
.wrap {
  width: 100%;
  background: #fff;
  padding-top: 40px;
  .ruless {
    margin-bottom: 90px;
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
          &.detail {
            cursor: pointer;
          }
          p.name {
            font-size: 18px;
            font-family: PingFang-SC-Heavy, microsoft yahei, arial,sans-serif;
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