<template>
  <NavBar/>
<AboutUs/>
<Footer/>
</template>
<script>
import AboutUs from '@/components/About/about.vue';
import NavBar from '@/components/Navbar/navbar.vue';
import Footer from '@/components/Footer/footer.vue';

export default {
    name: 'About',
  components: {
    NavBar,
    AboutUs,
    Footer
  }
}
</script>