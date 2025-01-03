import { createRouter, createWebHistory } from 'vue-router'
import {
  Error,
  Chat,
  ChatCompanias,
  ChatStudents,
  ChatId,
  Login,
  Dashbord,
  Students,
  Events,
  Settings,
  ProfileComplete,
  Profile,
} from '../views'
import { AdminLayout } from '../layout'
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/profile-complete',
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
        path: '/chat',
        name: 'Chat',
        component: Chat,
        children: [
          {
            path: 'students',
            name: 'ChatStudents',
            component: ChatStudents,
            children: [
              {
                path: ':id',
                name: 'ChatStudentId',
                component: ChatId,
              },
            ],
          },
          {
            path: 'companias',
            name: 'ChatCompanias',
            component: ChatCompanias,
            children: [
              {
                path: ':id',
                name: 'ChatCompaniaId',
                component: ChatId,
              },
            ],
          },
        ],
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
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile,
      },
    ],
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
