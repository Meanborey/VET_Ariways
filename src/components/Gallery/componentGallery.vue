<template>
  <section>
      <div>
      <img class="w-full h-[400px] object-cover" src="../../assets/images/about.jpg"/>
      </div>
        <div class="flex justify-center items-center">
    <p class="text-2xl font-semibold inline-block after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-[#DE5D0A] after:left-0 after:bottom-0 after:mt-1 absolute top-64 text-white">Gallery</p>
</div>
 
<div class="flex justify-center items-center py-10">
  <div class="max-w-screen-xl">
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gallery3.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gallery2.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gallery1.jpg" alt="">
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gallery1.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="@/assets/images/pilot.png" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gallery2.jpg" alt="">
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gallery3.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="@/assets/images/pilot.png" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gallery3.jpg" alt="">
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gallery1.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="@/assets/images/gallery2.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="@/assets/images/pilot.png" alt="">
        </div>
    </div>
</div>
</div>
</div>
</section>
</template>

<script>
import image1 from '@/assets/images/gallery3.jpg';
import image2 from '@/assets/images/pilot.png';
import image3 from '@/assets/images/pilot.png';
import image4 from '@/assets/images/gallery2.jpg';

export default {
  data() {
    return {
      images: [
        { src: image1, alt: 'Description 1' },
        { src: image2, alt: 'Description 2' },
        // { src: image3, alt: 'Description 3' },
        // { src: image4, alt: 'Description 4' },
        // { src: image4, alt: 'Description 5' },
        // { src: image3, alt: 'Description 6' },
        // { src: image3, alt: 'Description 3' },
        // { src: image4, alt: 'Description 4' },
        // { src: image1, alt: 'Description 5' },
        // { src: image3, alt: 'Description 6' },
      ],
    }
  },
}
</script>

