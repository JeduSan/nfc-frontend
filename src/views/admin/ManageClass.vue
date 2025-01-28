<template>
  <div class="page-wrapper">
    <AdminSidebar />
    <div class="page-content">
      <AdminHeader />
      <div class="page-body">
        <div class="page-header">
          <h1>Manage Class</h1>
          <button class="action-button">+ Add Class</button>
        </div>

        <section class="content-section">
          <!-- Controls Section with Search and Filter -->
          <div class="controls">
            <div class="search-bar">
              <input type="text" v-model="searchQuery" placeholder="Search Events" />
              <i class="fas fa-search"></i>
            </div>

            <!-- Filter -->
            <div class="filter">
              <select v-model="selectedTeacher" @change="filterClasses">
                <option value="">All Teachers</option>
                <option v-for="teacher in teachers" :key="teacher" :value="teacher">{{ teacher }}</option>
              </select>
            </div>
          </div>

          <!-- Table -->
          <table class="data-table">
            <thead>
              <tr>
                <th>Class Name</th>
                <th>Teacher</th>
                <th>Class List</th>
                <th>Class Schedule</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="(classItem, index) in filteredClasses" 
                :key="index"
                :class="{ 'row-light': index % 2 === 0, 'row-dark': index % 2 !== 0 }"
              >
                <td>{{ classItem.className }}</td>
                <td>{{ classItem.teacher }}</td>
                <td>
                  <button class="view-button" @click="viewClassList(classItem)">View Class List</button>
                </td>
                <td>
                  <button class="view-button" @click="viewClassSchedule(classItem)">View Class Schedule</button>
                </td>
                <td>
                  <button class="edit-button">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button class="delete-button">
                    <i class="fas fa-trash-alt"></i>
                  </button>
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
import AdminSidebar from "@/components/AdminSidebar.vue";
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
      selectedTeacher: '',  // Model for the filter
      classes: [
        { className: 'Math 101', teacher: 'Mr. Smith', schedule: 'Mon, Wed, Fri 10:00-11:30' },
        { className: 'Science 202', teacher: 'Ms. Johnson', schedule: 'Tue, Thu 1:00-2:30' },
        { className: 'History 303', teacher: 'Dr. Brown', schedule: 'Mon, Wed 9:00-10:30' },
        { className: 'Art 404', teacher: 'Mrs. Davis', schedule: 'Tue, Thu 3:00-4:30' },
        { className: 'Music 505', teacher: 'Mr. Wilson', schedule: 'Fri 12:00-2:00' },
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
    filterClasses() {
      // Triggered when the filter changes
    },
    viewClassList(classItem) {
      this.$router.push(`/admin/class-list`);
    },
    viewClassSchedule(classItem) {
      // Navigate to the class schedule page
      this.$router.push(`/admin/class-schedule`);
    },
  },
};
</script>

<style scoped>
</style>
