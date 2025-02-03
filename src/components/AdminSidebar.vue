<template>
  <aside class="admin-sidebar">
    <ul>
      <li class="menu-item" :class="{ active: $route.path === '/admin' }">
        <router-link to="/admin" exact-active-class="active-link">
          <i class="fas fa-th-large icon"></i>
          <span class="menu-text">Dashboard</span>
        </router-link>
      </li>
      <li class="menu-item" :class="{ active: $route.path === '/admin/manage-class' }">
        <router-link to="/admin/manage-class" exact-active-class="active-link">
          <i class="fas fa-users icon"></i>
          <span class="menu-text">Manage Class</span>
        </router-link>
      </li>
      <li class="menu-item" :class="{ active: $route.path === '/admin/manage-teacher' }">
        <router-link to="/admin/manage-teacher" exact-active-class="active-link">
          <i class="fas fa-chalkboard-teacher icon"></i>
          <span class="menu-text">Manage Teacher</span>
        </router-link>
      </li>
      <li class="menu-item" :class="{ active: $route.path === '/admin/manage-student' }">
        <router-link to="/admin/manage-student" exact-active-class="active-link">
          <i class="fas fa-user-graduate icon"></i>
          <span class="menu-text">Manage Student</span>
        </router-link>
      </li>
      <li class="menu-item" :class="{ active: $route.path === '/admin/manage-events' }">
        <router-link to="/admin/manage-events" exact-active-class="active-link">
          <i class="fas fa-calendar-alt icon"></i>
          <span class="menu-text">Manage Events</span>
        </router-link>
      </li>
      <li class="menu-item" :class="{ active: $route.path === '/admin/analytics' }">
        <router-link to="/admin/analytics" exact-active-class="active-link">
          <i class="fas fa-chart-line icon"></i>
          <span class="menu-text">Analytics</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "AdminSidebar",
};
</script>

<style scoped>
.admin-sidebar {
  width: 200px;
  height: 93vh; 
  background-color: #fff;
  padding-top: 20px;
  position: fixed;
  left: 0;
  top: 0;
  margin: 15px 10px;
  border-radius: 20px;
  transition: width 0.3s;
  /* z-index: 1000; Ensure the sidebar stays above other elements */
  overflow-y: auto; /* Allow the sidebar to scroll if the content exceeds the height */
}

.admin-sidebar ul {
  list-style-type: none;
  padding: 0;
}

.admin-sidebar ul li {
  padding: 15px;
  text-align: left;
  color: #d02e1c;
}

.admin-sidebar ul li a {
  color: #d02e1c;
  text-decoration: none;
  font-size: 16px;
}

.admin-sidebar .menu-item {
  padding: 15px;
  text-align: left;
}

.admin-sidebar .menu-item i.icon {
  margin-right: 10px; /* Add space between the icon and the text */
}

.admin-sidebar ul li a:hover {
  color: #d02e1c;
}

.admin-sidebar .menu-item.active {
  background: rgb(208, 46, 28);
  background: linear-gradient(180deg, rgba(208, 46, 28, 1) 0%, rgba(121, 30, 30, 1) 100%);
  color: white !important;
  border-radius: 20px;
  margin: 5px 10px;
}

.admin-sidebar .menu-item .active-link {
  color: white;
}

/* Hide the text on mobile */
.admin-sidebar .menu-text {
  display: inline;
}

/* Media Query for mobile view */
@media (max-width: 768px) {
  .admin-sidebar {
    width: auto; /* Keep the sidebar width fixed even on mobile */
    height: 93vh; /* Ensure the sidebar height is still full viewport */
  }

  .admin-sidebar ul li {
    text-align: center;
    padding: 10px;
  }

  .admin-sidebar .menu-text {
    display: none; 
  }

  .admin-sidebar .menu-item {
    padding: 10px;
  }

  .admin-sidebar ul li a {
    font-size: 14px; /* Adjust font size for mobile */
  }

  .admin-sidebar .menu-item.active {
    border-radius: 20px;
    margin: 0;
  }

  .admin-sidebar .menu-item i.icon {
    margin-right: 0; 
  }
}

</style>
