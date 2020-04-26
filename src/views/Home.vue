<template>
  <div class="wrap">
    <div class="banner">
      <Carousel autoplay v-model="init" loop arrow='never' class="banner_swipe">
        <CarouselItem v-for="(item, index) in bgArr" :key="index">
          <div class="demo-carousel" @click="watchFun(item.url)">
            <img :src="item.bg" alt="">
          </div>
        </CarouselItem>
      </Carousel>
    </div>
    <div class="introduce">
      <h3>什么是远东</h3>
      <p class="mt">远东（英文：Far East）是亚洲最东部地区的通称。</p>
    </div>
    <div class="friends">
      <div class="headBar">曾经的Family</div>
      <ul class="friend-items">
        <li>
          <div class="img"></div>
          <div class="msg">
            <p class="name">同程旅游</p>
            <p class="age">2.5年 前端开发</p>
            <p class="tip tip1">2015年10月 - 2018年3月</p>
            <p class="tip">实习 > 主力开发</p>
            <p class="tip">初入职场，默默成长</p>
          </div>
        </li>
        <li>
          <div class="img"></div>
          <div class="msg">
            <p class="name">携程旅游</p>
            <p class="age">1.2年 前端开发</p>
            <p class="tip tip1">2018年4月 - 2019年6月</p>
            <p class="tip">主力 > 前端负责人</p>
            <p class="tip">攻略主搜前端负责人</p>
          </div>
        </li>
        <li>
          <div class="img"></div>
          <div class="msg">
            <p class="name">爱库存</p>
            <p class="age">1年+  前端开发</p>
            <p class="tip tip1">2019年6月-至今</p>
            <p class="tip">主力 > 领域负责人</p>
            <p class="tip">销冠领域前端负责人</p>
          </div>
        </li>
      </ul>
      <div class="watch-btn" @click="watchExp">查看项目</div>
    </div>
  </div>
</template>

<script>
import b2 from '../common/img/company1.jpg'
import b3 from '../common/img/company2.jpg'
import b4 from '../common/img/company3.jpg'
export default {
  data() {
    return {
      init: 0,
      bgArr: [{
        bg: b2,
        url: 'https://www.ly.com/'
      }, {
        bg: b3,
        url: 'https://www.ctrip.com/'
      }, {
        bg: b4,
        url: 'https://www.aikucun.com/'
      }]
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    watchFun(url) {
      window.open(url, '_blank')
    },
    watchExp() {
      this.$router.push('/project')
    }
  }
}
</script>

<style scoped lang="less">
  .wrap {
    width: 100%;
    background: #fff;
    .banner {
      width: 100%;
      height: 400px;
      .banner_swipe {
        height: 400px;
        width: 100%;
        img {
          height: 400px;
          width: 100%;
        }
      }
    } 
    .introduce {
      text-align: center;
      h3 {
        font-size:36px;
        font-family:PingFang-SC-Heavy,microsoft yahei,arial,hiragino sans gb;
        font-weight:800;
        color:#333;
        line-height:50px;
        margin-top: 69px;
      }
      p {
        font-size:16px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:#666;
        line-height:28px;
        &.mt {
          margin-top: 16px;
        }
      }
    }
    .headBar {
      font-size:36px;
      font-family:PingFang-SC-Heavy,microsoft yahei,arial,hiragino sans gb;
      font-weight:800;
      color:#333;
      line-height:50px;
      margin-top: 69px;
    }
    .friends {
      .friend-items {
        height: 330px;
        margin-top: 47px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        li {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 300px;
          height: 100%;
          text-align: left;
          .img {
            width: 100%;
            height: 190px;
            background-size: 100% 100%!important;
          }
          .msg {
            padding: 10px 0 12px 16px;
            background: #F5F5F5;
            p.name {
              font-size:18px;
              font-family:PingFang-SC-Heavy,microsoft yahei,arial,hiragino sans gb;
              font-weight:800;
              color:#333;
              line-height:25px;
            }
            p.age {
              font-size:14px;
              font-family:PingFangSC-Regular;
              font-weight:400;
              color:#666;
              line-height:22px;
            }
            p.tip1 {
              margin-top: 7px;
            }
            p.tip {
              line-height: 22px;
              font-size: 14px;
            }
          }
          &:first-child .img {
            background-image: url('../common/img/once.jpg');
          }
          &:nth-child(2) .img {
            background-image: url('../common/img/second.jpg');
          }
          &:last-child .img{
            background-image: url('../common/img/logoakc.jpg');
          }
        }
      }
      .watch-btn {
        margin: 40px 0 40px 410px;
        width:180px;
        height:44px;
        background:#EC2232;
        border-radius:2px;
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:#fff;
        line-height:44px;
        cursor: pointer;
        &:hover {
          background:#FC3142;
        }
      }
    }
  }
</style>
