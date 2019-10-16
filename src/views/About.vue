<template>
  <div class="container">
    <div class="page page1">
      <div class="msg">
        <h2>陈小飞</h2>
          <div class="detail">
            <ul>
              <li>
                <ol>
                  <li><label>性别</label>男</li>
                  <li><label>民族</label>汉族</li>
                  <li><label>国籍</label>中国</li>
                  <li><label>政治面貌</label>团员</li>
                </ol>
              </li>
              <li>
                <ol>
                  <li><label>英文名</label>Ekko</li>
                  <li><label>出生日期</label>1992.10.03</li>
                  <li><label>婚姻状况</label>未婚</li>
                  <li><label>最高学历</label>本科</li>
                </ol>
              </li>
            </ul>
            <div class="myPhoto">
              <img src="../assets/me.jpg" alt="me">
            </div>
          </div>
      </div>

      <div class="msg">
        <h2>联系方式</h2>
        <ul>
          <li>
            <ol>
              <li><label>手机号码</label>19901704827</li>
              <li><label>微信</label>19901704827</li>
              <li><label>邮箱</label>19901704827@163.com</li>
            </ol>
          </li>
          <li>
            <ol>
              <li><label>祖籍</label>江西上饶玉山</li>
              <li><label>所在城市</label>上海嘉定</li>
              <li><label>所住地址</label>嘉定江桥泰宸沙河茗苑</li>
            </ol>
          </li>
        </ul>
      </div>
    </div>

    <div class="page page2">
      <div class="msg">
        <!-- <h2>工作技能</h2> -->
        <ul>
          <li>
            <ol>
              <li><label class="tips">基础</label></li>
              <li><label>HTML</label>手写规范的HTML文档</li>
              <li><label>CSS</label>手写兼容的CSS、Less样式</li>
              <li><label>JS</label>手写脚本文件</li>
            </ol>
          </li>
          <li>
            <ol>
              <li><label class="tips">进阶</label></li>
              <li><label>ES6</label>前台站点Node、ES6应用</li>
              <li><label>Vue</label>Vue1.0版本开始用、后台系统单页面应用</li>
              <li><label>Node</label>结合Express、MongoDB搭建个人博客；前台站点</li>
            </ol>
          </li>
          <li>
            <ol>
              <li><label class="tips">工具</label></li>
              <li><label>Git</label>Git Extension熟练使用、代码托管，个人GitHub，本页即个人Git Pages</li>
              <li><label>Build</label>gulp/grunt等构建工具的使用，本页脚本、样式即使用gulp构建；热加载开发</li>
              <li><label>Tools</label>Sublime Text/Visual Studio [2012/15/17/Code]等开发工具使用</li>
            </ol>
          </li>
        </ul>
      </div>
    </div>

    <div class="page page3">
      <div class="msg">
        <!-- <h2>工作经验</h2> -->
        <ul>
          <li>
            <ol>
              <li><label>携程旅游</label>2018.04-至今</li>
              <li><label>同程旅游</label>2015.10-2018.3</li>
            </ol>
          </li>
          <li>
            <ol>
              <li><label class="tips">工作内容</label></li>
              <li>H5开发：m.ly.com大首页包团定制 <a href="https://m.ly.com/dujia/dingzhiyou/index" target="_blank">包团定制</a> (请使用手机扫码下图)</li>
              <li style="padding: 5px 0;"><img src="../assets/btdz.png" style="width:100px;height:100px;"></li>
              <li>PC开发：gny.ly.com功能开发</li>
              <li>后台开发：供应商管理系统、订单管理系统开发；MVC开发、使用Vue/Angular开发单页面</li>
            </ol>
          </li>
          <li>
            <ol>
              <li><label class="tips">求职意向</label></li>
              <li><label>地点</label>上海</li>
              <li><label>岗位</label>前端工程师</li>
              <li><label>时间</label>大概二个礼拜可入职</li>
              <li><label>薪资</label>面谈 O(∩_∩)O</li>
            </ol>
          </li>
        </ul>
      </div>
    </div>

    <div class="page page4">
      <div class="msg">
        <!-- <h2>学历其他</h2> -->
        <ul>
          <li>
            <ol>
              <li><label class="tips">教育经历</label></li>
              <li><label>2012-2016</label>东华理工大学（软件工程）</li>
            </ol>
          </li>
          <li>
            <ol>
              <li><label class="tips">个人喜好</label></li>
              <li><label>爱好</label>电影、音乐、运动</li>
              <li><label>性格</label>可安静、可逗比</li>
              <li><label>特长</label>偶尔喜欢写点东东</li>
            </ol>
          </li>
          <li>
            <ol>
              <li><label class="tips">简历附件</label></li>
              <li><a href="https://github.com/bfek">GitHub</a></li>
              <li><a href="../assets/file/陈小飞简历 前端工程师.pdf" @click="()=> { return false; }">下载简历附件（pdf）</a></li>
              <li><a href="../assets/file/陈小飞简历 前端工程师.docx">下载简历附件（word）</a></li>
            </ol>
          </li>
        </ul>
      </div>
    </div>

    <div class="page page5">
      <div class="msg">
        <p>Emails: 19901704827@163.com</p>
        <p>Address: 上海市浦东新区成山路668号恒大星级公寓1期</p>
      </div>
    </div>

  </div>
</template>

<style lang="less" scoped>
  .container{
    width: 100%;
    height: 100%;

    .page{
      li{
        list-style-type: none;
      }
      .msg{
        ul{
          display: inline-block;
          >li{
            margin-bottom: 10px;
          }
          label {
            position: relative;
            display: inline-block;
            width: 82px;
            text-align: justify;
            text-align-last: justify;
            margin-right: 15px;
          }
          label:after {
            content: ':';
            position: absolute;
            right: -6px;
          }
        }
        .myPhoto{
          display: inline-block;
          position: relative;
          top: -24px;
          img{
            width: 270px;
            height: 200px;
          }
        }
        .tips{
          color: #c2431c;
          font-weight: bolder;
        }
      }
  }

  // mixin defined
  .for(@list, @code) {
    & {
      .loop(@i:1) when (@i =< length(@list)) {
        @value: extract(@list, @i);

        @code();

        .loop(@i + 1);
      }

      .loop();
    }
  }

  @colors: #1abc9c, #3498db, #2ecc71, #4BBFC3, #f2f2f2;
  .for(@colors, {
    .page@{i} {
      background: @value;
    }
  });

  }
  .none{
    display: none;
  }
</style>