<template>
    <aside class="teacher-sidebar">
      <ul>
        <li class="menu-item" :class="{ active: $route.path === '/teacher' }">
          <router-link to="/teacher" exact-active-class="active-link">
            <i class="fas fa-chalkboard-teacher icon"></i>
            <span class="menu-text">Dashboard</span>
          </router-link>
        </li>
        
        <li class="menu-item" :class="{ active: $route.path === '/teacher/class-list' }">
          <router-link to="/teacher/class-list" exact-active-class="active-link">
            <i class="fas fa-users icon"></i>
            <span class="menu-text">Class </span>
          </router-link>
        </li>
  
        
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    name: "TeacherSidebar",
  };
  </script>
  
  <style scoped>
.teacher-sidebar {
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
  z-index: 1000; 
  overflow-y: auto; 
}

.teacher-sidebar ul {
  list-style-type: none;
  padding: 0;
}

.teacher-sidebar ul li {
  padding: 15px;
  text-align: left;
  color: #d02e1c;
}

.teacher-sidebar ul li a {
  color: #d02e1c;
  text-decoration: none;
  font-size: 16px;
}

.teacher-sidebar .menu-item {
  padding: 15px;
  text-align: left;
}

.teacher-sidebar .menu-item i.icon {
  margin-right: 10px; 
}

.teacher-sidebar ul li a:hover {
  color: #d02e1c;
}

.teacher-sidebar .menu-item.active {
  background: rgb(208, 46, 28);
  background: linear-gradient(180deg, rgba(208, 46, 28, 1) 0%, rgba(121, 30, 30, 1) 100%);
  color: white !important;
  border-radius: 20px;
  margin: 5px 10px;
}

.teacher-sidebar .menu-item .active-link {
  color: white;
}

/* Hide the text on mobile */
.teacher-sidebar .menu-text {
  display: inline;
}

/* Media Query for mobile view */
@media (max-width: 768px) {
  .teacher-sidebar {
    width: auto;
    height: 93vh; 
  }

  .teacher-sidebar ul li {
    text-align: center;
    padding: 10px;
  }

  .teacher-sidebar .menu-text {
    display: none; 
  }

  .teacher-sidebar .menu-item {
    padding: 10px;
  }

  .teacher-sidebar ul li a {
    font-size: 14px; 
  }

  .teacher-sidebar .menu-item.active {
    border-radius: 20px;
    margin: 0;
  }

  .teacher-sidebar .menu-item i.icon {
    margin-right: 0; 
  }
}

  </style>
  