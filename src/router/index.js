import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
/* Layout */
import Layout from '@/layout';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
  },
  {
    path: '/about',
    name: 'About',
    component: Layout,
    children: [
      {
        path: '',
        name: 'AboutIndex',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      }
    ]
  },
  {
    path: '/router-list',
    name: 'RouterList',
    component: Layout,
    children: [
      {
        path: '',
        name: 'RouterListIndex',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/RouterList.vue'),
      }
    ]
  },
  {
    path: '/swiper-in-vue2',
    name: 'swiperInVue2',
    component: () => import('../views/swiper-in-vue2/index.vue'),
    children: [
      {
        path: 'start',
        component: () => import('../views/swiper-in-vue2/start.vue'),
      },
      {
        path: 'demo1',
        component: () => import('../views/swiper-in-vue2/demo1.vue'),
      },
      {
        path: 'demo2-hcm',
        component: () => import('../views/swiper-in-vue2/demo2_hcm.vue'),
      }
    ]
  },
  {
    path: '/vue2-watch',
    name: 'vue2Watch',
    component: () => import('../views/vue-watch/index.vue'),
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
