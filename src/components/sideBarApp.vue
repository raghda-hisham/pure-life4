<template>
  <transition name="fade" appear>
    <aside class="app-sidebar side sidenav sidebar-scroll" id="mySidenav">
      <!-------------x icon in MobileSideBar--------->
      <slot></slot>
      <!---------------user-logo--------------------->
      <div class="desktop-logo logo-light">
        <img
          alt="user-img"
          class="avatar avatar-xl brround"
          src="../../src/assets/login.jpg"
        />
        <span class="avatar-status profile-status bg-green"></span>
      </div>
      <!--./user-logo-->
      <!---------------user-info--------------------->
      <div class="user-info">
        <h4 class="font-weight-semibold mt-3 mb-0">{{ name }}</h4>
        <span class="mb-0 text-muted" :class="{ toggleFont: !showWidth }">{{
          email
        }}</span>
      </div>
      <!--./user-info-->
      <!----------------list------------------------->
      <div
        class="list-menu-item"
        :style="[showWidth ? { display: 'block' } : { display: 'none' }]"
      >
        <!-----------الرئيسية--------->
        <div class="menu-item">
          <a class="side-menu__item" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="side-menu__icon"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z"
                opacity=".3"
              />
              <path
                d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z"
              />
            </svg>
            <router-link to="home/" class="side-menu__label"
              >الرئيسية</router-link
            >
          </a>
        </div>

        <div class="side-menu__label"><span>النظام</span></div>
        <dropdownApp title="المخازن" :items="store">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="side-menu__icon"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M3.31 11l2.2 8.01L18.5 19l2.2-8H3.31zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
              opacity=".3"
            />
            <path
              d="M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM12 4.8L14.8 9H9.2L12 4.8zM18.5 19l-12.99.01L3.31 11H20.7l-2.2 8zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
            />
          </svg>
        </dropdownApp>

        <dropdownApp title="الموظفين" :items="empolyee">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="side-menu__icon"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M4 12c0 4.08 3.06 7.44 7 7.93V4.07C7.05 4.56 4 7.92 4 12z"
              opacity=".3"
            />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1z"
            />
          </svg>
        </dropdownApp>

        <dropdownApp title="العملاء" :items="clients">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="side-menu__icon"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M6.26 9L12 13.47 17.74 9 12 4.53z" opacity=".3" />
            <path
              d="M19.37 12.8l-7.38 5.74-7.37-5.73L3 14.07l9 7 9-7zM12 2L3 9l1.63 1.27L12 16l7.36-5.73L21 9l-9-7zm0 11.47L6.26 9 12 4.53 17.74 9 12 13.47z"
            />
          </svg>
        </dropdownApp>

        <dropdownApp title="المورديين" :items="suppliers">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="side-menu__icon"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M6.26 9L12 13.47 17.74 9 12 4.53z" opacity=".3" />
            <path
              d="M19.37 12.8l-7.38 5.74-7.37-5.73L3 14.07l9 7 9-7zM12 2L3 9l1.63 1.27L12 16l7.36-5.73L21 9l-9-7zm0 11.47L6.26 9 12 4.53 17.74 9 12 13.47z"
            />
          </svg>
        </dropdownApp>

        <dropdownApp title="الأصول" :items="asset">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="side-menu__icon"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M6.26 9L12 13.47 17.74 9 12 4.53z" opacity=".3" />
            <path
              d="M19.37 12.8l-7.38 5.74-7.37-5.73L3 14.07l9 7 9-7zM12 2L3 9l1.63 1.27L12 16l7.36-5.73L21 9l-9-7zm0 11.47L6.26 9 12 4.53 17.74 9 12 13.47z"
            />
          </svg>
        </dropdownApp>

        <dropdownApp title="الشئون المالية" :items="money">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="side-menu__icon"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M6.26 9L12 13.47 17.74 9 12 4.53z" opacity=".3" />
            <path
              d="M19.37 12.8l-7.38 5.74-7.37-5.73L3 14.07l9 7 9-7zM12 2L3 9l1.63 1.27L12 16l7.36-5.73L21 9l-9-7zm0 11.47L6.26 9 12 4.53 17.74 9 12 13.47z"
            />
          </svg>
        </dropdownApp>

        <div class="side-menu__label"><span>الإعدادات</span></div>
        <dropdownApp title="المستخدميين" :items="users">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="side-menu__icon"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M13 4H6v16h12V9h-5V4zm3 14H8v-2h8v2zm0-6v2H8v-2h8z"
              opacity=".3"
            />
            <path
              d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"
            />
          </svg>
        </dropdownApp>

        <dropdownApp title="الإعدادات" :items="settings">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="side-menu__icon"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M5 5h15v3H5zm12 5h3v9h-3zm-7 0h5v9h-5zm-5 0h3v9H5z"
              opacity=".3"
            />
            <path
              d="M20 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 19H5v-9h3v9zm7 0h-5v-9h5v9zm5 0h-3v-9h3v9zm0-11H5V5h15v3z"
            />
          </svg>
        </dropdownApp>
      </div>
    </aside>
  </transition>
</template>

<script>
import dropdownApp from "./dropdownApp";
export default {
  name: "sidebarApp",
  props: ["showWidth"],
  components: {
    dropdownApp,
  },
  data() {
    return {
      mobileView: false,
      name: "",
      email: "",
      store: [
        {
          title: "الاصناف",
          link: "#",
          id: 0,
        },
        {
          title: "أرصدة المخازن",
          link: "#",
          id: 1,
        },
        {
          title: "إتلافات",
          link: "#",
          id: 2,
        },
        {
          title: "نواقص",
          link: "#",
          id: 3,
        },
      ],
      empolyee: [
        {
          name: "البيانات الأساسية",
          title: "الموظفين",
          link: "#",
          id: 4,
        },
        {
          title: "الموظفين",
          link: "#",
          id: 5,
        },
        {
          title: "الموظفين",
          link: "#",
          id: 6,
        },
        {
          name: "العملياات",
          title: " تسجيل الغياب",
          link: "#",
          id: 7,
        },
        {
          title: "سلف المواظفين",
          link: "#",
          id: 8,
        },
        {
          title: "الغياب",
          link: "#",
          id: 9,
        },
      ],
      empolyeeMain: [
        {
          title: "البيانات الأساسية",
        },
        {
          title: " العمليات ",
        },
        {
          title: "التقارير",
        },
      ],
      clients: [
        {
          title: "العملاء",
          link: "#",
          id: 10,
        },
        {
          title: " الفواتير ",
          link: "#",
          id: 11,
        },
        {
          title: "تحصيلات العملاء",
          link: "#",
          id: 12,
        },
      ],
      suppliers: [
        {
          title: "المورديين",
          link: "#",
          id: 13,
        },
        {
          title: "طلبات الشراء",
          link: "#",
          id: 14,
        },
        {
          title: "فواتير المورديين",
          link: "#",
          id: 15,
        },
        {
          title: "مردود مشتريات",
          link: "#",
          id: 16,
        },
        {
          title: "سداد المورديين",
          link: "#",
          id: 17,
        },
      ],
      asset: [
        {
          title: "المورديين",
          link: "#",
          id: 18,
        },
        {
          title: "طلبات الشراء",
          link: "#",
          id: 19,
        },
        {
          title: "فواتير المورديين",
          link: "#",
          id: 20,
        },
        {
          title: "مردود مشتريات",
          link: "#",
          id: 21,
        },
        {
          title: "سداد المورديين",
          link: "#",
          id: 22,
        },
      ],
      money: [
        {
          title: "المورديين",
          link: "#",
          id: 23,
        },
        {
          title: "طلبات الشراء",
          link: "#",
          id: 24,
        },
        {
          title: "فواتير المورديين",
          link: "#",
          id: 25,
        },
        {
          title: "مردود مشتريات",
          link: "#",
          id: 26,
        },
        {
          title: "سداد المورديين",
          link: "#",
          id: 27,
        },
      ],
      users: [
        {
          title: "قائمة المستخدميين",
          link: "#",
          id: 28,
        },
        {
          title: " صلاحيات المستخدمين",
          link: "#",
          id: 29,
        },
      ],
      settings: [
        {
          title: "السنة المالية",
          link: "#",
          id: 30,
        },
        {
          title: " نسبة التأمينات",
          link: "#",
          id: 31,
        },
      ],
    };
  },

  methods: {
    handleView() {
      this.mobileView = window.innerWidth < 1000;
      //  alert(this.mobileView);
      return this.mobileView;
    },
  },
  created() {
    this.name = localStorage.getItem("name");
    this.email = localStorage.getItem("email");
  },
};
</script>

<style>
.side {
  width: 15%;
  height: 100%;
  background: white;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  position: fixed;
  padding-top: 20px;
  overflow-x: hidden;
  box-shadow: 0px 8px 14.72px 1.28px rgb(229 228 230 / 50%);
  border-right: 1px solid #e3e3e3;
  -webkit-transition: width 0.3s cubic-bezier(0, 0, 0.2, 1);
  transition: width 0.8s cubic-bezier(0, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
}
.side:hover {
  width: 16% !important;
}
.side:hover .list-menu-item {
  display: block !important;
}
.desktop-logo img {
  border: 2px solid #c9d2e8;
  box-shadow: 0px 5px 5px 0px rgb(44 44 44 / 20%);
  padding: 3px;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  margin-top: 20px;
}
.side .user-info {
  margin-bottom: 20px;
}
.side-menu__label {
  font-size: 20px;
  font-weight: 900;
  text-align: start;
  color: #818181;
  margin-top: 10px;
}
.side-menu__label span {
  margin: 10px 20px 0px;
  color: black;
}
.side .list-menu-item .menu-item {
  font-size: 20px !important;
  color: #a8a8a8;
  font-weight: 600;
  -webkit-transition: border-left-color 0.3s ease, background-color 0.3s ease;
  transition: border-left-color 0.3s ease, background-color 0.3s ease;
  display: flex;
}
svg {
  margin: 0 10px;
}
.side .list-menu-item .menu-item a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  color: #818181;
  display: flex !important;
  align-items: center;
}
.menu-item .side-menu__icon {
  width: 20px;
}
.side .list-menu-item .menu-item.active,
.side .list-menu-item .menu-item:hover,
.side-menu .side-menu__label:active,
.side-menu .side-menu__icon:hover {
  color: #760000 !important;
  border-right: 2px solid #760000;
  fill: #760000 !important;
}
a:hover,
a:active,
.side-menu__item:hover span .side-menu__item:active span {
  fill: #760000 !important;
  color: #760000 !important;
}

.side .list-menu-item .menu-item a {
  color: inherit;
  text-decoration: none;
}
.toggleWidth {
  width: 8%;
}
.toggleFont {
  font-size: 12px;
}
@media (max-width: 1000px) {
  .side {
    width: 20%;
  }
  .list-menu-item {
    display: block !important;
  }
}
</style>
