<template>
    <Navbar/>
    <ComponentJourney/>
    <Footer/>
      </template>
      <script>

    import Footer from '@/components/Footer/footer.vue';
    import Navbar from '@/components/Navbar/navbar.vue';
    import ComponentJourney from '@/components/Journey/componentJourney.vue'
      export default {
          name: 'Journey',
            components: {
                Navbar,
                ComponentJourney,
                Footer
         }
      }
      </script>