import Router from 'vue-router'
import routes from './routes'
export default () => {
  return new Router({
    routes,
    mode: 'history',
    // base: '/base/',
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior (to, from, savedPostion) {
      if (savedPostion) {
        return savedPostion
      } else {
        return {
          x: 0,
          y: 0
        }
      }
    }
    // parseQuery () {},
    // stringifyQuery () {}
    // fallback: true
  })
}
