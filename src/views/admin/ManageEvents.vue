<template>
  <div class="manage-events">
    <AdminSidebar />
    <div class="page-content">
      <AdminHeader />
      <div class="manage-body">
        <div class="header">
          <h1>Manage Events</h1>
          <button class="add-class-btn">+ Add Class</button>
        </div>

        <section class="events-list">
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
          <table class="events-table">
            <thead>
              <tr>
                <th>Event Details</th>
                <th>Attendance List</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="event in filteredEvents" :key="event.id">
                <td>
                  <div class="event-info">
                    <div class="event-date">
                      <div class="date">
                        <p>{{ event.date.month }}</p>
                        <p>{{ event.date.day }}</p>
                      </div>
                    </div>
                    <div>{{ event.name }} | {{ event.time }}
                      <div class="event-status" :class="event.status.toLowerCase().replace(/ /g, '_')">{{ event.status }}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span v-if="event.status === 'Happening Now' || event.status === 'Ended'" class="view-attendance">
                    <button class="viewattendance-button"><i class="fas fa-eye"></i> View Attendance</button>
                  </span>
                  <span v-else>-- --</span>
                </td>
                <td>
                  <button class="cancel-button">
                    <i class="fas fa-flip-horizontal fa-cancel"></i>
                  </button>
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

export default {
  components: {
    AdminSidebar,
    AdminHeader,
  },

  name: 'ManageEvents',
  data() {
    return {
      searchQuery: '',
      selectedMonth: '',
      events: [
        {
          id: 1,
          date: { month: "Jan", day: 21 },
          name: "Enverga Foundation",
          time: "7:00 am - 4:00 pm",
          status: "Happening Now",
        },
        {
          id: 2,
          date: { month: "Jan", day: 21 },
          name: "Envergaa Foundation",
          time: "7:00 am - 4:00 pm",
          status: "Upcoming",
        },
        {
          id: 3,
          date: { month: "Jan", day: 21 },
          name: "Envergaaa Foundation",
          time: "7:00 am - 4:00 pm",
          status: "Canceled",
        },
        {
          id: 4,
          date: { month: "Jan", day: 21 },
          name: "Envergaaaa Foundation",
          time: "7:00 am - 4:00 pm",
          status: "Ended",
        },
      ],
    };
  },
  computed: {
    filteredEvents() {
      return this.events.filter((event) => {
        const matchesSearch = event.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesMonth = this.selectedMonth ? event.date.startsWith(this.selectedMonth) : true;
        return matchesSearch && matchesMonth;
      });
    },
  },
};
</script>

<style scoped>
.manage-events {
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

.add-class-btn {
  background: linear-gradient(180deg, rgba(208, 46, 28, 1) 0%, rgba(121, 30, 30, 1) 100%);
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 15px;
}

.events-list {

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

.events-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
}

.events-table thead {
  background: linear-gradient(180deg, rgba(208, 46, 28, 1) 0%, rgba(121, 30, 30, 1) 100%);
  box-shadow: 0;
}

.events-table thead tr:first-child th:first-child {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.events-table thead tr:first-child th {
  border-bottom: 0px solid #ccc;
}

.events-table thead tr:first-child th:last-child {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.events-table th,
.events-table td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

.events-table th {
  padding-top: 8px;
  padding-bottom: 8px;
  color: #fff;
}

.events-table td {
  padding-top: 8px;
  padding-bottom: 8px;
}

.event-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.event-date {
  background: rgb(208, 46, 28);
  background: linear-gradient(180deg, rgba(208, 46, 28, 1) 0%, rgba(121, 30, 30, 1) 100%);
  color: white;
  text-align: center;
  border-radius: 8px;
  padding: 10px;
  width: 50px;
  margin-right: 0;
}

.event-date p {
  margin: 0;
}

.date {
  margin: 0px;
}

.event-status {
  font-size: 0.9rem;
  margin-top: 0.3rem;
}

.event-status.happening_now {
  color: green;
}

.event-status.upcoming {
  color: yellow;
}

.event-status.canceled {
  color: orange;
}

.event-status.ended {
  color: red;
}

.cancel-button,
.edit-button,
.delete-button {
  background-color: #fff;
  border: none;
  font-size: 16px;
  cursor: pointer;
}

.viewattendance-button {
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 0%;
  background-color: #fff;
  color: #07c931;
}

.cancel-button {
  color: #e27c08;
}

.edit-button {
  color: #08e237;
}

.delete-button {
  color: #dc3545;
}
</style>
