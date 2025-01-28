<template>
  <div class="container">
    <Sidebar />
    <div class="content">
      <Header />
      <div class="body">
        <section class="section">
          <section class="group">

            <section class="stats">
              <div class="card">
                <h3>Total Class</h3>
                <p>10</p>
              </div>
              <div class="card">
                <h3>Total Students</h3>
                <p>10</p>
              </div>
              
            </section>
            
            <div class="box">
              <h3>Upcoming Events</h3>
              <div class="item" v-for="(event, index) in events" :key="index">
                <div class="item-date">
                  <div class="date">
                    <p>{{ event.date.month }}</p>
                    <p>{{ event.date.day }}</p>
                  </div>
                </div>
                <div class="item-details">
                  <p>{{ event.details.name }} | {{ event.details.time }}</p>
                </div>
              </div>
            </div>

            
          </section>

          <div class="calendar-box">
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

        <section class="chart">
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
import Sidebar from "@/components/TeacherSidebar.vue";
import Header from "@/components/AdminHeader.vue";
import '../../styles/dashboard.css';
import { Bar, Line } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement);

export default {
  name: "Dashboard",
  data() {
    return {
      events: [
        { date: { month: "Jan", day: 21 }, details: { name: "Enverga Foundation", time: "7:00 am - 4:00 pm" } },
        { date: { month: "Jan", day: 22 }, details: { name: "Enverga Foundation", time: "7:00 am - 4:00 pm" } },
        { date: { month: "Jan", day: 23 }, details: { name: "Enverga Foundation", time: "7:00 am - 4:00 pm" } },
      ],
      calendarDays: this.generateCalendar(1, 2025),
      weekDays: ["S", "M", "T", "W", "TH", "F", "ST"],
      eventAttendanceData: {
        labels: ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5', 'Event 6', 'Event 7', 'Event 8', 'Event 9'],
        datasets: [
          { label: '1st Year', backgroundColor: '#D02E1C', data: [65, 75, 60, 56, 79, 20, 95, 88, 102], barThickness: 10 },
          { label: '2nd Year', backgroundColor: '#3B82F6', data: [60, 80, 65, 34, 89, 49, 101, 121, 78], barThickness: 10 },
          { label: '3rd Year', backgroundColor: '#10B981', data: [70, 85, 40, 78, 95, 36, 123, 88, 81], barThickness: 10 },
          { label: '4th Year', backgroundColor: '#F59E0B', data: [81, 94, 42, 45, 95, 36, 65, 76, 83], barThickness: 10 },
        ],
      },
      yearLevelAttendanceData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          { label: 'All CITHM Students', borderColor: '#D02E1C', data: [80, 93, 89, 113, 109, 145], fill: false, tension: 0.4, borderWidth: 2 },
        ],
      },
      chartOptions: {
        responsive: true,
        scales: {
          x: { beginAtZero: true, categoryPercentage: 0.8 },
          y: { beginAtZero: true, max: 200 },
        },
        plugins: {
          legend: { position: 'top', labels: { font: { size: 12 } } },
        },
        layout: { padding: { top: 20 } },
        barPercentage: 0.7,
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
    Sidebar,
    Header,
    BarChart: Bar,
    LineChart: Line,
  },
};
</script>
