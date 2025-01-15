<template>
  <div class="page-wrapper">
    <AdminSidebar />
    <div class="page-content">
      <AdminHeader />
      <div class="page-body">
        <div class="page-header">
          <h1>Manage Teachers</h1>
          <button class="action-button">+ Add Teacher</button>
        </div>

        <section class="content-section">
          <!-- Controls Section with Search and Filter -->
          <div class="controls">
            <div class="search-bar">
              <input type="text" v-model="searchQuery" placeholder="Search Teachers" />
              <i class="fas fa-search"></i>
            </div>

            <!-- Filter -->
            <div class="filter">
              <select v-model="selectedTeacher" @change="filterTeachers">
                <option value="">All Departments</option>
                <option v-for="department in departments" :key="department" :value="department">{{ department }}</option>
              </select>
            </div>
          </div>

          <!-- Table -->
          <table class="data-table">
            <thead>
              <tr>
                <th>Teacher Name</th>
                <th>Department</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="(teacher, index) in filteredTeachers" 
                :key="index"
                :class="{ 'row-light': index % 2 === 0, 'row-dark': index % 2 !== 0 }"
              >
                <td>{{ teacher.name }}</td>
                <td>{{ teacher.department }}</td>
                <td>{{ teacher.contact }}</td>
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
  name: 'ManageTeachers',
  data() {
    return {
      searchQuery: '',
      selectedDepartment: '',  // Model for the filter by department
      teachers: [
        { name: 'Mr. Smith', department: 'Math', contact: '123-456-7890' },
        { name: 'Ms. Johnson', department: 'Science', contact: '123-456-7891' },
        { name: 'Dr. Brown', department: 'History', contact: '123-456-7892' },
        { name: 'Mrs. Davis', department: 'Art', contact: '123-456-7893' },
        { name: 'Mr. Wilson', department: 'Music', contact: '123-456-7894' },
      ],
    };
  },
  computed: {
    // Get a list of all unique departments for the filter dropdown
    departments() {
      return [...new Set(this.teachers.map(teacher => teacher.department))];
    },
    filteredTeachers() {
      let filteredTeachers = this.teachers;

      if (this.searchQuery) {
        filteredTeachers = filteredTeachers.filter((teacher) => {
          return teacher.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        });
      }

      if (this.selectedDepartment) {
        filteredTeachers = filteredTeachers.filter((teacher) => {
          return teacher.department === this.selectedDepartment;
        });
      }

      return filteredTeachers;
    },
  },
  methods: {
    filterTeachers() {
      // Triggered when the filter changes
    },
  },
};
</script>
