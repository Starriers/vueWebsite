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
          <a href class="write">写文章</a>
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
      <el-aside class="left">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>导航一
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>导航二
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!-- 内容部分 -->
      <el-main class="main">
        <!-- 轮播图 -->
        <el-carousel :interval="5000" indicator-position="outside" height="200px">
          <el-carousel-item v-for="(img,index) in imgList" :key="index">
            <h3>
              <img v-bind:src="img.url">
            </h3>
          </el-carousel-item>
        </el-carousel>
        <!-- 分割线 -->
        <div class="line"></div>
        <!-- 文章列表 -->
        <div class="list"></div>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140"></el-table-column>
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </el-main>

      <!-- 右侧边栏 -->
      <el-aside class="right">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>导航一
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>导航二
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
    </el-container>

    <!-- 回到顶部 -->
    <div class="side-tool">
      <a href="#">
        <i class="el-icon-caret-top"></i>
      </a>
    </div>

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
/* 底部 */
.el-footer {
  background-color: #b3c0d1;
  padding: 0;
}
</style>
<script>
// 轮播图
export default {
  // name: 'App',
  data() {
    return {
      imgList: [
        { url: require("./assets/img/1.jpg") },
        { url: require("./assets/img/2.jpg") },
        { url: require("./assets/img/3.jpg") },
        { url: require("./assets/img/4.jpg") }
      ]
    };
  }
};

</script>
