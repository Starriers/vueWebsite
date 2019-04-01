<template>
  <div id="app">
    <el-container class="wrapper">
      <!-- 顶部导航栏 -->
      <el-header>
        <div class="topbar">
          <div>
          <!-- <a href="">Hello</a> -->
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">
              <router-link to="/listBlog">首页</router-link>
            </el-menu-item>
            <el-menu-item index="2">首页</el-menu-item>
            <el-menu-item index="3">
              <a href="https://www.ele.me" target="_blank">关于我们</a>
            </el-menu-item>
          </el-menu>
          <form action=""></form>
          </div>
        <div>
          
        </div>
        </div>
      </el-header>

      <!-- 轮播图 -->
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>

      <!-- 正文部分 -->
      <el-container>
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
        <!-- 中间 -->
        <el-main>
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
        <ul>
          <li></li>
        </ul>
      </div>

      <!-- 底部 -->
      <el-footer>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">
            <router-link to="/listBlog"></router-link>
          </el-menu-item>
          <el-menu-item index="2"></el-menu-item>
          <el-menu-item index="3">
            <a href="https://www.ele.me" target="_blank">关于我们</a>
          </el-menu-item>
        </el-menu>
      </el-footer>
    </el-container>
  </div>
</template>


<style>
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
.wrapper {
  height: 100%;
  border: 1px solid #eee;
}

/* 顶部导航栏 */
.el-header {
  text-align: center;
  font-size: 12px;
  background-color:#545c64;
  color: #333;
  line-height: 60px;
  padding: 0;
}
.el-header .topbar{
  margin-right:auto;
  margin-left:auto;
  width: 1140px;
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
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

/* 正文部分 */
/* 左侧边栏 */
.el-aside {
  color: #333;
}

.left {
  background-color: rgb(238, 241, 246);
}

/* 右侧边栏 */
.right {
  background-color: rgb(238, 241, 246);
}
/* 中间 */
.el-main {
  color: #333;
}

/* 回到顶部 */

/* 底部 */
.el-footer {
  background-color: #b3c0d1;
  padding: 0;
}
</style>
<script>
// export default {
//   methods: {
//     handleOpen(key, keyPath) {
//       console.log(key, keyPath);
//     },
//     handleClose(key, keyPath) {
//       console.log(key, keyPath);
//     }
//   }
// };
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>
