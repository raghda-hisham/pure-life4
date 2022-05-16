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
      <div
        v-for="(item, i) in items"
        :key="i"
        class="menu-item sub-menu-item d-flex flex-column"
      >
        <div class="itemName" :class="{ hide: item.name == null }">
          {{ item.name }}
        </div>
        <div class="d-flex flex-row align-items-center">
          <i class="fa-solid fa-angle-left"></i>
          <router-link :to="`${item.id}`">{{ item.title }}</router-link>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "dropdownApp",
  props: ["title", "items", "name"],
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>
.sub-menu .menu-item div {
  margin-right: 19px !important;
}
.sub-menu .menu-item div a {
  font-size: 16px !important;
  margin-right: 5px;
  cursor: pointer;
}
.sub-menu .menu-item.active,
.sub-menu .menu-item:hover {
  border: 0px !important;
}
.fa-angle-down {
  margin-right: 10px;
}
.fa-angle-left {
  margin-right: 10px !important;
  font-size: 12px;
}
.titleColor {
  color: #760000 !important;
}
.menu-item .itemName {
  color: black !important;
  text-align: right;
  font-size: 16px;
  padding: 10px;
}
.hide {
  padding: 0px !important;
  visibility: hidden !important;
}
</style>
