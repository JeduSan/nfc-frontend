<template>
  <div class="manage-student">
    <AdminSidebar />
    <div class="page-content">
      <AdminHeader />
      <div class="manage-body">
        <div class="header">
          <h1>Manage Student</h1>
          <button class="add-student-btn">+ Add Student</button>
        </div>

        <section class="student-list">
          <!-- Search and Filter -->
          <div class="controls">
            <div class="search-bar">
              <input type="text" v-model="searchQuery" placeholder="Search Events" />
              <i class="fas fa-search"></i>
            </div>
            <div class="filter">
              <select v-model="selectedMonth">
                <option value="">Filter by Month</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <!-- Add more months -->
              </select>
            </div>
          </div>

          <!-- Table -->
          <table class="class-table">
            <thead>
              <tr>
                <th>Class Name</th>
                <th>Teacher</th>
                <th>Class List</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(classItem, index) in filteredClasses" :key="index">
                <td>{{ classItem.className }}</td>
                <td>{{ classItem.teacher }}</td>
                <td>{{ classItem.classList }}</td>
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

export default {
  components: {
    AdminSidebar,
    AdminHeader,
  },

  name: 'ManageStudent',
  data() {
    return {
      searchQuery: '',
      selectedMonth: '',
      classes: [
        { className: 'Math 101', teacher: 'Mr. Smith', classList: '20 Students' },
        { className: 'Science 202', teacher: 'Ms. Johnson', classList: '25 Students' },
        { className: 'History 303', teacher: 'Dr. Brown', classList: '18 Students' },
        { className: 'Art 404', teacher: 'Mrs. Davis', classList: '22 Students' },
        { className: 'Music 505', teacher: 'Mr. Wilson', classList: '15 Students' },
      ],
    };
  },
  computed: {
    filteredClasses() {
      return this.classes.filter((classItem) => {
        const matchesSearch = classItem.className.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesMonth = this.selectedMonth === '' || classItem.className.toLowerCase().includes(this.selectedMonth.toLowerCase());
        return matchesSearch && matchesMonth;
      });
    },
  },
};
</script>

<style scoped>
.manage-student {
  display: flex;
}

.manage-body {
  padding: 0px;
}

.page-content {
  margin-left: 200px;
  width: calc(100% - 200px);
  display: flex;
  flex-direction: column;
}

.header {

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffff;
  padding: 20px 20px;
  margin: 5px 18px;
  border-radius: 15px;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.3);
}

.header h1 {
  margin: 0;
  font-size: 23px;
  background: #d02e1c;
  background: linear-gradient(to bottom, #d02e1c 23%, #791e1e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.add-student-btn {
  background: linear-gradient(180deg, rgba(208, 46, 28, 1) 0%, rgba(121, 30, 30, 1) 100%);
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 15px;
}

.student-list {

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffff;
  padding: 20px 20px;
  margin: 20px 18px;
  border-radius: 15px;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.3);
  flex-direction: column;
}

.controls {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 15px;
  gap: 20px;
}

.controls .search-bar {
  flex: 1;
}

.search-bar {
  position: relative;
  width: 100%;
}

.search-bar input {
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.3);
}

.search-bar input[type="text"] {
  width: 100%;
  /* Ensure the input takes full width */
  padding-left: 35px;
  /* Add padding to the left to make space for the icon */
  padding-right: 10px;
  /* Optional: Add padding to the right */
  box-sizing: border-box;
  /* Ensure padding is included in the width */
}

.search-bar i {
  position: absolute;
  top: 48%;
  left: 13px;
  /* Position the icon inside the input field */
  transform: translateY(-50%);
  font-size: 16px;
  color: maroon;
  pointer-events: none;
  /* Ensure the icon doesn't interfere with input clicks */
}

.filter select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.3);
  color: rgb(117, 117, 117);
}

.class-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
}

.class-table thead {
  background: linear-gradient(180deg, rgba(208, 46, 28, 1) 0%, rgba(121, 30, 30, 1) 100%);
  box-shadow: 0;
}


.class-table thead tr:first-child th:first-child {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.class-table thead tr:first-child th {
  border-bottom: 0px solid #ccc;
}

.class-table thead tr:first-child th:last-child {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.class-table th,
.class-table td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.class-table th {
  padding-top: 8px;
  padding-bottom: 8px;
  color: #fff;
}
</style>
