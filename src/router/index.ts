import { createRouter, createWebHistory } from 'vue-router'
import {
  Error,Chat,ChatCompanias,ChatStudents,ChatId,Login,
  Dashbord,Students,Events,Settings,ProfileComplete,
  Profile,Posts,Vacancy,ComponiList,AllEvents, MyEvents , EventId,
  AllPosts , MyPosts, StudentPosts, ComponiPosts
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
        name: 'dashbord',
        component: Dashbord,
      },
      {
        path: '/dashbord/componi-list',
        name: 'ComponiList',
        component: ComponiList,
      },
      {
        path: '/chat',
        name: 'chat',
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
        name: 'students',
        component: Students,
      },
      {
        path: '/events',
        name: 'events',
        component: Events,
        children:[
          {
            path: '',
            name: 'AllEvents',
            component: AllEvents,
            children:[
              {
                path: ':id',
                name: 'EventId',
                component: EventId,
              }
            ]
          },
          {
            path:'my-events',
            name: 'MyEvents',
            component: MyEvents,
            children:[
              {
                path: ':id',
                name: 'EventId',
                component: EventId,
              }
            ]
          }
        ]
      },
      {
        path: '/posts',
        name: 'posts',
        component: Posts,
        children:[
          {
            path: '',
            name: 'AllPosts',
            component: AllPosts,
          },
          {
            path:'my-posts',
            name: 'MyPosts',
            component: MyPosts,
          },
          {
            path:'student-posts',
            name: 'StudentPosts',
            component: StudentPosts,
          },
          {
            path:'componi-posts',
            name: 'ComponiPosts',
            component: ComponiPosts,
          }
        ]
      },
      {
        path: '/vacancy',
        name: 'vacancy',
        component: Vacancy,
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile,
      },
      {
        path: '/settings',
        name: 'Settings',
        component: Settings,
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
