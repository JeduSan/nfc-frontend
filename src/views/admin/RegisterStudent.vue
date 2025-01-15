<template>
  <div class="register-student">
    <AdminSidebar />
    <div class="page-content">
      <AdminHeader />
      <div class="manage-body">
        <div class="form-container">
          <h1>Register Student</h1>

          <div class="form-content">
            <!-- Left Section -->
            <div class="left-section">
              <div class="photo-section">
                <div class="photo-preview" :class="{ 'placeholder': !photo }">
                  <img v-if="photo" :src="photo" alt="Student Photo" />
                  <div v-else class="placeholder-icon"></div>
                </div>
                <button class="upload-button">Upload Photo</button>
              </div>
              <button class="register-button">+ Register</button>
            </div>

            <!-- Right Section -->
            <div class="right-section">
              <div style="display: flex; gap: 20px;">
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
              </div>
              <div style="display: flex; gap: 20px;">
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
              </div>
              <div style="display: flex; gap: 20px; width: 50%;">
                <div class="input-group2">
                  <label for="nfcNumber">NFC Number</label>
                  <input id="nfcNumber" type="text" placeholder="Input NFC Number" />
                </div>
                <button class="scan-button">Scan Card</button>
              </div>
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
import '../../styles/table.css';

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
  margin-left: 200px;
  width: calc(100% - 200px);
  display: flex;
  flex-direction: column;
}

.manage-body {
  padding: 0px;
}

.form-container {
  display: flex;
    justify-content: space-between;
    background-color: #ffff;
    padding: 10px 20px;
    padding-bottom: 30px;
    margin: 5px 18px;
    border-radius: 15px;
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.3);
    flex-direction: column;
}

h1 {
  font-size: 23px;
  background: linear-gradient(to bottom, #d02e1c 23%, #791e1e 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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

.photo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.photo-preview {
  width: 150px;
  height: 150px;
  border: 1px solid #ddd;
  border-radius: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 1rem;
}

.photo-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.placeholder {
  background-color: #f0f0f0;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.3);
}

.placeholder-icon {
  background-image: url('@/assets/user_placeholder.png');
  background-size: cover;
  background-position: center;
  width: 150px;
  height: 150px;
}

.upload-button {
  background-color: gray;
}
.register-button {
  background: linear-gradient(180deg, rgba(208, 46, 28, 1) 0%, rgba(121, 30, 30, 1) 100%);
}
.upload-button,
.register-button {
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
}

.right-section {
  flex: 1;
  display: flex;
  gap: 20px;
  flex-direction: column;
}

.input-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.input-group2 {
  flex: 2;
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
