<template>
  <div >
      <NavBar/>
      <VideoLive/>
      <Download/>
      <Footer/>
  </div>
</template>
<script>
import NavBar from '@/components/Navbar/navbar.vue';
import VideoLive from '@/components/VideoLive/videoLive.vue';
import Download from '@/components/SectionDownload/download.vue';
import Footer from '@/components/Footer/footer.vue';
export default {
  name: 'Home',
  components: {
    NavBar,
    VideoLive,
    Download,
    Footer
  }
 
}
</script>