<template>
    <div class="manage-class">
      <AdminSidebar />
      <div class="admin-content">
        <AdminHeader />
        <div class="manage-body">
          <h2>Manage Class</h2>
          
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
  }
  </style>
  