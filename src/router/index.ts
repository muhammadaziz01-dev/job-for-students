import { createRouter, createWebHistory } from 'vue-router'
import { Error , Chat, Login , Dashbord , Students , Events , Settings , ProfileComplete} from  "../views";
import {AdminLayout} from '../layout';
const routes= [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
     path:'/profile-complete',
     name: 'ProfileComplete',
     component: ProfileComplete,
  },
  {
    path: '/dashbord',
    name: 'Admin layout',
    component: AdminLayout,
    children: [
      {
        path: '',
        name: 'Dashbord',
        component: Dashbord,
      },
      {
        path:'/chat',
        name: 'Chat',
        component: Chat,
      },
      {
        path: '/students',
        name: 'Students',
        component: Students,
      },
      {
        path: '/events',
        name: 'Events',
        component: Events,
      },
      {
        path: '/settings',
        name: 'Settings',
        component: Settings,
      }

    ]
  },
  {
    path: '/:pathMatch(.*)*', 
    name: 'Error',
    component: Error,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
