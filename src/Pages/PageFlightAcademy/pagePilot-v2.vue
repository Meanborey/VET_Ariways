<template>
    <NavBar/>
  <ComponentPilotV2/>
  <Footer/>
  </template>
  <script>
  import NavBar from '@/components/Navbar/navbar.vue';
  import Footer from '@/components/Footer/footer.vue';
import ComponentPilotV2 from '@/components/FlightAcademy/componentPilot-v2.vue';
  
  export default {
      name: 'ComponentPilot_v2',
    components: {
      NavBar,
      ComponentPilotV2,
      Footer
    }
  }
  </script>