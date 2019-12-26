<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  max-width: 1024px;
  width: 100%;
  height: 100%;
  margin: auto;
  font-family: "PingFang SC", "Helvetica Neue", "Hiragino Sans GB", Helvetica, "Microsoft YaHei", Arial;
  color: #444;
  background-color: #F2F2F2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  position: relative;
}
</style>
