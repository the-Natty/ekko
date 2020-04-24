<template>
  <div class="foot">
    <div class="left">      
      <ul class="banner">
        <li v-for="(item, index) in tabs" :key="index" :class="{active: tab == index}" @click="pushTab(index)">{{item}}</li>
      </ul>
      <div class="address">联系地址：上海市浦东新区成山路668号恒大星级公寓</div>
      <div class="company">前端 工程师 前端工程师 前端开发 攻城狮 程序员 软件工程师</div>
    </div>
    <div class="right">
      <img :src="logo" alt="logo">
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import logo from '@/common/img/fe.jpg'
export default {
  name: 'Foot',
  data() {
    return {
      logo: logo
    }
  },
  computed: {
    ...mapState([
      'tab',
      'tabs',
      'tabsPath'
    ])
  },
  methods: {
    ...mapMutations(['setTab']),
    pushTab(index) {
      this.setTab(index)
      this.$router.push(this.tabsPath[index])
    }
  }
}
</script>

<style scoped lang="less">
.foot {
  width: 1000px;
  min-width: 1000px;
  height: 107px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background: #fff;
  position: relative;
  margin: 0 auto;
  border-top: solid 1px #E6E6E6;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: PingFangSC-Regular, sans-serif;
    .banner {
      font-size: 14px;
      color: #666;
      margin-top: 16px;
      li {
        display: inline-block;
        padding: 0 20px;
        line-height: 20px;
        position: relative;
        cursor: pointer;
        &:hover {
          color: #EC2232;
        }
        &::after {
          content: '|';
          position: absolute;
          right: 0;
          top: 1px;
          height: 16px;
          overflow: hidden;
        }
        &:last-child::after {
          content: '';
        }
        &:first-child {
          padding-left: 0;
        }
      }
    }
    .address, .company {
      color: #999;
      font-size: 12px;
      line-height: 17px;
      a {
        color: #999;
        text-decoration: underline;
        &:active, &:hover {
          color: #999
        }
      }
    }
    .address {
      margin-top: 13px;
    }
    .company {
      margin-top: 6px;
    }
  }
  .right {
    img {
      width: 98px;
      height: 101px;
    }
  }
}
</style>
