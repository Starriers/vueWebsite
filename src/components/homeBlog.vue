<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
 
</template>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 450px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
<script>
export default {
  data() {
    return {
      //表格数据
      showCard: [
        {
          content: "Java"
        },
        {
          content: "Python"
        },
        {
          content: "JavaScript"
        },
        {
          content: "Go"
        },
        {
          content: "Php"
        },
        {
          content: "Scala"
        }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>
