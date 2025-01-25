<template>
  <div class="background_container">
    <div class="background">
      <!-- SVG Background -->

      <div>
        <svg class="svg_element_white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
          preserveAspectRatio="none">
          <path d="M 0 0
           L 0 50
           C -1 60, 10 61, 45 77
           C 45 77, 50 79, 55 77
           C 90 61, 101 60, 100 50
           L 100 0
           Z" fill="white" />
        </svg>
      </div>
      <div>
        <svg class="svg_element_maroon_line" viewBox="0 0 100 100" preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M -1 49 
           L 48 70
           C 48 70, 50 71, 52 70
           L 101 49" stroke="maroon" stroke-width="1" fill="none" />
        </svg>
      </div>



      <!-- Card Content -->
      <div class="card">
        <div class="card_container">
          <img src="@/assets/logo.png" alt="School Logo" class="card_logo_container" />
          <h1 class="card_title_text">CITHM ATTENDANCE LOGIN</h1>
          <form @submit.prevent="handleLogin" class="form_container">
            <input type="text" placeholder="Student ID" id="studentId" class="input" />
            <input type="text" placeholder="Password" id="password" class="input" />
            <div class="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
            <div class="btn-wrapper">
              <button class="btn" type="submit" href="#">LOG IN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentId: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      // Replace with your login logic
      console.log("Student ID:", this.studentId, "Password:", this.password);
    },
  },
};
</script>

<style scoped>
.background_container {
  background: linear-gradient(to top, #7f1d1d, #b91c1c, #b91c1c);
  min-height: 100vh;
  background-attachment: fixed;
  background-size: cover;
}

.background {
  height: 80ch;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}

.svg_element_white {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.svg_element_maroon_line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;

}

.card {
  position: absolute;
  width: 100%;
  max-width: 42rem;
  /* Equivalent to max-w-2xl in Tailwind (2xl is 42rem) */
  border-radius: 0.5rem;
  /* Equivalent to rounded-lg (lg is 0.5rem) */
}

.card_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  /* Equivalent to p-6 (6 * 0.25rem = 1.5rem) */
}

.card_logo_container {
  width: 80px;
  /* Equivalent to w-20 (20 * 0.25rem = 5rem) */
  margin-bottom: 15px;
  /* Equivalent to mb-4 (4 * 0.25rem = 1rem) */
}

.card_title_text {
  font-size: 1.25rem;
  /* Equivalent to text-xl (1.25rem) */
  font-weight: bold;
  /* Equivalent to font-bold */
  color: #b91c1c;
  /* Equivalent to text-red-700 (Tailwind’s red-700 is #b91c1c) */
  margin-bottom: 1.5rem;
  /* Equivalent to mb-6 (6 * 0.25rem = 1.5rem) */
}

.form_container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px;
}

/* Input field styles */
.input {
  width: 100%;
  padding: 15px;
  border: 1px solid #d1d5db;
  background-color: #e2e8f0;
  margin-bottom: 10px;
  border-radius: 50px;
  text-align: left 10px;
  box-sizing: border-box;
}

.input:focus {
  outline: none;
  border-color: #c1121f;
}

/* Placeholder styling */
.input::placeholder {
  color: #6b7280;
}

/* Forgot Password link */
.forgot-password {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.forgot-password a {
  font-size: 15px;
  color: #6b7280;
  text-decoration: none;
  transition: color 0.3s ease;
}

.forgot-password a:hover {
  color: #7f1d1d;
  text-decoration: underline;
}

/* Button styling */
.btn {
  min-width: 50%;
  padding: 1rem;
  border-radius: 50px;
  background: linear-gradient(to top, #7f1d1d, #c1121f, #7f1d1d);
  color: white;
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.btn:active {
  background: linear-gradient(to bottom, #3b0c1d, #7f1d1d, #3b0c1d);
}

/* Padding for button */
.btn-wrapper {
  text-align: center;
}
</style>