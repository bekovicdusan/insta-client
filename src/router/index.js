import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccountEditView from '../views/AccountEditView.vue'

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
    component: () => import('../views/ProfileView.vue'),
    children: [
      {
        path: 'saved',
        component: () => import('../components/SavedPosts.vue')
      },
      {
        path: 'tagged',
        component: () => import('../components/TaggedPosts.vue')
      }
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile/:username/:post_id',
    name: 'ProfilePost',
    props: route => ({ ...route.params, username: route.params.username, post_id: route.params.post_id }),
    component: () => import('../components/NewPost.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/account',
    name: 'AccountEdit',
    component: AccountEditView,
    children: [
      {
        path: 'edit',
        component: () => import('../components/EditProfile.vue')
      },
      {
        path: 'change-password',
        component: () => import('../components/ChangePassword.vue')
      },
      {
        path: 'apps-and-websites',
        component: () => import('../components/AppsAndWebsites.vue')
      },
      {
        path: 'email-notifications',
        component: () => import('../components/EmailNotifications.vue')
      },
      {
        path: 'push-notifications',
        component: () => import('../components/PushNotifications.vue')
      },
      {
        path: 'manage-contacts',
        component: () => import('../components/ManageContacts.vue')
      },
      {
        path: 'privacy-and-security',
        component: () => import('../components/PrivacyAndSecurity.vue')
      },
      {
        path: 'ads',
        component: () => import('../components/AdsComponent.vue')
      },
      {
        path: 'supervision',
        component: () => import('../components/SuperVision.vue')
      },
      {
        path: 'login-activity',
        component: () => import('../components/LoginActivity.vue')
      },
      {
        path: 'emails-from-pinkypink',
        component: () => import('../components/EmailsFromPinkyPink.vue')
      },
      {
        path: 'help',
        component: () => import('../components/HelpComponent.vue')
      },
      {
        path: 'digital-collectibles',
        component: () => import('../components/DigitalCollectibles.vue')
      }
    ],
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
