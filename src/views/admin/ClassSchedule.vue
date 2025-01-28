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
              <button class="action-button">+ Add Schedule</button>
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
                <tr 
                  v-for="(classItem, index) in filteredClasses" 
                  :key="index"
                  :class="{ 'row-light': index % 2 === 0, 'row-dark': index % 2 !== 0 }"
                >
                  <td>{{ classItem.day }}</td>
                  <td>{{ classItem.time }}</td>
                  <td>
                    <button class="edit-button" @click="editClass(index)">
                      <i class="fas fa-edit"></i>
                    </button>
                    <button class="remove-button" @click="removeClass(index)">
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
</style>
  