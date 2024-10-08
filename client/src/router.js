import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage'),
    beforeEnter: authGuard
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/profile/:profileId',
    name: 'Profile',
    component: loadPage('ProfilePage')
  },
  {
    path: '/pets/:petId',
    name: 'Pets',
    component: loadPage('PetsDetails')
  },
  {
    path: '/search',
    name: 'Search',
    component: loadPage('SearchPage')
  },
  {
    path: '/likedPosts',
    name: 'LikedPosts',
    component: loadPage('LikedPostsPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
