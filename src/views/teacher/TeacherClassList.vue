<template>
    <div class="page-wrapper">
      <AdminSidebar />
      <div class="page-content">
        <AdminHeader />
        <div class="page-body">
          <div class="page-header">
            <h1>Class Attendance</h1>
          </div>
  
          <section class="content-section">
            <div class="controls">
              <div class="search-bar">
                <input type="text" v-model="searchQuery" placeholder="Search Events" />
                <i class="fas fa-search"></i>
              </div>
            </div>
  
            <table class="data-table">
              <thead>
                <tr>
                  <th>Class Name</th>
                  <th>Class List</th>
                  <th>Class Schedule</th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  v-for="(classItem, index) in filteredClasses" 
                  :key="index"
                  :class="{ 'row-light': index % 2 === 0, 'row-dark': index % 2 !== 0 }"
                >
                  <td>{{ classItem.className }}</td>
                  <td>
                    <button class="view-button" @click="viewClassList(classItem)">View Class List</button>
                  </td>
                  <td>
                    <button class="view-button" @click="viewClassSchedule(classItem)">View Class Schedule</button> <!-- New button -->
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AdminSidebar from "@/components/TeacherSidebar.vue";
  import AdminHeader from "@/components/AdminHeader.vue";
  import '../../styles/table.css';
  
  export default {
    components: {
      AdminSidebar,
      AdminHeader,
    },
    name: 'ManageClasses',
    data() {
      return {
        searchQuery: '',
        selectedTeacher: '',  
        classes: [
          { className: 'Math 101', scheduleId: 1 },
          { className: 'Science 202', scheduleId: 2 },
        ],
      };
    },
    computed: {
      teachers() {
        return [...new Set(this.classes.map(classItem => classItem.teacher))];
      },
      filteredClasses() {
        let filteredClasses = this.classes;
  
        if (this.searchQuery) {
          filteredClasses = filteredClasses.filter((classItem) => {
            return classItem.className.toLowerCase().includes(this.searchQuery.toLowerCase());
          });
        }
  
        if (this.selectedTeacher) {
          filteredClasses = filteredClasses.filter((classItem) => {
            return classItem.teacher === this.selectedTeacher;
          });
        }
  
        return filteredClasses;
      },
    },
    methods: {
      filterClasses() {},
      viewClassList(classItem) {
        this.$router.push(`/teacher/class-attendance`);
      },
      viewClassSchedule(classItem) {
        this.$router.push(`/teacher/class-schedule`);
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  