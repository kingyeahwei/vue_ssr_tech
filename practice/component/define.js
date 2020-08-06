import Vue from 'vue'

const component = {
  props: {
    active: Boolean,
    propOne: String,
    onChange: Function
  },
  template: `
    <div>
      <input type="text" v-model="text">
      <span @click="handleChange">{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `,
  // mounted () {
  //   this.propOne = 'inner'
  // },
  data () {
    return {
      text: 0
    }
  },
  methods: {
    handleChange () {
      this.onChange()
    }
  }
}

// Vue.component('Comp', component)

new Vue({
  el: '#root',
  data () {
    return {
      prop1: 'text1'
    }
  },
  methods: {
    handleChange () {
      this.prop1 += 1
    }
  },
  mounted () {
    console.log(this.$refs.comp1)
  },
  template: `
    <div>
      <comp ref="comp1" active :prop-one="prop1" :on-change="handleChange"></comp>
      <comp></comp>
    </div>
  `,
  components: {
    Comp: component
  }
})
