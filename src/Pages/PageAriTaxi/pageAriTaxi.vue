<template>
<Navbar/>
<Ari_taxi/>
<Footer/>
  </template>
  <script>
import Ari_taxi from '@/components/AriTaxi/ariTaxi.vue';
import Footer from '@/components/Footer/footer.vue';
import Navbar from '@/components/Navbar/navbar.vue';

  export default {
      name: 'Ari-taxi',
        components: {
            Navbar,
            Ari_taxi,
            Footer
     }
  }
  </script>