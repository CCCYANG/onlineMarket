<template>
  <div ref="fixedContainer" :class="{fixed: isFixed}" :style="{top: offsetTop+'px'}">
    <slot></slot>
  </div>
</template>

<script>
  import _ from 'lodash'

  export default {
    data() {
      return {
        offsetTop: 0,
        isFixed: false,
        offsetHeight: 0
      }
    },
    mounted () {
      this.$nextTick(function(){
        this.offsetTop = this.$refs.fixedContainer.offsetTop;
        this.offsetHeight = this.$refs.fixedContainer.offsetHeight;
      });
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll: _.throttle(function(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > this.offsetTop) {
          this.isFixed = true
        } else {
          this.isFixed = false
        }
      }, 200)
    },
  }
</script>

<style lang="scss" scoped>
  .fixed {
    position: fixed;
    left: 0;
    width: 100%;
    z-index: 1000;
  }
  .show {
    display: block;
  }
  .hide {
    display: none
  }
</style>