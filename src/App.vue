<style lang="less">
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  img {
    flex: 1;
    width: 100%;
  }
}
.ivu-layout-header,
.nav-bar {
  background-color: rgb(241, 238, 233) !important;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
  color: white;
}
.layout-nav {
  width: 600px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
</style>
<template>
  <div class="layout">
    <img :src="imgHead" alt="header image here">
    <Layout>
      <!-- Header image here -->
      <Header>
        <Menu mode="horizontal" :theme="theme1" active-name="1" class="nav-bar">
          <div class="layout-logo">Logo</div>
          <div class="layout-nav">
            <MenuItem name="1" to="/">
              <Icon type="ios-navigate"></Icon>主页
            </MenuItem>

            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>项目简介
              </template>
              <MenuGroup title="使用">
                <MenuItem name="3-1" to="/about">新增和启动</MenuItem>
                <MenuItem name="3-2" to="/about">活跃分析</MenuItem>
                <MenuItem name="3-3" to="/about">时段分析</MenuItem>
              </MenuGroup>
              <MenuGroup title="留存">
                <MenuItem name="3-4" to="/about">用户留存</MenuItem>
                <MenuItem name="3-5" to="/about">流失用户</MenuItem>
              </MenuGroup>
            </Submenu>

            <MenuItem name="3" to="/about">
              <Icon type="ios-analytics"></Icon>通知公告
            </MenuItem>

            <MenuItem name="4" to="/about">
              <Icon type="ios-paper"></Icon>新闻报道
            </MenuItem>

            <MenuItem name="5" to="/about">
              <Icon type="ios-paper"></Icon>登陆
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout :style="{padding: '0 50px'}">
        <!-- <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>-->
        <Content :style="{padding: '24px 50px', minHeight: '750px', background: '#fff'}">
          <router-view/>
          <!-- <Layout>
            <Sider hide-trigger :style="{background: '#fff'}">
              <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                <Submenu name="1">
                  <template slot="title">
                    <Icon type="ios-navigate"></Icon>Item 1
                  </template>
                  <MenuItem name="1-1">Option 1</MenuItem>
                  <MenuItem name="1-2">Option 2</MenuItem>
                  <MenuItem name="1-3">Option 3</MenuItem>
                </Submenu>
                <Submenu name="2">
                  <template slot="title">
                    <Icon type="ios-keypad"></Icon>Item 2
                  </template>
                  <MenuItem name="2-1">Option 1</MenuItem>
                  <MenuItem name="2-2">Option 2</MenuItem>
                </Submenu>
                <Submenu name="3">
                  <template slot="title">
                    <Icon type="ios-analytics"></Icon>Item 3
                  </template>
                  <MenuItem name="3-1">Option 1</MenuItem>
                  <MenuItem name="3-2">Option 2</MenuItem>
                </Submenu>
              </Menu>
            </Sider>
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">Content</Content>
          </Layout>-->
        </Content>
      </Layout>
      <Footer class="layout-footer-center">2019 &copy; 青年红色筑梦</Footer>
    </Layout>
  </div>
</template>

<script>
// @ is an alias to /src
import imgHead from "@/static/images/pagehead.jpg";

export default {
  name: "home",
  data() {
    return {
      theme1: "light",
      imgHead
    };
  },
  components: {}
};
</script>
