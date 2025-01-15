<template>
    <div class="register-student">
      <AdminSidebar />
    
      <div class="page-content">
        <AdminHeader />
    
        <div class="form-container">
          <h1>Register Student</h1>
    
          <div class="form-content">
            <!-- Left Section -->
            <div class="left-section">
              <div class="photo-upload">
                <img :src="photoUrl" alt="Profile" class="profile-photo" />
                <button class="upload-button" @click="triggerFileInput">Upload Photo</button>
                <!-- Hidden File Input -->
                <input type="file" ref="fileInput" @change="handleFileChange" style="display: none" />
              </div>
              <button class="register-button">+ Register</button>
            </div>
    
            <!-- Right Section -->
            <div class="right-section">
              <div class="input-group">
                <label for="lastName">Last Name</label>
                <input id="lastName" type="text" placeholder="Input Last Name" />
              </div>
              <div class="input-group">
                <label for="firstName">First Name</label>
                <input id="firstName" type="text" placeholder="Input First Name" />
              </div>
              <div class="input-group">
                <label for="middleName">Middle Name</label>
                <input id="middleName" type="text" placeholder="Input Middle Name" />
              </div>
              <div class="input-group">
                <label for="studentId">Student ID</label>
                <input id="studentId" type="text" placeholder="Input Student ID" />
              </div>
              <div class="input-group">
                <label for="year">Year</label>
                <input id="year" type="text" placeholder="Input Year" />
              </div>
              <div class="input-group">
                <label for="course">Course</label>
                <input id="course" type="text" placeholder="Input Course" />
              </div>
              <div class="input-group">
                <label for="nfcNumber">NFC Number</label>
                <input id="nfcNumber" type="text" placeholder="Input NFC Number" />
                <button class="scan-button">Scan Card</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
    
  <script>
  import AdminSidebar from "@/components/AdminSidebar.vue";
  import AdminHeader from "@/components/AdminHeader.vue";
  
  export default {
    name: "RegisterStudent",
    components: {
      AdminSidebar,
      AdminHeader,
    },
    data() {
      return {
        photoUrl: "default-avatar.png", // Default avatar image
      };
    },
    methods: {
      // Trigger the hidden file input when the upload button is clicked
      triggerFileInput() {
        this.$refs.fileInput.click();
      },
      // Handle the file selection
      handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.photoUrl = e.target.result; // Update the photoUrl to the selected file's data URL
          };
          reader.readAsDataURL(file); // Convert the selected file to a data URL
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .register-student {
    display: flex;
  }
  
  .page-content {
    width: calc(100% - 220px); /* Adjust for sidebar width */
    margin-left: 220px;
  }
  
  .form-container {
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 30px;
    width: 95%;
    margin: auto;
  }
  
  h1 {
    font-size: 28px;
    color: #c62828;
    margin-bottom: 20px;
  }
  
  .form-content {
    display: flex;
    gap: 30px;
  }
  
  .left-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  .profile-photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid #c62828;
    background-color: #eeeeee;
  }
  
  .upload-button,
  .register-button {
    background-color: #c62828;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .right-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    flex-grow: 1;
  }
  
  .input-group {
    display: flex;
    flex-direction: column;
  }
  
  label {
    font-size: 14px;
    color: #c62828;
  }
  
  input {
    border: none;
    border-bottom: 2px solid #c62828;
    padding: 8px;
    font-size: 14px;
  }
  
  .scan-button {
    background-color: #9e9e9e;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 14px;
    margin-top: 10px;
    cursor: pointer;
  }
  </style>
  