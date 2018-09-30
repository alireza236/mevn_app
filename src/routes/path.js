
export default [
  {
   path: '*',
   meta: {},
   redirect: {
     path: '/404'
   }
 },
 {
   path: '/404',
   meta: {},
   name: 'NotFound',
   component: () => import(
     /* webpackChunkName: "routes" */
     /* webpackMode: "lazy-once" */
     `../components/NotFound.vue`
   )
 },
 {
    path: '/login',
    meta: {},
    name: 'Login',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `../components/Login.vue`
    )
  },
  {
     path: '/register',
     meta: {},
     name: 'Register',
     component: () => import(
       /* webpackChunkName: "routes" */
       /* webpackMode: "lazy-once" */
       `../components/Register.vue`
     )
   },
  {
  path: '/500',
  meta: {},
  name: 'ServerError',
  component: () => import(
    /* webpackChunkName: "routes" */
    /* webpackMode: "lazy-once" */
    `../components/Error.vue`
  )
},
{
    path: '/',
    meta: {},
    name: 'Root',
    redirect: {
      name: 'Dashboard'
    }
  },
  {
    path: '/',
    meta: {},
    name: 'Dashboard',
    redirect:'/user',
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `../components/layouts/Dashboard.vue`
    ),
    children:[
      {
        path:'/user',
        name:'User',
        component:() => import(`../components/User.vue`)
      },
      {
        path:'/book',
        name:'Book',
        component:() => import(`../components/Book.vue`)
      },
    ]
  },
]
