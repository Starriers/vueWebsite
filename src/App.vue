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
        <!-- 轮播图 -->
        <el-carousel :interval="5000" indicator-position="outside" height="200px">
          <el-carousel-item v-for="(img,index) in imgList" :key="index">
            <h3>
              <img v-bind:src="img.url">
            </h3>
          </el-carousel-item>
        </el-carousel>
        <div class="left-option">
          <h5>为你推荐</h5>
        </div>

        <!-- 文章列表 -->
        <div class="list-container">
          <div class="list-item mt15">
            <div class="list-item-info clearfixed">
              <a href class="list-img">
                <img src="./assets/img/up.jpg" alt>
              </a>
              <div class="list-content">
                <a href target="_blank">
                  <div class="list-title">《尼采的十句话》</div>
                  <p class="list-abstract">
                    ——1—— 每一个不曾起舞的日子，都是对生命的辜负。
                    ——2—— 其实人跟树是一样的，越是向往高处的阳光，它的根就越要伸向黑暗的地底。
                    ——3—— 我感到难过，不是因为你欺骗了我，而是因为我再也不能相信你了。
                    ——4—— 一个人知道自己为什么而活，就可以忍受任何一种生活。
                    ——5—— 但凡不能杀死你的，最终都会使你更强大。
                    ——6—— 谁终将声震人间，必长久深自缄默；谁终将点燃闪电，必长久如云漂泊。
                  </p>
                </a>
                <div class="list-meta">
                  <a href>Sunnier</a>
                  <a href>
                    <i class="el-icon-edit-outline"></i>11
                  </a>
                  <span>
                    <i class="el-icon-star-on"></i>26
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="list-item mt15">
            <div class="list-item-info clearfixed">
              <a href class="list-img">
                <img src="./assets/img/up.jpg" alt>
              </a>
              <div class="list-content">
                <a href target="_blank">
                  <div class="list-title">《尼采的十句话》</div>
                  <p class="list-abstract">
                    ——1—— 每一个不曾起舞的日子，都是对生命的辜负。
                    ——2—— 其实人跟树是一样的，越是向往高处的阳光，它的根就越要伸向黑暗的地底。
                    ——3—— 我感到难过，不是因为你欺骗了我，而是因为我再也不能相信你了。
                    ——4—— 一个人知道自己为什么而活，就可以忍受任何一种生活。
                    ——5—— 但凡不能杀死你的，最终都会使你更强大。
                    ——6—— 谁终将声震人间，必长久深自缄默；谁终将点燃闪电，必长久如云漂泊。
                  </p>
                </a>
                <div class="list-meta">
                  <a href>Sunnier</a>
                  <a href>
                    <i class="el-icon-edit-outline"></i>11
                  </a>
                  <span>
                    <i class="el-icon-star-on"></i>26
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="list-item mt15">
            <div class="list-item-info clearfixed">
              <a href class="list-img">
                <img src="./assets/img/up.jpg" alt>
              </a>
              <div class="list-content">
                <a href target="_blank">
                  <div class="list-title">《尼采的十句话》</div>
                  <p class="list-abstract">
                    ——1—— 每一个不曾起舞的日子，都是对生命的辜负。
                    ——2—— 其实人跟树是一样的，越是向往高处的阳光，它的根就越要伸向黑暗的地底。
                    ——3—— 我感到难过，不是因为你欺骗了我，而是因为我再也不能相信你了。
                    ——4—— 一个人知道自己为什么而活，就可以忍受任何一种生活。
                    ——5—— 但凡不能杀死你的，最终都会使你更强大。
                    ——6—— 谁终将声震人间，必长久深自缄默；谁终将点燃闪电，必长久如云漂泊。
                  </p>
                </a>
                <div class="list-meta">
                  <a href>Sunnier</a>
                  <a href>
                    <i class="el-icon-edit-outline"></i>11
                  </a>
                  <span>
                    <i class="el-icon-star-on"></i>26
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="load-more">
          <a href>点击加载更多</a>
        </div>
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
