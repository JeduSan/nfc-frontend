import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/student/Dashboard.vue';
import Profile from '../views/student/Profile.vue';
import AttendanceMonitoring from '../views/student/AttendanceMonitoring.vue';
import AdminDashboard from '../views/admin/AdminDashboard.vue';
import ManageClass from '../views/admin/ManageClass.vue';
import TeacherDashboard from '../views/teacher/Dashboard.vue';  
import ManageTeacher from '../views/admin/ManageTeacher.vue';
import ManageStudent from '../views/admin/ManageStudent.vue';
import ManageEvents from '../views/admin/ManageEvents.vue';
import Analytics from '../views/admin/Analytics.vue';
 


const routes = [
    
    // Student routes
  { path: '/', component: Dashboard },
  { path: '/profile', component: Profile },
  { path: '/attendance', component: AttendanceMonitoring },


  // Admin routes
  { path: '/admin', component: AdminDashboard, meta: { requiresRole: 'admin' } },
  { path: '/admin/manage-class', component: ManageClass, meta: { requiresRole: 'admin' } },
  { path: '/admin/manage-teacher', component: ManageTeacher, meta: { requiresRole: 'admin' } },
  { path: '/admin/manage-student', component: ManageStudent, meta: { requiresRole: 'admin' } },
  { path: '/admin/manage-events', component: ManageEvents, meta: { requiresRole: 'admin' } },
  { path: '/admin/analytics', component: Analytics, meta: { requiresRole: 'admin' } },

  // Teacher routes
  { path: '/teacher', component: TeacherDashboard, meta: { requiresRole: 'teacher' } },

 

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
