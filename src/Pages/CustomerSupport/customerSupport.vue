<template>
    <NavBar/>
    <CustomerSupport/>
  <Footer/>
  </template>
  <script>
  import NavBar from '@/components/Navbar/navbar.vue';
  import Footer from '@/components/Footer/footer.vue';
  import CustomerSupport from '@/components/CustomerSupport/customerSupport.vue'
  export default {
      name: 'Customer-support',
    components: {
      NavBar,
      CustomerSupport,
      Footer
    }
  }
  </script>