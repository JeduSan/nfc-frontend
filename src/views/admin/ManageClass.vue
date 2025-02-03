<template>
  <div class="page-wrapper">
    <AdminSidebar />
    <div class="page-content">
      <AdminHeader />
      <div class="page-body">
        <div class="page-header">
          <h1>Manage Class</h1>
          <button @click="openModal" class="action-button">+ Add Class</button>
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
              <tr v-for="(classItem, index) in filteredClasses" :key="index"
                :class="{ 'row-light': index % 2 === 0, 'row-dark': index % 2 !== 0 }">
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

  <!-- Modal -->
  <!-- start of modal -->
  <div>
    <div v-if="isOpen" class="modal-overlay">
      <div class="modal-container">
        <div class="close-button-container">
          <button @click="closeModal" class="fa-regular fa-circle-xmark modal-close-button "></button>
        </div>
        <h2 class="modal-title">Add Class</h2>
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
        <button class="modal-submit-button">ADD</button>
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
  name: 'ManageClasses',
  data() {
    return {
      isOpen: false, //for modal
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
    openModal() {
      this.isOpen = true; //for modal
    },
    closeModal() {
      this.isOpen = false; //for modal
    },
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

/* for modal [END]*/
</style>
