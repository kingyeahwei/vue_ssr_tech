import Vue from 'vue'
const component = {
  props: {
    active: Boolean,
    propOne: String
  },
  template: `
    <div>
      <input type="text" v-model="text">
      <span @click="handleChange">{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `,
  data () {
    return {
      text: 0
    }
  },
  mounted () {
    console.log('comp mounted')
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

const parent = new Vue({
  name: 'parent'
})
const component2 = {
  parent: parent,
  extends: component,
  data () {
    return {
      text: 1
    }
  },
  mounted () {
    console.log(this.$parent.$options.name)
    // this.$parent.text = 12345
  }
}

// const CompVue = Vue.extend(component)

// new CompVue({
//   el: '#root',
//   propsData: {
//     propOne: 'xxxxx',
//     active: true
//   },
//   data () {
//     return {
//       text: 123
//     }
//   },
//   mounted () {
//     console.log('instance mounted')
//   }
// })

new Vue({
  parent: parent,
  mounted () {
    console.log(this.$parent.$options.name)
  },
  name: 'root',
  el: '#root',
  data () {
    return {
      text: 23333
    }
  },
  components: {
    Comp: component2
  },
  template: `
    <div>
      <span>{{text}}</span>
      <comp></comp>
    </div>
  `
})
