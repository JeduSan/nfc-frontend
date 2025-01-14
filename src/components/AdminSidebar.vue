<template>
    <aside class="admin-sidebar">
      <ul>
        <li class="menu-item" :class="{ active: $route.path === '/admin' }">
          <router-link to="/admin" exact-active-class="active-link">
            <i class="fas fa-th-large icon"></i>
            Dashboard
          </router-link>
        </li>
        <li class="menu-item" :class="{ active: $route.path === '/admin/manage-class' }">
          <router-link to="/admin/manage-class" exact-active-class="active-link">
            <i class="fas fa-users icon"></i>
            Manage Class
          </router-link>
        </li>
        <li class="menu-item" :class="{ active: $route.path === '/admin/manage-teacher' }">
          <router-link to="/admin/manage-teacher" exact-active-class="active-link">
            <i class="fas fa-chalkboard-teacher icon"></i>
            Manage Teacher
          </router-link>
        </li>
        <li class="menu-item" :class="{ active: $route.path === '/admin/manage-student' }">
          <router-link to="/admin/manage-student" exact-active-class="active-link">
            <i class="fas fa-user-graduate icon"></i>
            Manage Student
          </router-link>
        </li>
        <li class="menu-item" :class="{ active: $route.path === '/admin/manage-events' }">
          <router-link to="/admin/manage-events" exact-active-class="active-link">
            <i class="fas fa-calendar-alt icon"></i>
            Manage Events
          </router-link>
        </li>
        <li class="menu-item" :class="{ active: $route.path === '/admin/analytics' }">
          <router-link to="/admin/analytics" exact-active-class="active-link">
            <i class="fas fa-chart-line icon"></i>
            Analytics
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
    background-color: #ffff;
    padding-top: 20px;
    position: fixed;
    left: 0;
    top: 0;
    margin: 15px 10px;
    border-radius: 20px;
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
  
  .admin-sidebar ul li a:hover {
    color: #d02e1c;
  }
  
  
  .admin-sidebar .menu-item.active {
    background: rgb(208,46,28);
    background: linear-gradient(180deg, rgba(208,46,28,1) 0%, rgba(121,30,30,1) 100%);
    color: white !important; 
    border-radius: 20px;
    margin: 5px 10px;
  }
  
  
  .admin-sidebar .menu-item .active-link {
    color: white; 
  
  }
  
  </style>
  