<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <el-header class="header">
      <div class="topbar clearfixed">
        <!-- 左上方 Logo -->
        <a href class="logo">Hello</a>
        <!-- 右上方 登录注册 -->
        <div class="sign">
          <a href class="sign-in">登录</a>
          <a href class="sign-up">注册</a>
          <a href class="write el-icon-edit">写文章</a>
        </div>
        <!-- 中间 导航栏 -->
        <div class="nav clearfixed">
          <ul class="nav-list">
            <li>
              <a href>首页</a>
            </li>
            <li>
              <a href>标签</a>
            </li>
            <li>
              <form action="/">
                <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input21"></el-input>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </el-header>

    <!-- 正文部分 -->
    <el-container class="wrapper">
      <!-- 左侧边栏 -->
      <!-- <el-aside class="left"></el-aside> -->

      <!-- 内容部分 -->
      <el-main class="main">
       
      </el-main>

      <!-- 右侧边栏 -->
      <el-aside class="right">
        <!-- 推荐作者 -->
        <div class="recommended-authors">
          <div class="ra-title">
            <span>推荐作者</span>
            <a href class="change el-icon-refresh">换一批</a>
          </div>
          <ul class="list">
            <li class="mt15">
              <a href class="avatar">
                <!-- <img src="" alt> -->
              </a>
              <a href class="follow el-icon-plus">关注</a>
              <a href class="name">Sunnier</a>
            </li>
            <li class="mt15">
              <a href class="avatar">
                <!-- <img src="" alt> -->
              </a>
              <a href class="follow el-icon-plus">关注</a>
              <a href class="name">Sunnier</a>
            </li>
            <li class="mt15">
              <a href class="avatar">
                <!-- <img src="" alt> -->
              </a>
              <a href class="follow el-icon-plus">关注</a>
              <a href class="name">Sunnier</a>
            </li>
          </ul>
          <a href class="find-more">
            查看全部
            <i class="el-icon-arrow-right"></i>
          </a>
        </div>
      </el-aside>
    </el-container>

    <!-- 回到顶部 -->
    <div class="side-tool">
      <a href="#">
        <i class="el-icon-caret-top"></i>
      </a>
    </div>
    <!-- 分割线 -->
    <!-- <div class="line"></div> -->
    <!-- 底部 -->
    <el-footer>
      <div class="copyright">Copyright © 2019 当前呈现版本</div>
    </el-footer>
  </div>
</template>


<style>
@import "./assets/css/main.css";

/* 搜索框 */
.el-input__inner {
  border-radius: 20px !important;
}

/* 左侧边栏 */
/* .left {
  width: 16.66667% !important;
} */
/* 文章列表 */
.el-main {
  padding: 15px 5px 0 5px;
}

/* 轮播图 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  border-radius: 10px;
}
.el-carousel__item:nth-child(2n + 1) {
  border-radius: 10px;
}
.el-carousel__item h3 img {
  background-size: contain;
  width: 100%;
  height: auto;
}
/* 右侧边栏 */
.right {
  width: 29.16667% !important;
}
/* 底部 */
.el-footer {
  background-color: #f5f5f7;
  padding: 0;
}
</style>
<script>

</script>
