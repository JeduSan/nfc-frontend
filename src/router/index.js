import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/student/Dashboard.vue';
import Profile from '../views/student/Profile.vue';
import AttendanceMonitoring from '../views/student/AttendanceMonitoring.vue';
import AdminDashboard from '../views/admin/AdminDashboard.vue';
import ManageClass from '../views/admin/ManageClass.vue';
import TeacherDashboard from '../views/teacher/Dashboard.vue';  
 


const routes = [
    
    // Student routes
  { path: '/', component: Dashboard },
  { path: '/profile', component: Profile },
  { path: '/attendance', component: AttendanceMonitoring },


  // Admin routes
  { path: '/admin', component: AdminDashboard, meta: { requiresRole: 'admin' } },
  { path: '/admin/manage-class', component: ManageClass, meta: { requiresRole: 'admin' } },

  // Teacher routes
  { path: '/teacher', component: TeacherDashboard, meta: { requiresRole: 'teacher' } },

 

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
