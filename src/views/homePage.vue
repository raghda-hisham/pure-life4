<template>
  <div>
    <side-bar-app
      v-if="!mobile"
      :showWidth="showWidth"
      :class="{ toggleWidth: !showWidth }"
    ></side-bar-app>
    <NavApp @changeWidth="sideBarWidth" />
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
        console.log(this.window);
        return;
      }
      this.mobile = false;
      console.log(this.window);
      return;
    },
  },
};
</script>
