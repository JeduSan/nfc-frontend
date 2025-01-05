<template>
    <nav class="bottom-navbar">
      <ul>
        <li :class="{ active: $route.path === '/' }">
          <router-link to="/">
            <i class="fa-solid fa-house"></i>
          </router-link>
        </li>
        <li :class="{ active: $route.path === '/profile' }">
          <router-link to="/profile">
            <i class="fa fa-user"></i>
          </router-link>
        </li>
        <li :class="{ active: $route.path === '/attendance' }">
          <router-link to="/attendance">
            <i class="fa fa-calendar-check"></i>
          </router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "BottomNavbar"
  }
  </script>
  
  <style scoped>
  .bottom-navbar {
    background-color: #ffff;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 0;
  }
  
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  
  li {
    flex: 1;
    text-align: center;
    position: relative; 
  }
  
  li.active::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 40%;
  transform: translateX(-50%); 
  border-bottom: 4px solid #D02E1C; 
  border-radius: 10px; 
  transition: width 0.3s ease, left 0.3s ease; 
}

  
  li i {
    background: #D02E1C;
    background: linear-gradient(to bottom, #D02E1C 23%, #791E1E 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 20px;
    margin-bottom:10px;
  }
  
  router-link {
    color: #333;
    text-decoration: none;
    font-size: 16px;
    display: flex;
    align-items: center;
    padding-bottom: 5px;
  }
  
  router-link i {
    margin-right: 8px; 
    font-size: 20px;
    background: #D02E1C;
    background: linear-gradient(to bottom, #D02E1C 23%, #791E1E 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  router-link:hover {
    color: #007BFF; 
  }
  </style>
  