<template>
  <div id="app">
    
    <Header v-if="showHeader" />
    <router-view></router-view>
    <BottomNavbar v-if="showBottomNavbar" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import BottomNavbar from './components/BottomNavbar.vue';

export default {
  components: {
    Header,
    BottomNavbar
  },
  computed: {
    // Check the current route to Hide Header and BottomNavbar on '/admin' and '/teacher'  routes 
    showHeader() {
     
      return !this.$route.path.includes('/admin') && !this.$route.path.includes('/teacher');
    },
    showBottomNavbar() {
    
      return !this.$route.path.includes('/admin') && !this.$route.path.includes('/teacher');
    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #EEEEEE;
}
</style>
