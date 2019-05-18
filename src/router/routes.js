import Home from '@/views/home/Home'
import homeRouter from './home-router'

const routes = [
  {
    path: '/1',
    name: 'Home',
    redirect: '/about',
    component: Home,
    children: [
      ...homeRouter,
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login'),
  },
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index/index')
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('@/views/index/article')
  },
  {
    redirect: '/404',
    path: '*',
  },
]

export default routes
