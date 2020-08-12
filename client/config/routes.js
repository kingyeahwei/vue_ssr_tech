// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'
export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app/:id',
    // path: '/app/:id',
    // props: true,
    // props: {
    //   id: '3456'
    // },
    // props: (route) => {
    //   return {
    //     id: route.query.b
    //   }
    // },
    component: () => import('../views/todo/todo.vue'),
    name: 'app',
    meta: {
      title: 'this is appp',
      description: 'asdasd'
    },
    beforeEnter (to, from, next) {
      console.log('app route before enter')
      next()
    }
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  }
]
