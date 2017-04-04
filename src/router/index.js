import Vue from 'vue';
import Router from 'vue-router';
import Trends from '@/components/Trends/Trends';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Trends',
      component: Trends,
    },
  ],
});
