<template>
    <Navbar/>
    <AircraftSale/>
    <Footer/>
      </template>
      <script>
    import AircraftSale from '@/components/AircraftSale/componentAircraftSale.vue';
    import Footer from '@/components/Footer/footer.vue';
    import Navbar from '@/components/Navbar/navbar.vue';
    
      export default {
          name: 'Ari-taxi',
            components: {
                Navbar,
                AircraftSale,
                Footer
         }
      }
      </script>