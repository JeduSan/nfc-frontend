<template>
    <header class="admin-header">
      <div class="header-left">
     
        <img src="@/assets/logo.png" alt="Logo" class="logo" /> 
        <h1>CITHM NFC ATTENDANCE MONITORING SYSTEM</h1>
        
      </div>
      <div class="header-right">
        <div class="user-icon" @click="toggleDropdown">
          <i class="fas fa-user-circle"></i> 
          <div v-if="dropdownVisible" class="dropdown-menu">
            <button @click="goToProfile">Profile</button>
            <button @click="logout">Logout</button>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dropdownVisible: false,
      };
    },
    methods: {
      toggleDropdown() {
        this.dropdownVisible = !this.dropdownVisible;
      },
      goToProfile() {
        // Redirect to the profile page or perform another action
        this.$router.push("/profile");
      },
      logout() {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userRole");
        this.$router.push("/login");
      },
    },
  };
  </script>
  
  <style scoped>
  body {
    background-color: #eeee;
  }
  
  .admin-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffff;
    padding: 15px 20px;
    margin: 15px 18px;
    border-radius: 15px;
  }
  
  .header-left {
    display: flex;
    align-items: center;
  }
  
  .header-left .logo {
    width: 40px; 
    height: 40px;
    margin-right: 10px;
  }
  
  .header-left h1 {
    margin: 0;
    font-size: 15px;
    background: #d02e1c;
    background: linear-gradient(to bottom, #d02e1c 23%, #791e1e 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .user-icon {
    position: relative;
    cursor: pointer;
    color: rgb(167, 37, 37);
  }
  
  .user-icon i {
    font-size: 20px;
    background: #d02e1c;
    background: linear-gradient(to bottom, #d02e1c 23%, #791e1e 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    width: 150px;
    z-index: 100;
  }
  
  .dropdown-menu button {
    background-color: transparent;
    background: #D02E1C;
    background: linear-gradient(to bottom, #D02E1C 23%, #791E1E 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: none;
    padding: 10px;
    text-align: left;
    width: 100%;
    cursor: pointer;
  }
  
  .dropdown-menu button:hover {
    background-color: #f1f1f1;
  }
  </style>
  