<template>
    <NavBar/>
    <GalLery/>
  <Footer/>
  </template>
  <script>
  import GalLery from '@/components/Gallery/componentGallery.vue';
  import NavBar from '@/components/Navbar/navbar.vue'
  import Footer from '@/components/Footer/footer.vue';
  
  export default {
      name: 'Gallery',
    components: {
      NavBar,
      GalLery,
      Footer
    }
  }
  </script>