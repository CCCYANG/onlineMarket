<template>
  <div>
    <fixed-com><search-com /></fixed-com>
    <div class="swiper-area">
      <van-swipe :autoplay="2000">
        <van-swipe-item v-for="( banner ,index) in bannerList" :key="index">
          <img :src="banner.image" width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="type-bar">
      <div v-for="(cate,index) in categoryList" :key="index">
        <img v-lazy="cate.image" width="90%" />
        <div>{{cate.mallCategoryName}}</div>
      </div>
    </div>
    <div class="recommend-area">
      <div class="recommend-title">商品推荐</div>
      <div class="recommend-body">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in recommendGoods " :key="index">
            <div class="recommend-item">
              <img :src="item.image" width="80%" />
              <div>{{item.goodsName}}</div>
              <div>￥{{item.price | moneyFilter}}(￥{{item.mallPrice | moneyFilter}})</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <floor-com :floorData="floor1" :floorTitle="floorName.floor1"></floor-com>
    <floor-com :floorData="floor2" :floorTitle="floorName.floor2"></floor-com>
    <floor-com :floorData="floor3" :floorTitle="floorName.floor3"></floor-com>
    <div class="hot-area">
      <div class="hot-title">热卖商品</div>
      <div class="hot-goods">
        <van-list :finished="hotGoods.length>0">
          <van-row gutter="20">
            <van-col span="12" v-for="(item , index) in hotGoods" :key="index">
              <goods-info
                :goodsId="item.goodsId"
                :goodsImage="item.image"
                :goodsName="item.name"
                :goodsPrice="item.price"
              ></goods-info>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
    <div class="welcome text-c">~~欢迎来到super商城~~</div>
  </div>
</template>

<script>
import fixedCom from '../common/fixed';
import searchCom from "../shoppingMall/search";
import {
  bannerList,
  categoryList,
  recommendGoods,
  floorName,
  floor1,
  floor2,
  floor3,
  hotGoods
} from "../../service/mockData";

import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { toMoney } from "../../utils/filter";

import floorCom from "../shoppingMall/floor";
import goodsInfo from "../shoppingMall/goodsInfo";

export default {
  data() {
    return {
      bannerList,
      categoryList,
      recommendGoods,
      swiperOption: {
        slidesPerView: 3,
        loop: true,
        //滑动速度
        speed: 1000
      },
      floorName,
      floor1,
      floor2,
      floor3,
      hotGoods
    };
  },
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    }
  },
  components: {
    fixedCom,
    searchCom,
    swiper,
    swiperSlide,
    floorCom,
    goodsInfo
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../../styles/base.scss";
@import '../../styles/common.scss';
.swiper-area {
  clear: both;
  max-height: 15rem;
  overflow: hidden;
}

.type-bar {
  background-color: #fff;
  margin: 0 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  > div {
    padding: 0.3rem;
    font-size: 0.75rem;
    text-align: center;
    flex: 1;
  }
}

.recommend-area {
  background-color: #fff;
  margin-top: 0.3rem;
}
.recommend-title {
  border-bottom: 1px solid #eee;
  font-size: 1rem;
  padding: 0.4rem;
  color: $VantBlue;
}
.recommend-body {
  border-bottom: 1px solid #eee;
}
.recommend-item {
  width: 99%;
  border-right: 1px solid #eee;
  font-size: 12px;
  text-align: center;
}

.hot-area {
  text-align: center;
  font-size: 14px;
  line-height: 1.8rem;
}
.hot-title {
  margin-top: .4rem;
  font-size: 1rem;
  color: $VantBlue;
  background-color: #fff;
}
.hot-goods {
  height: 130rem;
  overflow: hidden;
  background-color: #fff;
}

.welcome {
  padding: .8rem 0;
  font-size: .8rem;
}
</style>