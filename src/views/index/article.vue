<template>
    <div class="root">
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
            </el-menu>
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
import logo from '@/assets/img/favicon.png'
import article from '@/lin/models/article'

export default {
  name: 'article',
  data() {
    return {
      logo1: logo,
      article: 2,
    }
  },
  async created() {
    const articleID = this.$route.query.id
    this.article = await article.getArticle(articleID)
  },
}
</script>

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
