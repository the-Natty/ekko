<template>
  <div class="bg-wrap" :style="`background-image:url(${bgImgPath})`">
    <div class="container">
      <header>
        <h1>Ekko的个人博客</h1>
        <p>Ekko の Personal Website</p>
      </header>

      <section>
        <ul>
          <li><router-link to="/about">» 日志：dev</router-link></li>
          <li><router-link to="/about">» 日记：文艺</router-link></li>
          <li><router-link to="/about">» 简历：历程</router-link></li>
        </ul>
      </section>

      <footer>Contact | ekko.cxfei.cc</footer>
    </div>
  </div>
</template>

<script>
import p4 from '@/assets/p4.jpg'

export default {
  name: 'home',
  data() {
    return {
      bgImgPath: p4
    }
  }
}
</script>

<style lang="less" scoped>
  .bg-wrap {
    height: 100%;
    width: 100%;    
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .container {
    background-color: rgba(0,0,0,0.3);
    border-radius: 1.2em;
    color: #fefefe;
    overflow: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    width: auto;
    height: auto;
    max-height: 80%;
    min-width: 82%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    transition: height 1s ease;
    transition: top 1s ease;
    padding: 15px 10px;

    header {
      border-bottom: 1px solid #d3d3d3;
      margin: 0 10px 15px 10px;
      h1 {
        font-size: 1.4rem;
        line-height: 90%;
        color: #fefefe;
        float: none;
        margin: auto;
        padding-top: 0.4rem;
        text-align: center;
        font-weight: bolder;
        text-shadow: 0 1px 1px #333;
      }
      p {
        text-align: center;
        color: #fefefe;
        line-height: 24px;
        text-shadow: 0 1px 1px #333;
      }
    }

    section {
      li {
        background: rgba(0, 0, 0, 0.5);
        margin: 20px 10px;
        padding: 8px 10px;
        list-style: none;
        border-radius: 6px;
        cursor: pointer;

        a {
          text-decoration: none;
          display: inline-block;
          width: 100%;
          height: 100%;
          color: #fff;
        }

        &:hover {
          background: rgba(255, 255, 255, 0.8);
          a {
              color: #333;
          }
        }
      }
    }

    footer {
      text-align: right;
      padding-top: 10px;
      margin: 15px 10px 0 10px;
      border-top: solid 1px #d3d3d3;
    }
  }

  @media (min-width: 771px){
    .container {
      min-width: 40%;
    }
  }
</style>
