<style lang="scss">
    html {
        font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
    }

    .root {
        margin-top: 20px;
        .header {
            .menu {
                padding: 0 80px;

                > li {
                    font-size: 18px;
                }

                .login {
                    float: right;
                }
            }
        }

        .body {
            margin: 30px 100px;
        }

        .footer {
            display: flex;
            height: 150px;
            background-color: #bd1e22;
            position: fixed;
            bottom: 0;
            width: 100%;
            padding: 30px 100px;
            justify-content: flex-start;

            .content {
                width: 200px;
            }
        }
    }

    a:link {
        color: #333333;
        line-height: 24px;
        font-size: 16px;
    }

    a:visited {
        color: #333333;
        line-height: 24px;
    }

    a:hover {
        color: #333333;
        line-height: 24px;
    }

    .container {
        align-items: center;

        .carousel {
            max-width: 1000px;
        }

        .content {
            padding: 3rem;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;

            .box-card {
                width: 300px;
                margin: 25px 10px;

                .image {
                    width: 100%;
                    display: block;
                }
            }
        }
    }
</style>

<template>
    <div class="root">
        <!-- Header -->
        <div class="header">
            <!--            <el-image-->
            <!--                    style="width: auto; height: auto"-->
            <!--                    :src="headImage"-->
            <!--                    fit="cover"-->
            <!--            ></el-image>-->
            <el-menu
                    :default-active="activeIndex"
                    class="menu"
                    mode="horizontal"
                    router="true"
                    @select="handleSelect"
            >
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item index="notice">通知</el-menu-item>
                <el-menu-item index="" style="padding: 20px">
                    <a href="https://cy.ncss.cn/redactivity/index">
                        大赛官网
                    </a>
                </el-menu-item>
                <el-submenu v-show="false" class="login" index="4">
                    <template slot="title">
                        我的
                    </template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                        <template slot="title"
                        >选项4
                        </template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item v-show="true" class="" index="5">登陆</el-menu-item>
            </el-menu>
        </div>

        <!-- body -->
        <div class="body">
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
                            :key="card.id"
                            class="box-card"
                            v-for="card in cards"
                            @click="onClickCard"
                    >
                        <router-link :to="{name:'article',query:{id: card.id }}">
                            <el-image
                                    alt="图片"
                                    class="image"
                                    fit="cover"
                                    :src="card.logo"
                                    style="width: 300px; height: 300px;"
                            ></el-image>
                            <div style="padding: 14px;">
                                <span>{{card.title}}</span>
                            </div>
                        </router-link>
                    </el-card>
                    <!--      <el-button @click="getLists">this</el-button>-->
                    <!-- card end -->
                </div>
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="150"
                        :current-page="currentPage"
                        @current-change="onCurrentChange">
                </el-pagination>
            </div>
            <div style="height: 150px;"></div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <el-image
                    :src="logo1"
                    style="width: 80px; height: 80px; margin: 0 10px;"
            />
            <div class="content">
                <el-row type="flex">
                    <div>
                        <el-link href="https://www.chsi.com.cn/">学信网</el-link>
                    </div>
                    <div style="color: #fff; margin: 0 32px;">|</div>
                    <div>
                        <el-link href="https://www.chsi.com.cn/">创业网</el-link>
                    </div>
                </el-row>
                <el-row type="flex" style="color: #ddd;">
                    版权所有：
                </el-row>
                <el-row type="flex" style="color: #ddd;">
                    陕ICP备19004638号
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
import carousel1 from '@/assets/img/carousel1.jpg'
import carousel2 from '@/assets/img/carousel2.jpg'
import article from '@/lin/models/article'
import logo from '@/assets/img/favicon.png'

export default {
  components: {},
  data() {
    return {
      currentPage: 1,
      activeIndex: 0,
      carousels: [carousel1, carousel2],
      cards: [],
      logo1: logo,
    }
  },
  computed: {},
  watch: {},
  async created() {
    const now = this
    now.cards = await article.getArticles()
  },
  async mounted() {},
  methods: {
    ls(count) {
      return Array(++count)
        .join('0')
        .split('')
        .map((v, i) => ++i)
    },
    onClickCard() {
      this.$router.go({ name: 'article' })
    },
    async onCurrentChange(page) {
      console.log('page to get articles', page)
      this.cards = await article.getArticles(page - 1)
    },
  },
}
</script>
