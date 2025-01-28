<template>
  <div class="page-wrapper">
    <AdminSidebar />
    <div class="page-content">
      <AdminHeader />
      <div class="page-body">
        <div class="page-header">
          <h1>Manage Events</h1>
          <button class="action-button">+ Add Event</button>
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
              <select v-model="selectedMonth" @change="filterEvents">
                <option value="">Filter by Month</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <!-- Add more months -->
              </select>
            </div>
          </div>

          <!-- Table Wrapper for Scrolling -->
          <div class="table-wrapper">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Event Details</th>
                  <th>Attendance List</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  v-for="(event, index) in filteredEvents" 
                  :key="event.id"
                  :class="{ 'row-light': index % 2 === 0, 'row-dark': index % 2 !== 0 }"
                >
                  <td>
                    <div class="event-info">
                      <div class="event-date">
                        <div class="date">
                          <p>{{ event.date.month }}</p>
                          <p>{{ event.date.day }}</p>
                        </div>
                      </div>
                      <div>{{ event.name }} | {{ event.time }}
                        <div class="event-status" :class="event.status.toLowerCase().replace(/ /g, '_')">
                          <span class="status-circle"></span>
                          {{ event.status }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span v-if="event.status === 'Happening Now' || event.status === 'Ended'" class="view-button">
                      <button class="viewattendance-button" @click="viewAttendance(event.id)">
                        <i class="fas fa-eye"></i> View Attendance
                      </button>
                    </span>
                    <span v-else>-- --</span>
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
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';  // Importing the useRouter hook
import AdminSidebar from "@/components/AdminSidebar.vue";
import AdminHeader from "@/components/AdminHeader.vue";
import '../../styles/table.css';

export default {
  components: {
    AdminSidebar,
    AdminHeader,
  },
  name: 'ManageEvents',
  data() {
    return {
      searchQuery: '',
      selectedMonth: '',  // Model for the filter
      events: [
        { id: 1, date: { month: "Jan", day: 21 }, name: "Event One", time: "7:00 am - 4:00 pm", status: "Happening Now" },
        { id: 2, date: { month: "Jan", day: 22 }, name: "Event Two", time: "9:00 am - 5:00 pm", status: "Upcoming" },
        { id: 3, date: { month: "Feb", day: 1 }, name: "Event Three", time: "10:00 am - 3:00 pm", status: "Ended" },
        { id: 4, date: { month: "Feb", day: 14 }, name: "Event Four", time: "6:00 am - 9:00 pm", status: "Canceled" },
      ],
    };
  },
  computed: {
    filteredEvents() {
      let filteredEvents = this.events;

      if (this.searchQuery) {
        filteredEvents = filteredEvents.filter((event) => {
          return event.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        });
      }

      if (this.selectedMonth) {
        filteredEvents = filteredEvents.filter((event) => {
          return event.date.month.toLowerCase() === this.selectedMonth.toLowerCase();
        });
      }

      return filteredEvents;
    },
  },
  methods: {
    filterEvents() {
      // Triggered when the filter changes
    },
    viewAttendance(eventId) {
      // Navigate to the attendance list page, passing the eventId as a parameter (if needed)
      this.$router.push({ path: '/admin/attendance-list', query: { eventId } });
    },
  },
};
</script>


<style scoped>

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
  font-size: 0.8rem;
  margin-top: 0.3rem;
  display: flex;
  align-items: center;
  gap: 5px;
}

.status-circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: currentColor;
}

.event-status.happening_now .status-circle {
  background-color: green;
}

.event-status.upcoming .status-circle {
  background-color: rgb(204, 172, 16);
}

.event-status.canceled .status-circle {
  background-color: orange;
}

.event-status.ended .status-circle {
  background-color: red;
}

.cancel-button,
.edit-button,
.delete-button {
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


@media (max-width: 768px) {
  
  .data-table th, .data-table td {
    padding: 12px;
    font-size: 14px;
    min-width: 150px; 
  }

  
  .table-wrapper {
    overflow-x: auto; 
  }

  
  .data-table {
    min-width: 600px;
  }
}
</style>
