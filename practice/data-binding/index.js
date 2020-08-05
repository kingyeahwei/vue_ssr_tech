import Vue from 'vue'
var globalVar = '111' //eslint-disable-line
new Vue({
  el: '#root',
  // template: `
  //   <div :id="aaa" @click="handleClick">
  //     {{html}}
  //     <p v-html="html"></p>
  //   </div>
  // `,
  template: `
    <div :class="[{active: isActive}]" :style="[styles, styles2]">
      <p>{{getJoinedArr(arr)}}</p>
    </div>
  `,
  data () {
    return {
      isActive: false,
      arr: [1, 2, 3],
      html: `<span>123</span>`,
      aaa: 'main',
      styles: {
        color: 'red',
        appearance: 'none'
      },
      styles2: {
        fontSize: '20px'
      }
    }
  },
  computed: {
    classNames () {
      return {
        id: true,
        name: true
      }
    }
  },
  methods: {
    handleClick () {
      alert('clicked') //eslint-disable-line
    },
    getJoinedArr (arr) {
      return arr.join(' ')
    }
  }
})
