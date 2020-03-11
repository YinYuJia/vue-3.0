// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/components/layouts'



/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [

  {
    path: '/',
    name: 'dplogin',
    component: () => import('@/views/ddShow'),
    meta: { title: '旦电首页', keepAlive: false, permission: [ 'user' ] }
  },
  {
    path: '/ddlogin',
    name: 'ddlogin',
    component: () => import('@/views/ddlogin'),
    meta: { title: '登录', keepAlive: false, permission: [ 'user' ] }
  },
  {
    path: '/blockShow',
    name: 'blockShow',
    component: () => import('@/views/blockShow'),
    meta: { title: '区块链展示', keepAlive: false, permission: [ 'user' ] }
  },
  {
    path: '/ddindex',
    name: '首页',
    component: () => import('@/views/dd/ddindex'),
    meta: { title: '首页', keepAlive: false, permission: [ 'user' ] }
  },
  
  {
    path: '/liveplayer',
    name: 'liveplayer',
    component: () => import('@/views/liveplayer/liveplayer'),
    meta: { title: 'liveplayer', keepAlive: false, permission: [ 'user' ] }
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }
]

