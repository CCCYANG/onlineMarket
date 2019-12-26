<template>
  <div class="searchBar">
    <van-row>
      <van-col span="4" class="iconWrapper">
        <img :src="locationIcon" />
      </van-col>
      <van-col span="16">
        <input type="text" class="searchInput" />
      </van-col>
      <van-col span="4" class='text-c'>
        <div class="searchBtn">{{searchBtnText}}</div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    props: {
      searchBtnText: {
        type: String,
        default: () => '搜索'
      }
    },
    data() {
      return {
        locationIcon: require("../../assets/location.png")
      };
    }
  };
</script>

<style lang="scss" scoped>
@import '../../styles/base.scss';
@import '../../styles/common.scss';
.searchBar {
  padding: .6rem 0;
  background-color: $VantBlue;
  line-height: 1.5rem;
  overflow: hidden;
}
.searchInput {
  width: 100%;
  height: 1.3rem;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid #fff !important;
  background-color: $VantBlue;
  color: #fff;
}
.iconWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  >img {
    height: 1.5rem;
  }
}
.searchBtn {
  color: #fff;
  font-size: 0.65rem;
}
</style>