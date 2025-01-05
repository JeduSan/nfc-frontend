<template>
    <header class="header">
      <button @click="logout">
        <i class="fa-solid fa-user"></i> Logout
      </button>
    </header>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
       
        this.$router.push('/');
      }
    }
  }
  </script>
  
  <style scoped>
  .header {
  background: rgb(208, 46, 28);
  background: linear-gradient(180deg, rgba(208, 46, 28, 1) 0%, rgba(121, 30, 30, 1) 100%);
  padding: 10px;
  color: white;
  display: flex;
  justify-content: flex-end; 
  align-items: center;
  border-bottom-left-radius: 30px; 
  border-bottom-right-radius: 30px; 
}

  button {
    background-color: transparent;
    color: white;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    font-size: 16px; 
    display: flex;
    align-items: center;
  }
  
  button i {
    margin-right: 8px; 
  }
  
  button:hover {
    background-color: rgba(255, 255, 255, 0.2); 
  }
  </style>
   