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

        <section>

        </section>

      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar.vue";
import AdminHeader from "@/components/AdminHeader.vue";

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
          date: { month: "Jan", day: 21 },
          details: { name: "Enverga Foundation", time: "7:00 am - 4:00 pm" },
        },
        {
          date: { month: "Jan", day: 21 },
          details: { name: "Enverga Foundation", time: "7:00 am - 4:00 pm" },
        },
      ],
      calendarDays: this.generateCalendar(1, 2025),
      weekDays: ["S", "M", "T", "W", "TH", "F", "ST"],
    }

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
  },
};
</script>

<style scoped>
.admin-dashboard {
  display: flex;
}

.admin-content {
  margin-left: 200px;
  width: calc(100% - 200px);
  display: flex;
  flex-direction: column;
}

.dashboard-body {
  padding: 20px;
  padding-top: 0px;
}

.events-section {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  gap: 5px;
}

.events-group {
  flex: 1;
}

.upcoming-events {
  background: white;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.upcoming-events h3 {
  font-size: 14px;
  font-weight: bold;
  color: #ffff;
  background: linear-gradient(180deg, rgba(208, 46, 28, 1) 0%, rgba(121, 30, 30, 1) 100%);
  padding: 10px;
  border-radius: 10px;
  text-align: center;
}

.event {
  display: flex;
  margin-top: 10px;
  background-color: #F4F4F4;
  border-radius: 10px;
}

.event-date {
  background: rgb(208, 46, 28);
  background: linear-gradient(180deg, rgba(208, 46, 28, 1) 0%, rgba(121, 30, 30, 1) 100%);
  color: white;
  text-align: center;
  border-radius: 10px;
  padding: 5px;
  width: 50px;
  margin-right: 0;
}

.event-date p {
  margin: 0;
}

.date {
  margin: 0px;
}

.event-details {
  flex: 1;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.event-details p {
  margin: 5px 0;
  font-size: 13px;
  color: #5C5756;
  text-align: left;
}

.stats-section {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.stats-card {
  flex: 1;
  padding: 0px 20px;
  background: linear-gradient(180deg, rgba(208, 46, 28, 1) 0%, rgba(121, 30, 30, 1) 100%);
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

.calendar {
  flex: 1;
  margin-left: 20px;
  background: white;
  border-radius: 8px;
  padding: 5px 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  font-size: 12px;
  margin-left: 5px;
  padding-bottom: 20px;
  align-content: center;
}

.calendar h3 {
  font-size: 14px;
  font-weight: bold;
  color: #D02E1C;
  text-align: center;
}

/* Style for weekdays */
.calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  margin-bottom: 0;
  margin-top: -15px;
  font-size: 10px;
}

.calendar-weekday p {
  text-align: center;
  font-weight: bold;
  color: #5C5756;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  margin-top: 10px;
}

.calendar-grid p {
  text-align: center;
  padding: 3px;
  border-radius: 4px;
  font-size: 10px;
}

.calendar-day {
  background: #f0f0f0;
  border-radius: 4px;
}

.calendar-day.event-day {
  background: #D02E1C;
  color: white;
}


.calendar-day.sunday {
  background-color: rgb(102, 102, 102);
  color: white;
}

.selected-date {
  background: #D02E1C;
  color: white;
}
</style>