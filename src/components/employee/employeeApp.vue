<template>
  <div class="container h-100">
    <h3 class="component-title">الموظفيين</h3>
    <div class="header">
      <div class="filter-search d-flex justify-content-between mb-1">
        <!-- <div>
          <button class="btn-filter">
            <i class="fas fa-filter"></i> filter
          </button>
        </div> -->
        <button class="btn add-employee" v-on:click="toggleBtn">
          إضافة موظف
        </button>
      </div>
      <div class="mb-3 d-flex justify-content-between mt-3">
        <div class="total-num">{{ tot_num }}</div>
        <input
          type="search"
          placeholder="search"
          v-model="userFilter"
          v-on:keyup="search"
        />
      </div>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col" class="header">
            #
            <ul class="dropDown">
              <li v-on:click="LowToHigh(index)">الاقل الى الاعلى</li>
              <li v-on:click="HighToLow">الاعلى الى الاقل</li>
            </ul>
          </th>
          <th scope="col" class="header">
            name
            <i class="fa-solid fa-sort"></i>
            <ul class="dropDown">
              <li v-on:click="LowToHighName()" defaultSort="desc">
                الاقل الى الاعلى
              </li>
              <li v-on:click="HighToLowName">الاعلى الى الاقل</li>
            </ul>
          </th>
          <th scope="col" class="header">
            الوظيفة
            <i class="fa-solid fa-sort"></i>
            <ul class="dropDown">
              <li v-on:click="LowToHigh(index)">الاقل الى الاعلى</li>
              <li v-on:click="HighToLow">الاعلى الى الاقل</li>
            </ul>
          </th>
          <th scope="col" class="header">
            الموقع
            <i class="fa-solid fa-sort"></i>
            <ul class="dropDown">
              <li v-on:click="LowToHigh(index)">الاقل الى الاعلى</li>
              <li v-on:click="HighToLow">الاعلى الى الاقل</li>
            </ul>
          </th>
          <th scope="col" class="header">
            الوردية
            <i class="fa-solid fa-sort"></i>
          </th>
          <th scope="col" class="header">
            الراتب
            <i class="fa-solid fa-sort"></i>
            <ul class="dropDown">
              <li v-on:click="LowToHighSalary">الاقل الى الاعلى</li>
              <li v-on:click="HighToLowSalary">الاعلى الى الاقل</li>
            </ul>
          </th>
          <th scope="col" class="header">
            تاريخ التعيين
            <i class="fa-solid fa-sort"></i>
            <ul class="dropDown">
              <li v-on:click="LowToHighDate">الاقل الى الاعلى</li>
              <li v-on:click="HighToLowDate">الاعلى الى الاقل</li>
            </ul>
          </th>
          <th scope="col">الرقم القومي</th>
          <th scope="col">رقم الفيزا</th>
          <td>تعديل</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in search()" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.position.pos_value }}</td>
          <td>{{ user.location.name }}</td>
          <td>{{ user.shift }}</td>
          <td>{{ user.salary }}</td>
          <td>{{ user.hiring_date }}</td>
          <td>{{ user.personal_id }}</td>
          <td>{{ user.visa_num }}</td>
          <td>
            <button class="btn edit-btn" v-on:click="editBtn(user)">
              <i class="fas fa-edit"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <add-employee v-if="toggle" @submitBtn="toggleBtn" @post="showData" />
  <edit-employee
    @editSubmit="editBtn"
    @editPost="showData"
    v-if="editToggle"
    :userObj="userObj"
  />
</template>

<script>
import axios from "axios";
import addEmployee from "./addEmployee.vue";
import EditEmployee from "./editEmployee.vue";
export default {
  components: { addEmployee, EditEmployee },
  name: "employeeApp",
  data() {
    return {
      toggle: false,
      editToggle: false,
      users: [],
      tot_num: 0,
      userObj: [],
      userFilter: null,
    };
  },
  methods: {
    toggleBtn() {
      this.toggle = !this.toggle;
    },
    editBtn(user) {
      this.editToggle = !this.editToggle;
      this.userObj = user;
    },
    showData() {
      axios.get("http://127.0.0.1:8000/api/listeemployee").then((response) => {
        this.users = response.data.data;
        this.tot_num = this.users.length;
      });
    },
    search() {
      if (this.userFilter) {
        return this.users.filter((user) => {
          return (
            user.name.startsWith(this.userFilter) ||
            user.visa_num.startsWith(this.userFilter) ||
            user.shift.startsWith(this.userFilter) ||
            user.location.name.startsWith(this.userFilter) ||
            user.position.pos_value.startsWith(this.userFilter) ||
            user.hiring_date.startsWith(this.userFilter) ||
            user.personal_id.startsWith(this.userFilter) ||
            user.salary.startsWith(this.userFilter)
          );
        });
      } else {
        return this.users;
      }
    },
    LowToHighSalary() {
      this.users.sort((a, b) => (a.salary > b.salary ? 1 : -1));
    },
    HighToLowSalary() {
      this.users.sort((a, b) => (a.salary < b.salary ? 1 : -1));
    },
    LowToHighName() {
      this.users.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
    HighToLowName() {
      this.users.sort((a, b) => (a.name < b.name ? 1 : -1));
    },
    LowToHighDate() {
      this.users.sort(
        (a, b) => new Date(a.hiring_date) - new Date(b.hiring_date)
      );
    },
    HighToLowDate() {
      this.users.sort(
        (a, b) => new Date(b.hiring_date) - new Date(a.hiring_date)
      );
    },
  },
  created() {
    this.showData();
  },
};
</script>

<style>
.edit-btn {
  padding: 0.1rem 0.4rem !important;
}
.edit-btn i {
  font-size: 16px;
}
.table thead tr {
  background: var(--secColor);
  color: white;
  border-bottom: 1px solid white !important;
}
.total-num {
  border: 1px solid black;
  padding: 2px 8px;
  margin-top: 10px;
  margin-right: 10px;
}
.btn-filter {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 5px 0 rgba(0, 0, 0, 0.19);
  background: transparent !important;
  border-radius: 2px;
  border: 0 !important;
}

.add-employee {
  background: #4685dd !important;
  padding: 5px 8px !important;
  margin-right: 10px;
  color: white !important;
}
input,
button {
  outline: 0 !important;
}
.fa-sort {
  cursor: pointer;
}
.header {
  position: relative;
}
.header:hover .dropDown {
  visibility: visible;
}
.dropDown {
  position: absolute;
  background: #000;
  right: 0;
  padding: 0;
  width: 100%;
  top: 100%;
  visibility: hidden;
}
.dropDown li {
  list-style: none;
  width: 100%;
  text-align: right;
  font-size: 12px;
  padding: 10px;
  cursor: pointer;
}
.dropDown li:hover {
  background: rgba(255, 255, 255, 0.6);
}
</style>
