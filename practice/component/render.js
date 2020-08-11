import Vue from 'vue'

const component = {
  name: 'comp',
  props: ['propOne'],
  render (createElement) {
    return createElement(
      'div',
      {
        style: this.style
        // on: {
        //   click: () => {
        //     this.$emit('click')
        //   }
        // }
      },
      [
        this.$slots.header,
        this.propOne
      ]
    )
  },
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      value: 'component value'
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  data () {
    return {
      value: '123'
    }
  },
  mounted () {
  },
  methods: {
    handleClick () {
      console.log('clicked')
    }
  },
  render (createElement) {
    return createElement(
      'comp-one',
      {
        ref: 'comp',
        props: {
          propOne: this.value
        },
        // on: {
        //   click: this.handleClick
        // },
        nativeOn: {
          click: this.handleClick
        }
      },
      [
        createElement(
          'span',
          {
            ref: 'span',
            slot: 'header',
            domProps: {
              innerHTML: '<span>456</span>'
            },
            attrs: {
              id: 'test-id'
            }
          },
          this.value
        )
      ]
    )
  }
})
