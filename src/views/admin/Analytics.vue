<template>
  <div class="manage-class">
    <AdminSidebar />
    <div class="admin-content">
      <AdminHeader />
      <div class="manage-body">
        <section class="events-section">
          <section class="stats-section">
            <div class="stats-card">
              <h3>Total Events</h3>
              <p>10</p>
            </div>
            <div class="stats-card">
              <h3>Total Students</h3>
              <p>10</p>
            </div>
            <div class="stats-card">
              <h3>Total Class</h3>
              <p>10</p>
            </div>
            <div class="stats-card">
              <h3>Total Teachers</h3>
              <p>10</p>
            </div>
          </section>

          <section>
            <h2>Insert Charts Here</h2>
          </section>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar.vue";
import AdminHeader from "@/components/AdminHeader.vue";

export default {
  components: {
    AdminSidebar,
    AdminHeader,
  },
};
</script>

<style scoped>
.manage-class {
  display: flex;
}

.admin-content {
  margin-left: 200px;
  width: calc(100% - 200px);
  display: flex;
  flex-direction: column;
}

.manage-body {
  padding: 20px;
  padding-top: 0px;
}

.events-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 20px;
  gap: 5px;
}

.stats-section {
  flex:1;
  display: flex;
  gap: 10px;
  margin-top: 0px;
}

.stats-card {
  flex: 1;
  padding: 0px 20px;
  background: linear-gradient(180deg, rgba(208, 46, 28, 1) 0%, rgba(121, 30, 30, 1) 100%);
  border-radius: 20px;
  color: white;
}

.stats-card h3 {
  font-size: 15px;
  font-weight: bold;
}

.stats-card p {
  font-size: 20px;
  margin-top: 0px;
  float: right;
  font-weight: bold;
}
</style>