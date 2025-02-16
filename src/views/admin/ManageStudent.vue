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
                <tr v-for="(student, index) in filteredStudents" :key="index"
                  :class="{ 'row-light': index % 2 === 0, 'row-dark': index % 2 !== 0 }">
                  <td>{{ student.studentId }}</td>
                  <td>{{ student.firstName }}</td>
                  <td>{{ student.lastName }}</td>
                  <td>{{ student.middleName }}</td>
                  <td>{{ student.year }}</td>
                  <td>{{ student.course }}</td>
                  <td>
                    <button @click="openModal('edit')" class="edit-button">
                      <i class="fas fa-edit"></i>
                    </button>
                    <button @click="openModal('delete')" class="delete-button">
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

  <!-- Modal -->
  <!-- start of modal -->
  <div>
    <div v-if="isOpen" class="modal-overlay">
      <div class="modal-container">
        <div class="close-button-container">
          <button @click="closeModal" class="fa-regular fa-circle-xmark modal-close-button "></button>
        </div>

        <!-- edit student details -->
        <div v-if="modalType === 'edit'">
          <h2 class="modal-title">Edit Student</h2>
          <div class="modal-form-container">
            <div class="form-input">
              <input id="SampleID1" type="text" placeholder="Sample Label Template 1" />
            </div>
            <div class="form-input">
              <input id="SampleID2" type="text" placeholder="Sample Label Template 2" />
            </div>
            <div class="form-input">
              <input id="SampleID3" type="text" placeholder="Sample Label Template 3" />
            </div>
          </div>
          <button class="modal-submit-button">SAVE</button>
        </div>

        <!-- Delete Student -->
        <div v-if="modalType === 'delete'">
          <h2 class="modal-title">Delete Student</h2>
          <div style="justify-content: right; display: flex; column-gap: 20px;">
            <button class="modal-submit-button">CONFIRM</button>
            <button class="modal-cancel-button">CANCEL</button>
          </div>
        </div>

      </div>
    </div>
  </div>
  <!-- end of modal -->
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
      isOpen: false, //for modal
      modalType: '',
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
    openModal(type) {
      this.modalType = type;
      this.isOpen = true; //for modal
    },
    closeModal() {
      this.isOpen = false; //for modal
    },

  },
};
</script>
<style scoped>
/* for modal [START]*/
.modal-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background-color: rgba(107, 114, 128, 0.5);
  /* Tailwind's bg-gray-500 with opacity */
  padding: 1rem;
}

.modal-container {
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 32rem;
  /* Equivalent to max-w-lg */
}

.close-button-container {
  display: flex;
  justify-content: right;
}

.modal-close-button {
  background-color: transparent;
  border: none;
  background: linear-gradient(to bottom, #d02e1c 23%, #791e1e 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  border-radius: 100%;
  cursor: pointer;
  font-size: 1.5rem;
}

.modal-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(to bottom, #d02e1c 23%, #791e1e 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

.modal-form-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 1rem;
}

.form-input {
  position: flex;
  width: 100%;
  border: none;
}

.form-input input {
  padding: 10px 30px 10px 30px;
  width: 100%;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
  background-color: #f7f8ff;
  box-sizing: border-box;
}

.modal-submit-button {
  background: linear-gradient(180deg, rgba(208, 46, 28, 1) 0%, rgba(121, 30, 30, 1) 100%);
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 10px;
}

.modal-cancel-button {
  background: linear-gradient(180deg, rgba(208, 46, 28, 1) 0%, rgba(121, 30, 30, 1) 100%);
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 10px;
}

/* for modal [END]*/
</style>
