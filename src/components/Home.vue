<template>
  <div>
    <!-- 抽离为组件导入 -->
    <el-header class="header" height="100px">
      <h3>我的网站</h3>
      <p>Vue小模块之吹牛B功能</p>
    </el-header>
    <el-container style="min-height: calc(100vh - 100px);">
      <!-- aside也单独抽出 -->
      <el-aside width="200px">
        <el-row class="tac">
          <el-col :span="12">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#272626"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">门户首页</span>
              </el-menu-item>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-notebook-2"></i>
                  <span>应用服务</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">应用列表</el-menu-item>
                  <el-menu-item index="2-2">应用透视</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-set-up"></i>
                  <span>CI/CD</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1">发布统计</el-menu-item>
                  <el-menu-item index="3-2">构建记录</el-menu-item>
                  <el-menu-item index="3-3">容器编排</el-menu-item>
                  <el-menu-item index="3-4">容器发布</el-menu-item>
                  <el-menu-item index="3-5">容器灰度</el-menu-item>
                  <el-menu-item index="3-6">虚机发布</el-menu-item>
                  <el-menu-item index="3-7">APK发布</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-box"></i>
                  <span>工具箱</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="4-1">Consul加解密</el-menu-item>
                  <el-menu-item index="4-2">CDN刷新</el-menu-item>
                  <el-menu-item index="4-3">微服务大盘</el-menu-item>
                  <el-menu-item index="4-4">应用伸缩</el-menu-item>
                  <el-menu-item index="4-5">ElasticSearch</el-menu-item>
                  <el-menu-item index="4-6">Mysql慢日志</el-menu-item>
                  <el-menu-item index="4-7">阿里云访问控制</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-cloudy"></i>
                  <span>Kubernetes</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="5-1">Deployments</el-menu-item>
                  <el-menu-item index="5-2">Pods</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="6">
                <template slot="title">
                  <i class="el-icon-money"></i>
                  <span>费用分析</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="6-1">费用报表</el-menu-item>
                  <el-menu-item index="6-2">新购查询</el-menu-item>
                  <el-menu-item index="6-3">业务线费用</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="7">
                <template slot="title">
                  <i class="el-icon-user"></i>
                  <span>账号管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="7-1">LDAP</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="8">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航二</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="8-1">选项1</el-menu-item>
                  <el-menu-item index="8-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="8-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="8-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="8-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="9" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="10">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
    </el-container>
  </div>
</template>

<script>

export default {
  methods: {
      handleOpen(key, keyPath) {
          console.log(key, keyPath);
          },
      handleClose(key, keyPath) {
          console.log(key, keyPath);
          }
      }
  }
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
  }
  .header{
    background-color: #272626;
    color: white;
    overflow: hidden;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu-item:hover{
    background-color: rgb(71, 75, 78) !important;
  }
  .el-submenu__title:hover{
    background-color: rgb(71, 75, 78) !important;
  }
  .el-aside {
    background-color: #272626;
    overflow: hidden;
  }
  .el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  }
  .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  height: 20vh;
  }
  .el-submenu .el-menu-item {
    padding-left: 60px;
  }
</style>