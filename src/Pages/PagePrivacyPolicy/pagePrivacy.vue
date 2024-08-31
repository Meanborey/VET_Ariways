<template>
    <Navbar/>
    <PriVacy/>
    <Footer/>
      </template>
      <script>

    import Footer from '@/components/Footer/footer.vue';
    import Navbar from '@/components/Navbar/navbar.vue';
    import PriVacy from '@/components/PrivacyPolicy/privacypolicy.vue'
      export default {
          name: 'Privacy',
            components: {
                Navbar,
                PriVacy,
                Footer
         }
      }
      </script>