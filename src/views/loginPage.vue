<template>
  <div class="container-fluid">
    <div class="row h-100">
      <!-- The content half -->
      <div class="col-md-6 col-lg-6 col-xl-5 bg-white">
        <div class="login d-flex align-items-center">
          <!-- Demo content-->
          <div class="container2 p-0">
            <div class="row">
              <div class="col-md-10 col-lg-10 col-xl-9 mx-auto">
                <div class="card-sigin text-right">
                  <div class="mb-5 d-flex">
                    <a href="http://127.0.0.1:8000/Home"
                      ><img
                        src="../../public/favicon.png"
                        class="sign-favicon ht-100 w-25"
                        alt="logo"
                    /></a>
                  </div>
                  <div class="card-sigin">
                    <div class="main-signup-header">
                      <h2 class="">مرحبا بك</h2>
                      <h5 class="font-weight-semibold mb-4">تسجيل الدخول</h5>
                      <form
                        method="POST"
                        action="http://127.0.0.1:8000/login"
                        @submit.prevent="handleSubmit"
                      >
                        <input
                          type="hidden"
                          name="_token"
                          value="gqkzoKWIiLWsCyQpkgqZA4YWA6sQGBMi2OqIJmvz"
                        />
                        <div class="form-group">
                          <label>البريد الالكتروني</label>
                          <input
                            id="email"
                            type="email"
                            class="form-control my-2"
                            name="email"
                            v-model="posts.email"
                            required=""
                            autocomplete="email"
                            autofocus=""
                          />
                        </div>

                        <h6 class="errorMsg" v-if="posts.massege">
                          يرجى إدخال البريد الالكتروني وكلمة السر بشكل صحيح
                        </h6>

                        <div class="form-group">
                          <label>كلمة المرور</label>
                          <input
                            id="password"
                            type="password"
                            class="form-control my-2"
                            name="password"
                            v-model="posts.password"
                            required=""
                            autocomplete="current-password"
                          />
                          <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name="remember"
                                  id="remember"
                                />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                <label class="form-check-label" for="remember">
                                  تذكرني
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          type="submit"
                          class="btn btn-main-primary btn-block"
                        >
                          تسجيل الدخول
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End -->
        </div>
      </div>
      <!-- End -->

      <!-- The image half -->
      <div
        class="col-md-6 col-lg-6 col-xl-7 d-none d-md-flex bg-primary-transparent p-0 m-0"
      >
        <div class="row w-100 mx-auto text-center">
          <div class="col-md-12 col-lg-12 col-xl-12 mx-auto w-100 p-0 h-100">
            <img
              src="../assets/login.jpg"
              class="my-auto w-100 h-100"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "loginPage",
  methods: {
    handleSubmit() {
      axios
        .post("http://127.0.0.1:8000/api/login", this.posts)
        .then((res) => {
          this.$router.push("/");
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("name", res.data.data.name);
          localStorage.setItem("email", res.data.data.email);

          this.posts.massege = false;
        })
        .catch(() => {
          this.posts.massege = true;
        });
    },
  },
  mounted() {
    let user = localStorage.getItem("token");
    if (user) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      posts: {
        email: null,
        password: null,
        massege: false,
      },
    };
  },
};
</script>

<style scoped>
.container-fluid {
  height: 100vh !important;
}
.card-sigin {
  margin-top: 80px !important;
  text-align: justify;
}

.card-sigin .main-signup-header h2 {
  color: #760000;
  font-weight: 500;
}
.form-group {
  margin-bottom: 1rem;
}
.form-check {
  position: relative;
  display: block;
  padding-left: 1.25rem;
}
.main-signup-header label {
  color: #a5a0b1;
}
.btn-main-primary {
  color: #fff !important;
  background-color: #760000 !important;
  border-color: #963f3f !important;
}
.btn-block {
  display: block;
  width: 100%;
}
.form-check-input {
  padding: 0 !important;
  float: none !important;
}
.errorMsg {
  font-size: 16px;
  color: red;
}
</style>
