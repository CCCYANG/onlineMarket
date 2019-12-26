<template>
  <div>
    <div class="floor">
      <div class="floor-title">{{floorTitle}}</div>
      <div class="floor-anomaly">
        <div class="floor-one">
          <img :src="floorData[0].image" width="100%" />
        </div>
        <div>
          <div class="floor-two">
            <img :src="floorData[1].image" width="100%" />
          </div>
          <div>
            <img :src="floorData[2].image" width="100%" />
          </div>
        </div>
      </div>
      <div class="floor-rule">
        <div v-for="(item, index) in floorData.slice(3, 5)" :key="index">
          <img :src="item.image" width="100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    floorData: {
      type: Array,
      required: true
    },
    floorTitle: {
      type: String,
      required: true
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/base.scss';
.floor-title {
  margin-top: .3rem;
  text-align: center;
  font-size: 14px;
  color: $VantBlue;
  height: 1.8rem;
  line-height: 1.8rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
.floor-anomaly {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
.floor-anomaly div {
  width: 10rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.floor-one {
  border-right: 1px solid #ddd;
}
.floor-two {
  border-bottom: 1px solid #ddd;
}
.floor-rule {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
}
.floor-rule div {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 10rem;
  border-bottom: 1px solid #ddd;
}
.floor-rule div:nth-child(odd) {
  border-right: 1px solid #ddd;
}
</style>