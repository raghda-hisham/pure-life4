<template>
  <div class="home">
    <div class="nav-container">
      <NavApp @changeWidth="sideBarWidth" />
      <side-bar-app
        v-if="!mobile"
        :showWidth="showWidth"
        :class="{ toggleWidth: !showWidth }"
      ></side-bar-app>
    </div>
    <div class="component-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavApp from "@/components/NavApp.vue";
import SideBarApp from "@/components/sideBarApp.vue";
export default {
  name: "homePage",
  components: {
    NavApp,
    SideBarApp,
  },

  props: ["changeWidth"],
  data() {
    return {
      showWidth: true,
      mobile: null,
      window: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    sideBarWidth(showWidth) {
      this.showWidth = showWidth;
    },

    checkScreen() {
      this.window = window.innerWidth;

      if (this.window <= 1000) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      return;
    },
  },
  mounted() {
    let user = localStorage.getItem("token");
    if (!user) {
      this.$router.push("/login");
    }
  },
};
</script>
<style></style>
