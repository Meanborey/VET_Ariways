<template>
    <NavBar/>
    <SeaplaneAdventure/>
  <Footer/>
  </template>
  <script>

  import NavBar from '@/components/Navbar/navbar.vue';
  import Footer from '@/components/Footer/footer.vue';
  import SeaplaneAdventure from "@/components/SeaplaneAdventure/seaplaneAdventure.vue"
  export default {
      name: 'Seaplane-adventure',
    components: {
      NavBar,
      SeaplaneAdventure,
      Footer
    }
  }
  </script>