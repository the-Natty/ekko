<template>
  <div class="title">
    <div class="left">
      <img :src="`${$imgs['fe']}`" alt="logo" class="logo">
      <span>Far East</span>
    </div>
    <ul class="right">
      <li v-for="(item, index) in tabs" :key="index" :class="{active: tab == index}" @click="pushTab(index)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Head',
  data() {
    return {}
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
.title {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 100;
  width: 1000px;
  min-width: 1000px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-bottom: solid 1px #E6E6E6;
  .left {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .logo {
      width: 42px;
      height: 40px;
    }
    span {
      font-size: 20px;
      font-family:PingFangSC-Medium, sans-serif;
      font-weight:bolder;
      color:rgba(51,51,51,1);
      margin-left: 10px;
    }
  }
  .right {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    li {
      font-size: 16px;
      padding: 0 20px;
      height: 100%;
      line-height: 60px;
      font-weight: bolder;
      font-family: PingFangSC-regular, sans-serif;
      &:last-child {
        padding-right: 8px;
      }
      cursor: pointer;
      &:hover {
        color: #EC2232;
      }
      &.active {
        color: #EC2232;
      }
    }
  }
}
</style>
