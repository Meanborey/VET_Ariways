<template>
    <Navbar/>
    <Team_Condition/>
    <Footer/>
      </template>
      <script>
    import Team_Condition from '@/components/Team&condition/team&condition.vue';
    import Footer from '@/components/Footer/footer.vue';
    import Navbar from '@/components/Navbar/navbar.vue';
    
      export default {
          name: 'team&condition',
            components: {
                Navbar,
                Team_Condition,
                Footer
         }
      }
      </script>