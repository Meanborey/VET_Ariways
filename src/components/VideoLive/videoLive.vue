<template>
    <div>
  <div class="video-container">
    <video
    ref="videoPlayer"
      :src="video"
      muted
      autoplay
      loop
      class="video-player w-full overflow-hidden bg-cover"
    ></video> 
    
  </div>
  <div class="flex justify-center text-center">
    <div class="topbutton flex flex-wrap justify-center text-center absolute top-96">
        <router-link to="/seaplane-adventure" class="button">Seaplanes Adventure</router-link>
        <router-link to="/fligth-academy" class="button">Flight Academy</router-link>
        <router-link to="/ari-taxi" class="button">Air Taxi</router-link>
        <router-link to="/fbo" class="button">FBO</router-link>
        <router-link to="/aircraft-sale" class="button relative bg-white">Aircraft Sale</router-link>
    </div>
</div>

  </div>
</template>

<script>
import videoFile from '@/assets/Videos/VET Airways Fianl.mp4';

export default {
  data() {
    return {
      video: videoFile,
    };
  },
};
</script>

<!-- <style scoped>
.video-container {
   /* display: flex;
  justify-content: center;
  align-items: center;  */
  height: 80vh; 
  padding: 0;
}
.button{
    z-index: 3;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 204px;
    height: 189px;
    background-color: #D9D9D9;
    margin: 25px;
    border-radius: 8px;
    font-weight: 600;
    color: #DE5D0A;
    font-size: 24px;
    transition: all 0.3s ease;
    transform: scale(1);
}
.button:hover{
  /* hover:from-blue-600 hover:to-indigo-600 */
  transform: scale(1.05);
}

</style> -->
<style scoped>
/* Basic Styles */
.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  padding: 0;
  overflow: hidden; /* Ensure no overflow issues */
}

.video-player {
  width: 100%;
  height: auto;
  object-fit: cover; /* Ensure video covers the container */
}

.button{
    z-index: 3;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 204px;
    height: 189px;
    background-color: #D9D9D9;
    margin: 18px;
    border-radius: 8px;
    font-weight: 600;
    color: #DE5D0A;
    font-size: 24px;
    transition: all 0.3s ease;
    transform: scale(1);
}

.button:hover {
  transform: scale(1.05);
}

/* Flex Container for Buttons */
/* .flex-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 15px;
  margin-left: 30px;
} */

/* Media queries for responsive design */
@media (max-width: 1024px) { /* Tablets */
  .button {
    width: 100px;
    height: 100px;
    font-size: 18px;
    /* margin: 10px; */
  }
}

@media (max-width: 768px) { /* Phones */
  .button {
    width: 120px;
    height: 100px;
    font-size: 16px;
    margin: 8px;
  }

  .video-container {
    height: 50vh; /* Adjust for phone screens */
  }

  .video-player {
    width: 100%;
    height: auto;
  }

  .flex-buttons {
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }

  .button {
    width: 100px;
    height: 80px;
    font-size: 14px;
    margin: 5px;
  }
  .topbutton{
    top: 300px;
  }
}
</style>
