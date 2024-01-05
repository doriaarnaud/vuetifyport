// Composables
import { createRouter, createWebHistory } from 'vue-router'
import GamingCaroussel from '@/components/GamingCaroussel.vue'

const routes = [
  {
    path: '',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/components/Mainvue.vue'),
        children: [
          {
            path: '',
            name: 'GamingCaroussel',
            // route level code-splitting
            // this generates a separate chunk (Home-[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component:GamingCaroussel
          },
          {
            path: '/tictactoe',
            name: 'TictactoeCaroussel',
            // route level code-splitting
            // this generates a separate chunk (Home-[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/components/TictactoeCaroussel.vue'),
          }
        ]
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
