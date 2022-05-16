<template>
  <div class="nav-sideBar-continer w-100">
    <div
      class="main-header sticky side-header nav nav-item p-0 m-0"
      :style="[showIcon ? { width: '85%' } : { width: '96%' }]"
    >
      <nav
        class="navbar container-fluid navbar-expand-lg navbar-light p-0"
        :style="[search ? { display: 'flex' } : { display: 'none' }]"
      >
        <div
          class="collapse navbar-collapse w-100 d-flex justify-content-between row"
          id="navbarSupportedContent "
        >
          <!---------------------------------right-side---------------------------------------------->
          <div
            class="right-side d-flex justify-content-around align-items-center col col-lg-8"
          >
            <button @click="toggleIcon" class="iconBtn" v-if="!mobile">
              <i class="fa-solid fa-bars" v-if="showIcon"></i>
              <i class="fa-solid fa-x" v-else></i>
            </button>
            <button
              @click="toggleMobileBar"
              class="iconBtn bg-dark"
              v-if="mobile"
            >
              <i class="fa-solid fa-bars"></i>
            </button>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2 form-inline my-2 my-lg-0"
                type="search"
                placeholder="&#xf002; بحث..."
                aria-label="Search"
              />
            </form>
          </div>
          <!--../right-side-->

          <!-----------------searchIcon------------>
          <ul
            class="navbar-nav mr-auto d-flex justify-content-around align-items-center col col-lg-2"
          >
            <li class="searchIcon" @click="searchIcon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </li>
            <!--./searchIcon-->

            <!----------------for full screen------->
            <li
              class="nav-item full-screen fullscreen-button"
              @click="fullscreen"
              v-if="showFSButton"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="header-icon-svgs"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                ></path>
              </svg>
            </li>
            <!--./for full screen-->

            <!----------------profile-img----------->
            <li class="nav-item active nav-item-profile">
              <router-link class="profile-img" to="profile"
                ><img src="../assets/login.jpg"
              /></router-link>

              <div class="list-group profile-dropDown">
                <router-link
                  to="profile"
                  class="list-group-item list-group-item-action"
                  >profile</router-link
                >
                <router-link
                  to="/login"
                  class="list-group-item list-group-item-action list-group-item-secondary"
                  >logout</router-link
                >
              </div>
            </li>
            <!--./profile-img-->
          </ul>
          <!--./navbar-nav-->
        </div>
        <!--./navbar-collapse-->
      </nav>
      <!--./navbar-->

      <!---------------search-in-responsive--------------->
      <div
        class="responsive-search w-100"
        :style="[search ? { display: 'none' } : { display: 'flex' }]"
      >
        <input
          class=""
          type="search"
          placeholder=" بحث  ....."
          aria-label="Search"
        />
        <i class="fa-solid fa-x p-4" v-on:click="search = !Search"></i>
      </div>
      <!--./responsivr-search-->
    </div>
    <!--./main-header-->

    <!----------------------------------------------side bar in responsive--------------------------------->
    <div class="sidebar" v-if="MobileBar">
      <side-bar-app :class="{ mobileWidth: mobile }">
        <i class="fa-solid fa-x close" @click="toggleMobileBar"></i>
      </side-bar-app>
    </div>
    <!--./sidebar-->
  </div>
</template>

<script>
import sideBarApp from "./sideBarApp.vue";
export default {
  components: { sideBarApp },
  name: "NavApp",
  props: [],
  data() {
    return {
      showIcon: "true",
      MobileBar: null,
      mainColor: "#ecf0fa",
      width: "85%",
      search: "false",
      window: null,
      mobile: null,
    };
  },
  created() {
    if (document.fullscreenEnabled) this.showFSButton = true;
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
    // document.onclick=this.toggleMobileBar;
  },
  methods: {
    // to toggle the menu and x
    toggleIcon() {
      this.showIcon = !this.showIcon;
      this.$emit("changeWidth", this.showIcon);
    },
    // to toggle the mobile mode
    toggleMobileBar() {
      this.MobileBar = !this.MobileBar;
    },
    // for search in responsive
    searchIcon() {
      this.search = !this.search;
    },
    // for fullscreen icon
    fullscreen() {
      document.documentElement.requestFullscreen();
    },
    // to check the width of the screen
    checkScreen() {
      this.window = window.innerWidth;

      if (this.window <= 1000) {
        this.mobile = true;

        return;
      }
      this.mobile = false;
      this.MobileBar = false;
      return;
    },
    //logout function
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
html,
*:fullscreen,
*:-webkit-full-screen,
*:-moz-full-screen {
  background-color: #ecf0fa !important;
}
.nav-sideBar-continer {
  height: 80px;
  display: flex;
  justify-content: flex-end;
}
.main-header {
  width: 100%;
  border-bottom: 1px solid #dee4ec;
  box-shadow: 5px 7px 26px -5px #cdd4e7;
}
.container-fluid {
  background: white;
  height: 80px !important;
}
.row {
  --bs-gutter-x: 0;
}
.navbar-nav {
  padding: 8px 0;
}
.nav-item-profile {
  position: relative;
  width: 80px;
  height: 80px;
  align-items: center;
  display: flex;
  justify-content: center;
}
.profile-dropDown {
  position: absolute;
  left: 60%;
  transform: translate(-50%, 100%);
  width: 130px;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: none;
  visibility: none;
}
.profile-dropDown a {
  border: none !important;
}
.nav-item-profile:hover .profile-dropDown {
  display: block;
  visibility: visible;
  z-index: 2;
}
.navbar-nav .nav-item .profile-img img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background: white;
}
svg,
path,
i {
  color: gray;
}
svg,
path,
.fa-magnifying-glass {
  width: 20px;
  margin: 5px;
  height: 20px;
  cursor: pointer;
}
.pulse {
  background: green;
  width: 10px;
  height: 10px;
  right: 7px;
  position: absolute;
  border-radius: 50%;
}
.fa-magnifying-glass {
  display: none;
}
.form-inline .form-control {
  width: 430px;
  border-radius: 50px;
  height: 40px;
  background: var(--mainColor);
}
input {
  font-family: FontAwesome;
  border: 0;
  outline: 0;
}
.iconBtn {
  background-color: transparent;
  border: 0;
}
.fa-bars,
.fa-x {
  font-size: 25px;
  cursor: pointer;
}
.responsive-search {
  display: none;
  width: 100%;
  background: white;
}
.responsive-search input {
  width: 80%;
}
.responsive-search i {
  width: 20%;
}

@media (max-width: 1000px) {
  .main-header {
    width: 100% !important;
  }
  .responsive-search {
    top: 0;
    position: fixed;
    width: 100%;
  }
  .form-control {
    display: none;
  }
  .fa-magnifying-glass {
    display: block;
  }
  .navbar-nav {
    display: flex;
    flex-direction: row;
  }

  .side {
    width: 30%;
  }
  .mobileWidth:hover {
    width: 30% !important;
  }
  .close {
    position: absolute;
    top: 20px;
    left: 10%;
    font-size: 20px;
    z-index: 102;
  }
}
</style>
