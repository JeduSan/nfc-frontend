<template>
    <div class="dashboard">
      <section class="profile-section">
        <div class="profile-card">
          <img :src="profileImage" alt="Profile" class="profile-image" />
          <div class="profile-details">
            <h2>Seki Miji D. Moshi | A00-001</h2>
            <p>2nd year BSCS</p>
            <p>Manuel S. Enverga University Foundation Candelaria Inc.</p>
           
            <button class="edit-profile">Update Password</button>
          </div>
        </div>
      </section>
  
      <section class="password-section">
        <h3>Change Password</h3>
        <div class="password-form">
          <input type="password" placeholder="New Password" class="password-input" />
          <input type="password" placeholder="Confirm Password" class="password-input" />
        
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import profileImage from "@/assets/sample-profile.jpg";
  
  export default {
    name: "Profile",
    data() {
      return {
        profileImage,
      };
    },
   
  };
  </script>
  
  <style scoped>
  .dashboard {
    font-family: Arial, sans-serif;
    color: #333;
    margin: auto;
    padding: 5px 20px;
    margin-bottom: 20%;
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
    background: #d02e1c;
    background: linear-gradient(to bottom, #d02e1c 23%, #791e1e 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }
  
  .profile-details p {
    font-size: 13px;
    margin-top: -10px;
    color: #5c5756;
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
  
  .password-section {
    background-color: white;
    padding:5px 20px 25px;
    border-radius: 15px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .password-section h3 {
    font-size: 16px;
    margin-bottom: 15px;
    color: #d02e1c;
  }
  
  .password-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .password-input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
  }
  
  </style>
  