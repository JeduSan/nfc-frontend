<template>
  <div class="dashboard">
    <section class="profile-section">
      <div class="profile-card">
        <img :src="profileImage" alt="Profile" class="profile-image" />
        <div class="profile-details">
          <h2>Seki Miji D. Moshi | A00-001</h2>
          <p>2nd year BSCS</p>
          <p>Manuel S. Enverga University Foundation Candelaria Inc.</p>
          <button class="edit-profile" @click="goToProfile">Edit Profile</button>
        </div>
      </div>
    </section>

    <!-- Stats Cards Section -->
    <section class="stats-section">
      <div class="stats-card">
        <h3>Events Present</h3>
        <p>5</p>
      </div>
      <div class="stats-card">
        <h3>Events Absent</h3>
        <p>1</p>
      </div>
    </section>

    <!-- Recent Events Section -->
    <section class="recent-events-section">
      <div class="recent-events">
        <h3>Recent Event</h3>
        <div
          class="recent-event"
          v-for="(event, index) in recentEvents"
          :key="index"
        >

        
          <div class="event-date">
            <p class="month">{{ event.date.month }}</p>
            <p class="day">{{ event.date.day }}</p>
          </div>
          <div class="event-details">
            <p>{{ event.name }} | {{ event.time }}</p>
          </div>
          <div
            class="event-status"
            :class="{ attended: event.status === 'Attended', missed: event.status === 'Missed' }"
          >
            <p>{{ event.status }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Events Section -->
    <section class="events-section">
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

      <div class="calendar">
        <h3>January</h3>
        <div class="calendar-weekdays">
          <div v-for="(day, index) in weekDays" :key="index" class="calendar-weekday">
            <p>{{ day }}</p>
          </div>
        </div>
        <div class="calendar-grid">
          <div
            v-for="(day, index) in calendarDays"
            :key="index"
            class="calendar-day"
            :class="{
              'event-day': hasEvent(day),
              'saturday': index % 7 === 6,
              'sunday': index % 7 === 0,
            }"
          >
            <p>{{ day }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import profileImage from "@/assets/sample-profile.jpg";

export default {
  name: "Dashboard",
  data() {
    return {
      profileImage,
      recentEvents: [
        {
          date: { month: "Dec", day: 7 },
          name: "CITHM Year End Party",
          time: "8:00 am - 6:00 pm",
          status: "Attended",
        },
        {
          date: { month: "Nov", day: 27 },
          name: "CITHM Day",
          time: "8:00 am - 6:00 pm",
          status: "Missed",
        },
        {
          date: { month: "Nov", day: 10 },
          name: "Food Festival",
          time: "8:00 am - 6:00 pm",
          status: "Missed",
        },
      ],
      events: [
        {
          date: { month: "Jan", day: 21 },
          details: { name: "Enverga Foundation", time: "8:00 am - 6:00 pm" },
        },
        {
          date: { month: "Jan", day: 22 },
          details: { name: "Workshop on IT", time: "9:00 am - 12:00 pm" },
        },
      ],
      calendarDays: this.generateCalendar(1, 2025),
      weekDays: ["S", "M", "T", "W", "T", "F", "S"],
    };
  },
  methods: {
    goToProfile() {
      this.$router.push("/profile");
    },
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
};
</script>

<style scoped>
.dashboard {
  font-family: Arial, sans-serif;
  color: #333;
  margin: auto;
  padding: 5px 20px;
  margin-bottom:20%;
}

.profile-section {
  margin: 10px 0;
}

.profile-card {
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 15px;
}

.profile-image {
  border-radius: 15px;
  width: 100px;
  height: 100px;
  margin-right: 20px;
  margin-top: -25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3); 
}

.profile-details h2 {
  font-size: 18px;
  background: #D02E1C;
  background: linear-gradient(to bottom, #D02E1C 23%, #791E1E 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

.profile-details p {
  font-size: 13px;
  margin-top: -10px;
  color: #5C5756;
  font-weight: bold;
}

.profile-details {
  flex: 1;
}

.edit-profile {
  background: rgb(208, 46, 28);
  background: linear-gradient(180deg, rgba(208, 46, 28, 1) 0%, rgba(121, 30, 30, 1) 100%);
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  float: right;
}

.stats-section {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.stats-card {
  flex: 1;
  padding: 5px 20px;
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
  margin-top: 10px;
  float: right;
  font-weight: bold;
}

.events-section {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.upcoming-events {
  flex: 1;
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
  margin-right:0;
}

.event-date p {
  margin: 0;
}

.date {
  margin:10px;
}

.event-details {
  flex: 1;  
  margin-left: 0;  
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
.calendar {
  flex: 1;
  margin-left: 20px;
  background: white;
  border-radius: 8px;
  padding: 5px 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 300px; 
  font-size: 12px;
  margin-left:5px;
  padding-bottom:20px;
}

.calendar h3 {
  font-size: 14px; 
  font-weight: bold;
  color: #D02E1C;
  text-align:center;
}

/* Style for weekdays */
.calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  margin-bottom:0;
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

.recent-events-section {
  margin-top: 15px;
}

.recent-events {
  background: white;
  border-radius: 8px;
  padding: 2px 15px 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.recent-events h3 {
  font-size: 14px;
  font-weight: bold;
  color: white;
  background: linear-gradient(180deg, rgba(208, 46, 28, 1) 0%, rgba(121, 30, 30, 1) 100%);
  padding: 10px;
  border-radius: 10px;
  text-align: center;
}

.recent-event {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 0 10px 0 0 ;

  background-color: #f4f4f4;
  border-radius: 8px;
}

.event-date {
  text-align: center;
  background: rgb(208, 46, 28);
  background: linear-gradient(180deg, rgba(208, 46, 28, 1) 0%, rgba(121, 30, 30, 1) 100%);
  color: white;
  border-radius: 8px;
  padding: 7px;
  min-width: 50px;
  
}

.event-date .month {
  font-size: 12px;
  margin: 0;
}

.event-date .day {
  font-size: 16px;
  margin: 0;
  font-weight: bold;
}

.event-details {
  flex: 1;
  margin-left: 10px;
  font-size: 13px;
  color: #5c5756;
}

.event-status {
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 10px;
}

.event-status.attended {
  color: green;
}

.event-status.missed {
  color: orange;
}
</style>
