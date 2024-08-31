<template>
    <Navbar/>
    <ComponentFbo/>
    <Footer/>
      </template>
      <script>

    import Footer from '@/components/Footer/footer.vue';
    import Navbar from '@/components/Navbar/navbar.vue';
    import ComponentFbo from '@/components/ComponentFBO/Fbo.vue'
      export default {
          name: 'fbo',
            components: {
                Navbar,
                ComponentFbo,
                Footer
         }
      }
      </script>