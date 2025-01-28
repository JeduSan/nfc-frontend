<template>
  <div class="manage-class">
    <AdminSidebar />
    <div class="admin-content">
      <AdminHeader />
      <div class="manage-body">
        <section class="events-section">
          <section class="stats-section">
            <div class="stats-card">
              <h3>Total Events</h3>
              <p>10</p>
            </div>
            <div class="stats-card">
              <h3>Total Students</h3>
              <p>10</p>
            </div>
            <div class="stats-card">
              <h3>Total Class</h3>
              <p>10</p>
            </div>
            <div class="stats-card">
              <h3>Total Teachers</h3>
              <p>10</p>
            </div>
          </section>

          <section>
          
            <div class="chart-item">
              <h3 class="chart-title">Event Attendance</h3>
              <BarChart :data="eventAttendanceData" :options="chartOptions" />
            </div>
            <div class="chart-item">
              <h3 class="chart-title">Year Level Attendance</h3>
              <LineChart :data="yearLevelAttendanceData" :options="chartOptions" />
            </div>
          </section>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar.vue";
import AdminHeader from "@/components/AdminHeader.vue";

import { Bar, Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

export default {
  name: "ManageClass",
  components: {
    AdminSidebar,
    AdminHeader,
    BarChart: Bar,
    LineChart: Line,
  },
  data() {
    return {
      eventAttendanceData: {
        labels: [
          "Event 1",
          "Event 2",
          "Event 3",
          "Event 4",
          "Event 5",
          "Event 6",
          "Event 7",
          "Event 8",
          "Event 9",
        ],
        datasets: [
          {
            label: "1st Year",
            backgroundColor: "#D02E1C", 
            data: [65, 75, 60, 56, 79, 20, 95, 88, 102],
          },
          {
            label: "2nd Year",
            backgroundColor: "#3B82F6", 
            data: [60, 80, 65, 34, 89, 49, 101, 121, 78], 
          },
          {
            label: "3rd Year",
            backgroundColor: "#10B981", 
            data: [70, 85, 40, 78, 95, 36, 123, 88, 81], 
          },
          {
            label: "4th Year",
            backgroundColor: "#F59E0B", 
            data: [81, 94, 42, 45, 95, 36, 65, 76, 83], 
          },
        ],
      },

      // Line chart data: Attendance across months
      yearLevelAttendanceData: {
        labels: ["January", "February", "March", "April", "May", "June"], 
        datasets: [
          {
            label: "All CITHM Students",
            borderColor: "#D02E1C",
            data: [80, 93, 89, 113, 109, 145],
            fill: false,
            tension: 0.4,
            borderWidth: 2,
          },
        ],
      },

      chartOptions: {
        responsive: true,
        maintainAspectRatio: false, 
        scales: {
          x: {
            beginAtZero: true,
            categoryPercentage: 0.9, 
          },
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 20,
            },
          },
        },
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.manage-class {
  display: flex;
}

.admin-content {
  margin-left: 200px;
  width: calc(100% - 200px);
  display: flex;
  flex-direction: column;
}

.manage-body {
  padding: 20px;
  padding-top: 0px;
}

.events-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 20px;
  gap: 5px;
}

.stats-section {
  flex: 1;
  display: flex;
  gap: 10px;
  margin-top: 0px;
}

.stats-card {
  flex: 1;
  padding: 0px 20px;
  background: linear-gradient(
    180deg,
    rgba(208, 46, 28, 1) 0%,
    rgba(121, 30, 30, 1) 100%
  );
  border-radius: 20px;
  color: white;
}

.stats-card h3 {
  font-size: 15px;
  font-weight: bold;
  
}

.stats-card p {
  font-size: 20px;
  margin-top: 0px;
  float: right;
  font-weight: bold;
}

.chart-item {
  margin-top: 20px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  height: 50vh; 
  width: 99%; 
  display: flex;
  flex-direction: column; 
  justify-content: flex-start; 
}

.chart-title {
  margin-bottom: 10px; 
  font-size: 18px; 
  color: #333; 
}

.chart-item canvas {
  width: 100% !important; 
  height: auto !important;
  margin-bottom:45px !important; 
}

.chart-item h3 {
  background: #d02e1c;
    background: linear-gradient(to bottom, #d02e1c 23%, #791e1e 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-left: 20px;
    font-size: 16px;
}
</style>
