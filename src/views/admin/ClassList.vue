<template>  
    <div class="page-wrapper">
      <AdminSidebar />
      <div class="page-content">
        <AdminHeader />
        <div class="page-body">
          <div class="page-header">
            <div class="header-content">
              <div class="header-left">
                <h1 class="header-title">Class List</h1>
                <h2 class="header-section">RWLAB1-A</h2>
                <p class="header-instructor">Instructor: <strong>Juan Dela Cruz</strong></p>
              </div>
              <button class="action-button">+ Add Student</button>
            </div>
          </div>
  
          <section class="content-section">
            <!-- Controls Section with Search -->
            <div class="controls">
              <div class="search-bar">
                <input type="text" v-model="searchQuery" placeholder="Search Name" />
                <i class="fas fa-search"></i>
              </div>
            </div>
  
            <!-- Table with Students List -->
            <table class="data-table">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Year</th>
                  <th>Course</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  v-for="(student, index) in filteredStudents" 
                  :key="index"
                  :class="{ 'row-light': index % 2 === 0, 'row-dark': index % 2 !== 0 }"
                >
                  <td>{{ student.name }}</td>
                  <td>{{ student.year }}</td>
                  <td>{{ student.course }}</td>
                  <td>
                    <button class="remove-button" @click="removeStudent(index)">
                      <i class="fas fa-user-minus"></i>
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
    name: 'ClassList',
    data() {
      return {
        searchQuery: '',
        students: [
          { name: 'Seki D. Cat', year: '4th Year', course: 'BSTM' },
          { name: 'Juan Dela Cruz', year: '3rd Year', course: 'BSIT' },
          { name: 'Anna Smith', year: '2nd Year', course: 'BSCHE' },
          { name: 'Lia Tan', year: '4th Year', course: 'BSTM' },
        ],
      };
    },
    computed: {
      filteredStudents() {
        let filtered = this.students;
  
        if (this.searchQuery) {
          filtered = filtered.filter((student) => {
            return student.name.toLowerCase().includes(this.searchQuery.toLowerCase());
          });
        }
  
        return filtered;
      },
    },
    methods: {
      removeStudent(index) {
        // Remove the student from the array
        this.students.splice(index, 1);
      },
    },
  };
  </script>
  
  <style scoped>
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;  
    width: 100%;
  }
  
  .header-left {
    display: flex;
    flex-direction: column;
  }
  
  .header-title {
    font-size: 20px;  
    color: #e53935;
    margin: 0;
  }
  
  .header-section {
    font-size: 18px;  
    margin: 5px 0 0 0;
    color: #393939;
  }
  
  .header-instructor {
    font-size: 14px;  
    color: #555;
    margin: 5px 0;
  }
  
  .action-button {
    margin-top: 40px;
  }
  
  .remove-button {
    background: none; 
    border: none;      
    padding: 0;       
    cursor: pointer;  
  }
  
  .remove-button i {
    color: #99211f;    
    font-size: 18px;    
  }
  
  .remove-button i:hover {
    color: #7f1d1d;    
  }
  </style>
  