<template>
  <div class="menu-item">
    <slot></slot>
    <a href="#" @click="isOpen = !isOpen" :class="{ titleColor: isOpen }">
      {{ title }}
      <i class="fa-solid fa-angle-down"></i>
    </a>
  </div>

  <transition name="fade" appear>
    <div class="sub-menu" v-if="isOpen">
      <div v-for="(item, i) in items" :key="i" class="menu-item sub-menu-item">
        <i class="fa-solid fa-angle-left"></i>
        <router-link v-for="route in routesComp" :key="route.path" :to="route.path">
          {{item.title}}
        </router-link>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "dropdownApp",
  props: ["title", "items"],
  data() {
    return {
      isOpen: false,
      routes: this.$router.options.routesComp
    };
  },
};
</script>

<style>
.sub-menu .menu-item {
  display: flex !important;
  align-items: center;
}
.sub-menu .menu-item i {
  margin-right: 10px;
}
.sub-menu .menu-item a {
  font-size: 16px !important;
  margin-right: 5px;
}
.sub-menu .menu-item.active,
.sub-menu .menu-item:hover {
  border: 0px !important;
}
.fa-angle-down {
  margin-right: 10px;
}
.fa-angle-left {
  margin-right: 25px !important;
  font-size: 12px;
}
.titleColor {
  color: #760000 !important;
}
</style>
