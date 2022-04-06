<template>
  <router-view></router-view>
</template>
<script>
export default {
  name: "app",
  components: {},
  props: [],
  data() {
    return {};
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: var(--mainColor);
}
</style>
