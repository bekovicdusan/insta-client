import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/newpost',
    name: 'newpost',
    component: () => import(/* webpackChunkName: "about" */ '../components/NewPost.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile/:username',
    name: 'Profile',
    props: route => ({ ...route.params, username: route.params.username }),
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfileView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile/:username/:post_id',
    name: 'ProfilePost',
    props: route => ({ ...route.params, username: route.params.username, post_id: route.params.post_id }),
    component: () => import(/* webpackChunkName: "about" */ '../components/NewPost.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') === null) {
      next({
        path: '/login',
        name: 'login'
      })
    } else {
      console.log('Logged In')
      next()
    }
  } else {
    console.log('doesnt require auth')
    if (localStorage.getItem('jwt') !== null) {
      next({
        path: '/',
        params: { nextUrl: '/' }
      })
    } else {
      next()
    }
  }
})

export default router
