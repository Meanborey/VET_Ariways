<!-- <template>
    <nav class="navbar bg-[#330D69]">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="../../assets/images/logo.jpg" class="h-12" alt="VET AIRWay Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-white">VET AIRWAY</span>
        </router-link>
        
        <button
          @click="toggleMenu"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          :aria-expanded="isMenuOpen.toString()"
          aria-controls="navbar-default">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5"aria-hidden="true"xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round"stroke-linejoin="round"stroke-width="2" d="M1 1h15M1 7h15M1 13h15" /></svg>
        </button>
   
        <div id="navbar-default"class="w-full md:w-auto":class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen, 'md:block': true, 'fullscreen': isMenuOpen }"
        >
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <router-link to="/" class="nav-link" active-class="active" exact>Home</router-link>
            </li>
            <li>
              <router-link to="/about" class="nav-link" active-class="active">About Us</router-link>
            </li>
            <li>
              <router-link to="/journey" class="nav-link" active-class="active">Journey</router-link>
            </li>
            <li>
              <router-link to="/gallery" class="nav-link" active-class="active">Gallery</router-link>
            </li>
            <li>
              <router-link to="/customer-support" class="nav-link" active-class="active">Customer Support</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    }
  }
  </script>
  
<style>

.nav-link {
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    transition: color 0.3s, background-color 0.3s;
}

.nav-link:hover {
     color: #DE5D0A;
}

.active {
    color: #DE5D0A; 
    background-color: transparent;
}

.dark .nav-link {
    color: #d1d5db; 
}

.dark .nav-link:hover {
    background-color: #1f2937;
}

@media (max-width: 768px) {
  .nav-link:hover {
     color: #DE5D0A;
}
.fullscreen{
  top: 8vh;
  height: 139vh;
  background-color: white;
  position:absolute;
  z-index: 100;
}

.active {
    color: #DE5D0A; 
    background-color: transparent;
}
.nav-link{
font-size: 18px;
color: black;
}
}
</style> -->



<template>
  <nav class="navbar bg-[#330D69]">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
      <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../../assets/images/logo.jpg" class="h-12" alt="VET AIRWay Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-white">VET AIRWAY</span>
      </router-link>

      <button
        @click="toggleMenu"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        :aria-expanded="isMenuOpen.toString()"
        aria-controls="navbar-default">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" /></svg>
      </button>

      <div
        id="navbar-default"
        class="w-full md:w-auto"
        :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen, 'md:block': true, 'fullscreen': isMenuOpen }"
      >
        <ul class="font-medium flex flex-col p-4  md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <router-link to="/" class="nav-link" active-class="active" exact>Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="nav-link" active-class="active">About Us</router-link>
          </li>
          <li>
            <router-link to="/journey" class="nav-link" active-class="active">Journey</router-link>
          </li>
          <li>
            <router-link to="/gallery" class="nav-link" active-class="active">Gallery</router-link>
          </li>
          <li>
            <router-link to="/customer-support" class="nav-link" active-class="active">Customer Support</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if (this.isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }
}
</script>
<style>
.navbar {
  position: relative;
  z-index: 10;
}

.nav-link {
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: color 0.3s, background-color 0.3s;
}

.nav-link:hover {
  color: #DE5D0A;
}

.active {
  color: #DE5D0A; 
  background-color: transparent;
}

.dark .nav-link {
  color: #d1d5db;
}

.dark .nav-link:hover {
  background-color: #1f2937;
}

@media (max-width: 768px) {
  .fullscreen {
    position: fixed;
    top: 9vh;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 20; 
  }

  .nav-link {
    color: #330D69;
    font-size: 16px;
  }
  ul li {
    padding: 12px;
  }

  .nav-link:hover {
    color: #DE5D0A;
  }

  .active {
    color: #DE5D0A;
    background-color: transparent;
  }
}
</style>