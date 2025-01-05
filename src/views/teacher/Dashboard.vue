<template>
  <div class="admin-dashboard">
    <AdminSidebar />
    <div class="admin-content">
      <AdminHeader />
      <div class="dashboard-body">
        <h2>Teacher Dashboard</h2>
       
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
.admin-dashboard {
  display: flex;
}

.admin-content {
  margin-left: 200px;
  width: calc(100% - 200px);
  display: flex;
  flex-direction: column;
}

.dashboard-body {
  padding: 20px;
}
</style>
