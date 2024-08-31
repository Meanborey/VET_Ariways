<template>
    <NavBar/>
  <ComponentPilotV1/>
  <Footer/>
  </template>
  <script>
  import NavBar from '@/components/Navbar/navbar.vue';
  import Footer from '@/components/Footer/footer.vue';
import ComponentPilotV1 from '@/components/FlightAcademy/componentPilot-v1.vue';
  
  export default {
      name: 'ComponentPilot_v1',
    components: {
      NavBar,
      ComponentPilotV1,
      Footer
    }
  }
  </script>