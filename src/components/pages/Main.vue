<template>
  <div class="container">
    <div class="main-div">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <van-tabbar v-model="active" @change="changeTabBar(active)">
      <van-tabbar-item icon="shop">首页</van-tabbar-item>
      <van-tabbar-item icon="records">分类</van-tabbar-item>
      <van-tabbar-item icon="cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact">会员中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 0,
        nowPath: ''
      }
    },
    created () {
      this.changeTabBarActive()
    },
    updated () {
      this.changeTabBarActive()
    },
    methods: {
      changeTabBarActive() {
        this.nowPath = this.$route.path
        if(this.nowPath=='/ShoppingMall'){
          this.active = 0
        }else if(this.nowPath=='/CategoryList'){
          this.active = 1
        } else if(this.nowPath=='/Cart'){
          this.active = 2
        } else if(this.nowPath=='/Member'){
          this.active = 3
        }
      },
      changeTabBar(active) {
        switch(active){
          case 0:
            this.$router.push({name: 'ShoppingMall'})
            break;
          case 1:
            this.$router.push({name: 'CategoryList'})
            break;
          case 2:
            this.$router.push({name: 'Cart'})
            break;
          case 3:
            this.$router.push({name: 'Member'})
            break;
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .container {
    .main-div {
      padding-bottom: 50px;
    }
    .van-tabbar {
      max-width: 1024px;
      margin: auto;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>