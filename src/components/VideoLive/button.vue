<template>
      <div class="flex justify-center text-center">
    <div class="topbutton flex flex-wrap justify-center text-center">
        <router-link to="/seaplane-adventure" class="button">Seaplanes Adventure</router-link>
        <router-link to="/fligth-academy" class="button">Flight Academy</router-link>
        <router-link to="/ari-taxi" class="button">Air Taxi</router-link>
        <router-link to="/fbo" class="button">FBO</router-link>
        <router-link to="/aircraft-sale" class="button relative bg-white">Aircraft Sale</router-link>
    </div>
</div>
</template>
<style>
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
</style>