<template>
    <div class="page-wrapper">
      <AdminSidebar />
      <div class="page-content">
        <AdminHeader />
        <div class="page-body">
          <div class="page-header">
            <div class="event-date">
              <div class="date">
                <p class="month">Jan</p>
                <p class="day">21</p>
              </div>
            </div>
            <div class="event-info">
              <h1 class="event-name">Enverga Foundation</h1>
              <p class="event-time">7:00 am - 4:00 pm</p>
            </div>
            <div class="event-status happening-now">Happening Now</div>
          </div>
  
          <section class="content-section">
            <!-- Controls Section with Search and Filter -->
            <div class="controls">
              <div class="search-bar">
                <input type="text" v-model="searchQuery" placeholder="Search Records" />
                <i class="fas fa-search"></i>
              </div>
  
              <!-- Filter by Course -->
              <div class="filter">
                <select v-model="selectedCourse" @change="filterRecords">
                  <option value="">Filter by Course</option>
                  <option value="BSTM">BSTM</option>
                  <option value="BSIT">BSIT</option>
                  <option value="BSHRM">BSHRM</option>
                </select>
              </div>
            </div>
  
            <!-- Table Wrapper for Scrolling -->
            <div class="table-wrapper">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Year</th>
                    <th>Course</th>
                    <th>A.M Log Attendance</th>
                    <th>P.M Log Attendance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr 
                    v-for="(record, index) in filteredRecords" 
                    :key="record.id"
                    :class="{ 'row-light': index % 2 === 0, 'row-dark': index % 2 !== 0 }"
                  >
                    <td>{{ record.studentName }}</td>
                    <td>{{ record.year }}</td>
                    <td>{{ record.course }}</td>
                    <td :class="{ 'log-time': record.amLog, 'log-absent': !record.amLog }">
                      {{ record.amLog || 'Absent' }}
                    </td>
                    <td :class="{ 'log-time': record.pmLog, 'log-absent': !record.pmLog }">
                      {{ record.pmLog || '--:-- pm' }}
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
  
  export default {
    components: {
      AdminSidebar,
      AdminHeader,
    },
    name: 'AttendanceList',
    data() {
      return {
        searchQuery: '',
        selectedCourse: '',  // Change from selectedDate to selectedCourse
        records: [
          {
            id: 1,
            studentName: "John Doe",
            year: "4th Year",
            course: "BSTM",
            amLog: "08:03:34 am",
            pmLog: "03:24:24 pm",
          },
          {
            id: 2,
            studentName: "Jane Smith",
            year: "4th Year",
            course: "BSTM",
            amLog: "11:00:33 am",
            pmLog: null,
          },
          {
            id: 3,
            studentName: "Sam Wilson",
            year: "4th Year",
            course: "BSIT",
            amLog: null,
            pmLog: null,
          },
          {
            id: 4,
            studentName: "Chris Evans",
            year: "4th Year",
            course: "BSTM",
            amLog: "11:00:33 am",
            pmLog: null,
          },
        ],
      };
    },
    computed: {
      filteredRecords() {
        let filteredRecords = this.records;
  
        if (this.searchQuery) {
          filteredRecords = filteredRecords.filter((record) => {
            return record.studentName.toLowerCase().includes(this.searchQuery.toLowerCase());
          });
        }
  
        if (this.selectedCourse) {
          filteredRecords = filteredRecords.filter((record) => {
            return record.course === this.selectedCourse;
          });
        }
  
        return filteredRecords;
      },
    },
    methods: {
      filterRecords() {
        // Any additional logic for filtering can go here
      },
    },
  };
  </script>
  
  <style scoped>
  .page-header {
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    gap: 15px;
  }
  
  .event-date {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #d02e1c 0%, #791e1e 100%);
    color: #fff;
    text-align: center;
    border-radius: 4px;
    width: 60px;
    height: 60px;
  }
  
  .event-date .date {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .event-date .month {
    font-size: 0.8rem;
    font-weight: bold;
    margin: 0;
    text-transform: uppercase;
  }
  
  .event-date .day {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
  }
  
  .event-info {
    flex-grow: 1;
  }
  
  .event-name {
    margin: 0;
    font-size: 1.2rem;
    font-weight: bold;
    color: #d02e1c;
  }
  
  .event-time {
    margin: 5px 0 0;
    font-size: 0.9rem;
    color: #666;
  }
  
  .event-status {
    font-size: 0.9rem;
    font-weight: bold;
    margin-left: auto;
  }
  
  .happening-now {
    color: #08c231;
    margin-right: 20px;
  }
  
  .table-wrapper {
    margin-top: 20px;
    overflow-x: auto;
  }
  
  .data-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .data-table thead {
    background-color: #c30e0e;
    color: #fff;
  }
  
  .data-table th,
  .data-table td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  .row-light {
    background-color: #f9f9f9;
  }
  
  .row-dark {
    background-color: #fff;
  }
  
  .log-time {
    color: #08c231;
  }
  
  .log-absent {
    color: #d02e1c;
  }
  </style>
  