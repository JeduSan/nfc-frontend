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
              </div>
              <div class="header-right">
                <span :class="badgeClass">{{ badgeText }}</span>
              </div>
            </div>
          </div>
  
          <section class="content-section">
            <div class="controls">
              <div class="search-bar">
                <input type="text" v-model="searchQuery" placeholder="Search Records" />
                <i class="fas fa-search"></i>
              </div>
  
              <div class="filter">
                <input 
                  type="date" 
                  v-model="selectedDate" 
                  @change="filterRecords" 
                  class="date-picker"
                />
              </div>
            </div>
  
            <div class="table-wrapper">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>A.M Log Attendance</th>
                    <th>P.M Log Attendance</th>
                    <th>Grade Remark</th>
                  </tr>
                </thead>
                <tbody>
                  <tr 
                    v-for="(record, index) in filteredRecords" 
                    :key="record.id"
                    :class="{ 'row-light': index % 2 === 0, 'row-dark': index % 2 !== 0 }"
                  >
                    <td>{{ record.studentName }}</td>
                    <td :class="{ 'log-time': record.amLog, 'log-absent': !record.amLog }">
                      {{ record.amLog || 'Absent' }}
                    </td>
                    <td :class="{ 'log-time': record.pmLog, 'log-absent': !record.pmLog }">
                      {{ record.pmLog || '--:-- pm' }}
                    </td>
                    <td>
                      <input v-model="record.grade" type="text" placeholder="Enter grade" />
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
  import AdminSidebar from "@/components/TeacherSidebar.vue";
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
        selectedDate: '',
        records: [
          {
            id: 1,
            studentName: "John Doe",
            amLog: "08:03:34 am",
            pmLog: "03:24:24 pm",
            grade: "",
          },
          {
            id: 2,
            studentName: "Jane Smith",
            amLog: "11:00:33 am",
            pmLog: null,
            grade: "",
          },
          {
            id: 3,
            studentName: "Sam Wilson",
            amLog: null,
            pmLog: null,
            grade: "",
          },
          {
            id: 4,
            studentName: "Chris Evans",
            amLog: "11:00:33 am",
            pmLog: null,
            grade: "",
          },
        ],
        
        isClassDay: false, 
        eventName: "Annual Sports Event 2025", 
      };
    },
    computed: {
      filteredRecords() {
        let filteredRecords = this.records;
  
        // Search query filter
        if (this.searchQuery) {
          filteredRecords = filteredRecords.filter((record) => {
            return record.studentName.toLowerCase().includes(this.searchQuery.toLowerCase());
          });
        }
  
        // Date filter
        if (this.selectedDate) {
          filteredRecords = filteredRecords.filter((record) => {
            const recordDate = record.amLog ? record.amLog.split(' ')[0] : '';
            return recordDate === this.selectedDate;
          });
        }
  
        return filteredRecords;
      },
      badgeText() {
        return this.isClassDay ? "Class Day" : this.eventName;
      },
      badgeClass() {
        return this.isClassDay ? "badge class-day" : "badge event-day";
      },
    },
    methods: {
      filterRecords() {
        // The filtering is handled in computed property `filteredRecords`
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
  
  .header-right {
    display: flex;
    align-items: center;
  }
  
  .badge {
    padding: 8px 12px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
  }
  
  .class-day {
    background-color: #28a745;
    color: white;
  }
  
  .event-day {
    background-color: #a4202e;
    color: white;
  }
  
  .date-picker {
    padding: 10px;
    border-radius: 15px;
    border: none;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.3);
    background-color: #f7f8ff;
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
  
  .grade-remark {
    color: #08c231;
  }
  </style>
  