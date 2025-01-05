<template> 
    <div class="content">
      <!-- Event History Section -->
      <section class="event-history-section">
        <div class="event-history">
          <h3>Event History</h3>
          <div class="event-item" v-for="(event, index) in events" :key="index">
            <div class="event-date">
              <p class="month">{{ event.date.month }}</p>
              <p class="day">{{ event.date.day }}</p>
            </div>
            <div class="event-details">
              <p>{{ event.name }} | {{ event.time }}</p>
              <div class="attendance">
                <p>
                  <strong>Morning Attendance:</strong>
                  <span :class="{'present': event.morning.status === 'Present', 'absent': event.morning.status === 'Absent'}">
                    {{ event.morning.status }} | {{ event.morning.time }}
                  </span>
                </p>
                <p>
                  <strong>Afternoon Attendance:</strong>
                  <span :class="{'present': event.afternoon.status === 'Present', 'absent': event.afternoon.status === 'Absent'}">
                    {{ event.afternoon.status }} | {{ event.afternoon.time }}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "AttendanceMonitoring",
    data() {
      return {
        events: [
          {
            date: { month: "Dec", day: 7 },
            name: "Year End Party",
            time: "8:00 am - 6:00 pm",
            morning: { status: "Present", time: "08:03 am" },
            afternoon: { status: "Present", time: "01:23 pm" },
          },
          {
            date: { month: "Dec", day: 7 },
            name: "Year End Party",
            time: "8:00 am - 6:00 pm",
            morning: { status: "Present", time: "08:03 am" },
            afternoon: { status: "Absent", time: "--:-- pm" },
          },
          {
            date: { month: "Dec", day: 7 },
            name: "Year End Party",
            time: "8:00 am - 6:00 pm",
            morning: { status: "Absent", time: "--:-- pm" },
            afternoon: { status: "Absent", time: "--:-- pm" },
          },
          {
            date: { month: "Dec", day: 7 },
            name: "Year End Party",
            time: "8:00 am - 6:00 pm",
            morning: { status: "Present", time: "08:03 am" },
            afternoon: { status: "Absent", time: "--:-- pm" },
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .content {
    font-family: Arial, sans-serif;
    color: #333;
    margin: auto;
    padding: 5px 20px;
    margin-bottom: 20%;
  }
  
  .event-history-section {
    margin-top: 15px;
  }
  
  .event-history {
    background: white;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .event-history h3 {
    font-size: 14px;
    font-weight: bold;
    color: white;
    background: linear-gradient(180deg, rgba(208, 46, 28, 1) 0%, rgba(121, 30, 30, 1) 100%);
    padding: 10px;
    border-radius: 10px;
    text-align: center;
  }
  
  .event-item {
    display: flex;
    margin-top: 10px;
    padding: 0;
    background-color: #f4f4f4;
    border-radius: 8px;
  }
  
  .event-date {
    text-align: center;
    background: linear-gradient(180deg, rgba(208, 46, 28, 1) 0%, rgba(121, 30, 30, 1) 100%);
    color: white;
    border-radius: 8px;
    padding: 7px;
    min-width: 50px;
  }
  
  .event-date .month {
    font-size: 12px;
    
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
    margin: 5px 10px 10px;
  }
  
  .attendance p {
    margin: 5px 0;
    font-size: 12px;
  }
  
  .present {
    color: green;
  }
  
  .absent {
    color: red;
  }
  </style>
  