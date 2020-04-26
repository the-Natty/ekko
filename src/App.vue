<template>
  <div id="app">
    <Header/>
    <div class="base-wrap">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapState([
      'tab'
    ])
  },
  methods: {
    ...mapMutations(['setTab'])
  }
}
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }
  html, body, #app {
    width: 100%;
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .base-wrap {
    width: 1000px;
    min-width: 1000px;
    margin: 60px auto 0;
    min-height: calc(100vh - 109px);
  }
</style>
