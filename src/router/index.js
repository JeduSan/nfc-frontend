import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/student/Dashboard.vue';
import Profile from '../views/student/Profile.vue';
import AttendanceMonitoring from '../views/student/AttendanceMonitoring.vue';
import AdminDashboard from '../views/admin/AdminDashboard.vue';
import ManageClass from '../views/admin/ManageClass.vue';
import TeacherDashboard from '../views/teacher/Dashboard.vue';
import ManageTeacher from '../views/admin/ManageTeacher.vue';
import ManageStudent from '../views/admin/ManageStudent.vue';
import ClassList from '../views/admin/ClassList.vue';
import Analytics from '../views/admin/Analytics.vue';
import ManageEvents from '../views/admin/ManageEvents.vue';
import RegisterStudent from '../views/admin/RegisterStudent.vue';
import AttendanceList from '../views/admin/AttendanceList.vue';
import ClassAttendance from '../views/teacher/ClassAttendance.vue';
import TeacherClassList from '../views/teacher/TeacherClassList.vue';  
import ClassSchedule from '../views/admin/ClassSchedule.vue'; 
import TeacherClassSchedule from '../views/teacher/TeacherClassSchedule.vue';  // Import the new component


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
  { path: '/admin/register-student', component: RegisterStudent, meta: { requiresRole: 'admin' } },
  { path: '/admin/attendance-list', component: AttendanceList, meta: { requiresRole: 'admin' } },
  { path: '/admin/class-list', component: ClassList, meta: { requiresRole: 'admin' } },
  { path: '/admin/class-schedule', component: ClassSchedule, meta: { requiresRole: 'admin' } },  // New route

  // Teacher routes
  { path: '/teacher', component: TeacherDashboard, meta: { requiresRole: 'teacher' } },
  { path: '/teacher/class-attendance', component: ClassAttendance, meta: { requiresRole: 'teacher' } },
  { path: '/teacher/class-list', component: TeacherClassList, meta: { requiresRole: 'teacher' } },
  { path: '/teacher/class-schedule', component: TeacherClassSchedule, meta: { requiresRole: 'teacher' } }, // New route for teacher's class schedule

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
