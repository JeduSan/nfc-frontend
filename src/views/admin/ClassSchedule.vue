<template>
  <div class="page-wrapper">
    <AdminSidebar />
    <div class="page-content">
      <AdminHeader />
      <div class="page-body">
        <div class="page-header">
          <div class="header-content">
            <div class="header-left">
              <h1 class="header-title">Class Schedule</h1>
              <h2 class="header-section">RWLAB1-A</h2>
              <p class="header-instructor">Instructor: <strong>Juan Dela Cruz</strong></p>
            </div>
            <button @click="openModal('add')" class="action-button">+ Add Schedule</button>
          </div>
        </div>

        <section class="content-section">
          <div class="controls">
            <div class="search-bar">
              <input type="text" v-model="searchQuery" placeholder="Search Day or Time" />
              <i class="fas fa-search"></i>
            </div>
          </div>

          <table class="data-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(classItem, index) in filteredClasses" :key="index"
                :class="{ 'row-light': index % 2 === 0, 'row-dark': index % 2 !== 0 }">
                <td>{{ classItem.day }}</td>
                <td>{{ classItem.time }}</td>
                <td>
                  <button @click="openModal('edit')" class="edit-button">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button @click="openModal('delete')" class="remove-button">
                    <i class="fas fa-trash"></i>
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

        <!-- Add Schedule Form -->
        <div v-if="modalType === 'add'">
          <h2 class="modal-title">Add Schedule</h2>
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

        <!-- edit Schedule details -->
        <div v-if="modalType === 'edit'">
          <h2 class="modal-title">Edit Schedule</h2>
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

        <!-- Delete Schedule -->
        <div v-if="modalType === 'delete'">
          <h2 class="modal-title">Delete Schedule</h2>
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
  name: 'ClassSchedule',
  data() {
    return {
      isOpen: false, //for modal
      modalType: '',
      searchQuery: '',
      classes: [
        { day: 'Monday', time: '9:00 AM - 11:00 AM' },
        { day: 'Wednesday', time: '2:00 PM - 4:00 PM' },
        { day: 'Friday', time: '10:00 AM - 12:00 PM' },
        { day: 'Monday', time: '1:00 PM - 3:00 PM' },
      ],
    };
  },
  computed: {
    filteredClasses() {
      let filtered = this.classes;

      if (this.searchQuery) {
        filtered = filtered.filter((classItem) => {
          return classItem.day.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                 classItem.time.toLowerCase().includes(this.searchQuery.toLowerCase());
        });
      }

      return filtered;
    },
  },
  methods: {
    removeClass(index) {
      this.classes.splice(index, 1);
    },
    editClass(index) {
      const classItem = this.classes[index];
      alert(`Edit the class: ${classItem.day}, ${classItem.time}`);
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

.remove-button, .edit-button {
  background: none; 
  border: none;      
  padding: 0;       
  cursor: pointer;  
  margin-left: 10px;
}

.remove-button i, .edit-button i {
  font-size: 18px;    
}

.remove-button i {
  color: #99211f;
}

.remove-button i:hover {
  color: #7f1d1d;
}

.edit-button i {
  color: #4caf50;
}

.edit-button i:hover {
  color: #388e3c;
}

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
  