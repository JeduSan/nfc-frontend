<template>
  <div class="page-wrapper">
    <AdminSidebar />
    <div class="page-content">
      <AdminHeader />
      <div class="page-body">
        <div class="page-header">
          <h1>Manage Students</h1>
          <button class="action-button" @click="goToRegisterStudent">+ Register Student</button>
        </div>

        <section class="content-section">
          
          <div class="controls">
            <div class="search-bar">
              <input type="text" v-model="searchQuery" placeholder="Search Students" />
              <i class="fas fa-search"></i>
            </div>

            
            <div class="filter">
              <select v-model="selectedCourse" @change="filterStudents">
                <option value="">All Courses</option>
                <option v-for="course in courses" :key="course" :value="course">{{ course }}</option>
              </select>
            </div>
          </div>

          <!-- Table -->
          <div class="table-wrapper">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Middle Name</th>
                  <th>Year</th>
                  <th>Course</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  v-for="(student, index) in filteredStudents" 
                  :key="index"
                  :class="{ 'row-light': index % 2 === 0, 'row-dark': index % 2 !== 0 }"
                >
                  <td>{{ student.studentId }}</td>
                  <td>{{ student.firstName }}</td>
                  <td>{{ student.lastName }}</td>
                  <td>{{ student.middleName }}</td>
                  <td>{{ student.year }}</td>
                  <td>{{ student.course }}</td>
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
          </div>
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
  name: 'ManageStudents',
  data() {
    return {
      searchQuery: '',
      selectedCourse: '',
      students: [
        { studentId: 'S001', firstName: 'John', lastName: 'Doe', middleName: 'A', year: '3', course: 'Mathematics', contact: '123-456-7890' },
        { studentId: 'S002', firstName: 'Jane', lastName: 'Smith', middleName: 'B', year: '2', course: 'Biology', contact: '123-456-7891' },
        { studentId: 'S003', firstName: 'Emily', lastName: 'Davis', middleName: 'C', year: '1', course: 'History', contact: '123-456-7892' },
        { studentId: 'S004', firstName: 'Michael', lastName: 'Brown', middleName: 'D', year: '4', course: 'Literature', contact: '123-456-7893' },
        { studentId: 'S005', firstName: 'Sarah', lastName: 'Wilson', middleName: 'E', year: '3', course: 'Music', contact: '123-456-7894' },
      ],
    };
  },
  computed: {
    courses() {
      return [...new Set(this.students.map(student => student.course))];
    },
    filteredStudents() {
      let filteredStudents = this.students;

      if (this.searchQuery) {
        filteredStudents = filteredStudents.filter((student) => {
          return student.firstName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                 student.lastName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                 student.middleName.toLowerCase().includes(this.searchQuery.toLowerCase());
        });
      }

      if (this.selectedCourse) {
        filteredStudents = filteredStudents.filter((student) => {
          return student.course === this.selectedCourse;
        });
      }

      return filteredStudents;
    },
  },
  methods: {
    goToRegisterStudent() {
  this.$router.push('/admin/register-student');
},

  },
};
</script>
<style scoped>

</style>
