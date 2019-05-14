<style lang="scss">
.container {
  align-items: center;

  .carousel {
    max-width: 1000px;
  }
  .content {
    padding: 5rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;

    .box-card {
      width: 600px;
      margin: 15px 20px;

      .image {
        width: 100%;
        display: block;
      }
    }
  }
}
</style>

<template>
  <div class="container">
    <el-row type="flex" justify="center">
      <el-col :span="16">
        <el-carousel class="carousel" height="350px">
          <el-carousel-item v-for="item in carousels" :key="item">
            <el-image
              :src="item"
              fit="contain"
              style="height: 350px; width: auto;"
            ></el-image>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <div class="content">
      <!-- card start -->
      <el-card
        v-for="i in arr(10)"
        :key="i"
        class="box-card"
        :body-style="{ padding: '0px' }"
      >
        <el-image
          style="width: 600px; height: 300px;"
          src="http://mmbiz.qpic.cn/mmbiz_jpg/6NfezMJMwPXhfW79PJ1tJ3kIo4XUK3UvLiaQLXTtLsEGpMAicibopbqgMLIua10sicOCyWMype8VZib5AvuAsERcX0w/0"
          alt="图片"
          fit="cover"
          class="image"
        />
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
        </div>
      </el-card>
      <!-- card end -->
    </div>
  </div>
</template>

<script>
import carousel1 from '~/static/carousel1.jpg'
import carousel2 from '~/static/carousel2.jpg'

export default {
  components: {},
  data() {
    return {
      carousels: [carousel1, carousel2]
    }
  },
  computed: {},
  watch: {},
  async created() {},
  async mounted() {},
  methods: {
    arr: function ls(count) {
      return Array(++count)
        .join('0')
        .split('')
        .map(function(v, i) {
          return ++i
        })
    }
  }
}
</script>
