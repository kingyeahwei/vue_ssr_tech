import Vue from 'vue'
const app = new Vue({
  template: '<div ref="div">{{text}} {{obj.a}}</div>',
  data: {
    text: 0,
    obj: {

    }
  }
})
app.$mount('#root')
// let i = 0
setInterval(() => {
  app.text += 1
  app.text += 1
  app.text += 1
  app.text += 1
  app.text += 1
  // i++
  // app.obj.a = i
  // app.$forceUpdate()
  // app.$set(app.obj, 'a', i)
}, 1000)

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }
// console.log(app.$root === app)
// console.log(app.$children)

// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.$isServer)

// const unWatch = app.$watch('text', (newText, oldText) => {
//   console.log(newText)
//   console.log(oldText)
// })
// setTimeout(() => {
//   unWatch()
// }, 3000)

// app.$once('test', (a, b) => {
//   console.log(a)
//   console.log(b)
//   console.log('test emited')
// })
//
// setInterval(() => {
//   app.$emit('test', 1, 2)
// }, 1000)

// app.$forceUpdate()
