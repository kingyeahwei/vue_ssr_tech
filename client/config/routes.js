import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'
export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
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
    component: Todo,
    name: 'app',
    meta: {
      title: 'this is appp',
      description: 'asdasd'
    }
  },
  {
    path: '/login',
    component: Login
  }
]
