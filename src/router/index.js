import Vue from 'vue';
import VueRouter from 'vue-router';
import Storage from 'vue-web-storage';

Vue.use(VueRouter);
Vue.use(Storage);

const routes = [
  {
    path: '/welcome',
    component: () => import('../components/Simple.vue'),
    children: [
      {
        path: '',
        name: 'Welcome',
        component: () => import('../views/Welcome.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('../components/Internal.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isLogged = Vue.$localStorage.get('isLogged', false);
  if (to.name !== 'Welcome' && !isLogged) {
    next({
      name: 'Welcome',
    });
  } else if (to.name === 'Welcome' && isLogged) {
    next({
      name: 'Home',
    });
  } else {
    next();
  }
});

export default router;
