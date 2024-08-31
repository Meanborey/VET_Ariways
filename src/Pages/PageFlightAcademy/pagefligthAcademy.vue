<template>
    <NavBar/>
    <FligthAcademy/>
  <Footer/>
  </template>
  <script>
  import FligthAcademy from '@/components/FlightAcademy/flightAcademy.vue';
  import NavBar from '@/components/Navbar/navbar.vue';
  import Footer from '@/components/Footer/footer.vue';
  
  export default {
      name: 'Fligth-academy',
    components: {
      NavBar,
      FligthAcademy,
      Footer
    }
  }
  </script>