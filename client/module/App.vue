<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'app',
  deactivated(){
    this.$destroy(); //默认不做先不做keep-alive
  }
}
</script>

