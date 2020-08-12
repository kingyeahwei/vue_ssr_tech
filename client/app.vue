<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{fullName}}-{{counter}}</p>
    <router-link to="/app/123">app123</router-link>
    <router-link to="/app/456">app456</router-link>
    <router-link to="/login">login</router-link>
    <!--<Todo></Todo>-->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './layout/header.vue'
  import Footer from './layout/footer.jsx'
  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex' // eslint-disable
  // import Todo from './views/todo/todo.vue'
  export default {
    data () {
      return {}
    },
    components: {
      Header,
      Footer
      // Todo
    },
    mounted () {
      console.log(this.$store)
      // this.$store.dispatch('updateCountAsync', {num: 3, time: 1000})
      // this.updateCountAsync({num: 3, time: 1000})
      // this.$store.state.count = 3
      let i = 1
      setInterval(() => {
        // this.$store.commit('updateCount', {
        //   num: i++,
        //   num2: 2
        // })
        this.updateCount({num: i++, num2: 2})
      }, 1000)
    },
    computed: {
      ...mapState({
        counter: (state) => state.count
      }),
      ...mapGetters(['fullName'])
      // fullName () {
      //   return this.$store.getters.fullName
      // }
    },
    methods: {
      ...mapActions(['updateCountAsync']),
      ...mapMutations(['updateCount'])
    }
  }
</script>

<style lang="stylus" scoped>
  #app {
    position absolute
    left 0
    right 0
    top 0
    bottom 0
  }

  #cover {
    position absolute
    left 0
    top 0
    right 0
    bottom 0
    background-color #999
    opacity .9
    z-index -1
  }
</style>
