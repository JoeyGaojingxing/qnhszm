<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
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
  color: #ffffff !important;
  line-height: 24px;
  font-size: 16px;
}
a:visited {
  color: #ffffff !important;
  line-height: 24px;
}
a:hover {
  color: #ffffff !important;
  line-height: 24px;
}
</style>

<template>
  <div class="root">
    <!-- Header -->
    <div class="header">
      <el-image
        style="width: auto; height: auto"
        :src="headImage"
        fit="cover"
      ></el-image>
      <el-menu
        :default-active="activeIndex"
        class="menu"
        mode="horizontal"
        router="true"
        @select="handleSelect"
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="article">通知</el-menu-item>
        <el-menu-item index="">
          <a href="https://cy.ncss.cn/redactivity/index" target="_blank">
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
              >选项4</template
            >
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item v-show="true" class="login" index="5">登陆</el-menu-item>
      </el-menu>
    </div>

    <!-- body -->
    <div class="body">
      <nuxt />
      <div style="height: 150px;"></div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <el-image
        :src="logo"
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
          京ICP备 00000000号
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import headImage from '~/static/pagehead.jpg'
import logo from '~/static/favicon.png'

export default {
  components: {},
  data() {
    return {
      headImage: headImage,
      activeIndex: '/',
      logo
    }
  },
  computed: {},
  watch: {},
  async created() {},
  async mounted() {},
  methods: {
    handleSelect(index) {
      // eslint-disable-next-line no-console
      console.log('点击了:', index)
    }
  }
}
</script>
