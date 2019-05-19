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
        <el-row justify="center" type="flex">
            <el-col :span="16">
                <el-carousel class="carousel" height="350px">
                    <el-carousel-item :key="item" v-for="item in carousels">
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
                    :body-style="{ padding: '0px' }"
                    :key="i"
                    class="box-card"
                    v-for="i in ls(10)"
            >
                <el-image
                        alt="图片"
                        class="image"
                        fit="cover"
                        src="http://mmbiz.qpic.cn/mmbiz_jpg/6NfezMJMwPXhfW79PJ1tJ3kIo4XUK3UvLiaQLXTtLsEGpMAicibopbqgMLIua10sicOCyWMype8VZib5AvuAsERcX0w/0"
                        style="width: 600px; height: 300px;"></el-image>
                <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                </div>
            </el-card>
            <!--      <el-button @click="getLists">this</el-button>-->
            <!-- card end -->
        </div>
    </div>
</template>

<script>
import carousel1 from '@/assets/img/carousel1.jpg'
import carousel2 from '@/assets/img/carousel2.jpg'
import article from '@/lin/models/article'

export default {
  components: {},
  data() {
    return {
      carousels: [carousel1, carousel2],
      cards: [],
    }
  },
  computed: {},
  watch: {},
  async created() {
    this.cards = await article.getArticles()
  },
  async mounted() {
  },
  methods: {
    ls(count) {
      return Array(++count)
        .join('0')
        .split('')
        .map((v, i) => ++i)
    },
  },
}
</script>
