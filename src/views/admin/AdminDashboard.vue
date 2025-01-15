<template>
  <div class="admin-dashboard">
    <AdminSidebar />
    <div class="admin-content">
      <AdminHeader />
      <div class="dashboard-body">
        <section class="events-section">
          <section class="events-group">
            <div class="upcoming-events">
              <h3>Upcoming Events</h3>
              <div class="event" v-for="(event, index) in events" :key="index">
                <div class="event-date">
                  <div class="date">
                    <p>{{ event.date.month }}</p>
                    <p>{{ event.date.day }}</p>
                  </div>
                </div>
                <div class="event-details">
                  <p>{{ event.details.name }} | {{ event.details.time }}</p>
                </div>
              </div>
            </div>

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
            </section>
          </section>

          <div class="calendar">
            <h3>January</h3>
            <div class="calendar-weekdays">
              <div v-for="(day, index) in weekDays" :key="index" class="calendar-weekday">
                <p>{{ day }}</p>
              </div>
            </div>
            <div class="calendar-grid">
              <div v-for="(day, index) in calendarDays" :key="index" class="calendar-day" :class="{
                'event-day': hasEvent(day),
                'saturday': index % 7 === 6,
                'sunday': index % 7 === 0,
              }">
                <p>{{ day }}</p>
              </div>
            </div>
          </div>
        </section>

        <section class="chart-section">
          <div class="chart-item">
            <h3>Event Attendance</h3>
            <BarChart :data="eventAttendanceData" :options="chartOptions" />
          </div>
          <div class="chart-item">
            <h3>Year Level Attendance</h3>
            <LineChart :data="yearLevelAttendanceData" :options="chartOptions" />
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar.vue";
import AdminHeader from "@/components/AdminHeader.vue";
import '../../styles/dashboard.css';
import { Bar, Line } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";

// Registering Chart.js components globally
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement);

export default {
  name: "AdminDashboard",
  data() {
    return {
      events: [
        {
          date: { month: "Jan", day: 21 },
          details: { name: "Enverga Foundation", time: "7:00 am - 4:00 pm" },
        },
        {
          date: { month: "Jan", day: 22 },
          details: { name: "Enverga Foundation", time: "7:00 am - 4:00 pm" },
        },
        {
          date: { month: "Jan", day: 23 },
          details: { name: "Enverga Foundation", time: "7:00 am - 4:00 pm" },
        },
      ],
      calendarDays: this.generateCalendar(1, 2025),
      weekDays: ["S", "M", "T", "W", "TH", "F", "ST"],
      
      // Bar chart data: Attendance per year level per event
      eventAttendanceData: {
        labels: ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5', 'Event 6', 'Event 7', 'Event 8', 'Event 9' ], // Event labels
        datasets: [
          {
            label: '1st Year',
            backgroundColor: '#D02E1C', // Red for Freshmen
            data: [65, 75, 60, 56, 79, 20, 95, 88, 102], // Attendance data for Freshmen
            barThickness: 10,  // controls individual bar width
          },
          {
            label: '2nd Year',
            backgroundColor: '#3B82F6', // Blue for Sophomores
            data: [60, 80, 65, 34, 89, 49, 101, 121, 78], // Attendance data for Sophomores
            barThickness: 10,
          },
          {
            label: '3rd Year',
            backgroundColor: '#10B981', // Green for Juniors
            data: [70, 85, 40, 78, 95, 36, 123, 88, 81], // Attendance data for Juniors
            barThickness: 10,
          },
          {
            label: '4th Year',
            backgroundColor: '#F59E0B', // Yellow for Seniors
            data: [81, 94, 42, 45, 95, 36, 65, 76, 83], // Attendance data for Seniors
            barThickness: 10,
          },
        ],
      },
      
      // Example months with total attendance data
      yearLevelAttendanceData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'], // Months
        datasets: [
          {
            label: 'All CITHM Students',
            borderColor: '#D02E1C', // Red for Freshmen
            data: [80, 93, 89, 113, 109, 145], // Total attendance for Freshmen in January (example: sum of attendance from events)
            fill: false,
            tension: 0.4,
            borderWidth: 2,
          },
        ],
      },

      chartOptions: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
            categoryPercentage: 0.8,  // Adjust this value to control the width of the category space
          },
          y: {
            beginAtZero: true,
            max: 200, // Max Y value (percentage)
          },
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: {
                size: 12,
              },
            },
          },
        },
        layout: {
          padding: {
            top: 20,
          },
        },
        barPercentage: 0.7,  // Controls space between bars (lower is more space)
      },
    };
  },

  methods: {
    generateCalendar(month, year) {
      const firstDayOfMonth = new Date(year, month - 1, 1);
      const lastDayOfMonth = new Date(year, month, 0);
      const firstDayOfWeek = firstDayOfMonth.getDay();
      const totalDaysInMonth = lastDayOfMonth.getDate();
      const days = [];
      for (let i = 0; i < firstDayOfWeek; i++) {
        days.push(null);
      }
      for (let day = 1; day <= totalDaysInMonth; day++) {
        days.push(day);
      }
      return days;
    },

    hasEvent(day) {
      return this.events.some((event) => event.date.day === day);
    },
  },

  components: {
    AdminSidebar,
    AdminHeader,
    BarChart: Bar,
    LineChart: Line,
  },
};
</script>


