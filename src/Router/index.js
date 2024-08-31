import { createWebHistory , createRouter } from 'vue-router'
import Home from '../Pages/Homepage/homePage.vue';
import About from '../Pages/AboutUS/pageAbout.vue';
import CustomerSupport from '../Pages/CustomerSupport/customerSupport.vue'
import SeaplaneAdventure from '@/Pages/SeaplaneAdventure/seaplaneAdventure.vue'
import FligthAcademy from '@/Pages/PageFlightAcademy/pagefligthAcademy.vue'
import PagePilotV1 from '@/Pages/PageFlightAcademy/pagePilot-v1.vue'
import PagePilotV2 from '@/Pages/PageFlightAcademy/pagePilot-v2.vue'
import PageGallery from '@/Pages/GalleryPage/gallery.vue';
import Ari_Taxi from '@/Pages/PageAriTaxi/pageAriTaxi.vue';
import PageFbo from '@/Pages/PageFbo/pageFbo.vue'
import PageJourney from '@/Pages/PageJourney/pageJourney.vue';
import team_PageTeamCondition from '@/Pages/PageTeam&Condition/pageTeam&condition.vue';
import PagePrivacy from '@/Pages/PagePrivacyPolicy/pagePrivacy.vue';
import AircraftSale from '@/Pages/PageAircraftSale/pageaircraftsale.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/customer-support',
    name: 'Customer-support',
    component: CustomerSupport,
  },
  {
    path: '/seaplane-adventure',
    name: 'Seaplane-adventure',
    component: SeaplaneAdventure,
  },
  {
    path: '/fligth-academy',
    name: 'Fligth-academy',
    component: FligthAcademy,
  },
  {
    path: '/pilot-v1',
    name: 'ComponentPilot_v1',
    component: PagePilotV1,
  },
  {
    path: '/pilot-v2',
    name: 'ComponentPilot_v2',
    component: PagePilotV2,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: PageGallery,
  },
  {
    path: '/ari-taxi',
    name: 'Ari-taxi',
    component: Ari_Taxi,
  },
  {
    path: '/fbo',
    name: 'fbo',
    component: PageFbo,
  },
  {
    path:'/journey',
    name: 'Journey',
    component: PageJourney,
  },
  {
    path: '/team-condition',
    naem: 'team&condition',
    component: team_PageTeamCondition,
  },
  {
    path:'/privacy',
    name: 'Privacy',
    component: PagePrivacy,
  },
  {
    path:'/aircraft-sale',
    name: 'Aircraftsale',
    component: AircraftSale,
  },

];

const router = createRouter({
  history: createWebHistory (),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0 };  // Ensure `top` and `left` are set to scroll to the top left corner
    }
  }
});

export default router;
