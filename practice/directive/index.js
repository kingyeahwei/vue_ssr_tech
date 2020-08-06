import Vue from 'vue'
new Vue({
  el: '#root',
  template: `
    <div>
      <div v-pre>{{one发顺丰都是}}</div>
      <div v-once>{{text}}</div>
      <div v-text="text" v-if="active"></div>
      <div v-else-if="text === 0">else if content</div>
      <div v-else>else content</div>
      <div v-html="html"></div>
      <input type="text" v-model.lazy="text"><br>
      <input type="checkbox" v-model="active">
      <div>
        <input type="checkbox" v-model="arr" :value="1">
        <input type="checkbox" v-model="arr" :value="2">
        <input type="checkbox" v-model="arr" :value="3">
      </div>
      <div>
        <input type="radio" v-model="picked" value="one">
        <input type="radio" v-model="picked" value="two">
      </div>
      <ul>
        <li v-for="(item, index) in arr">{{index}}---{{item}}</li>
      </ul>
      <ul>
        <li v-for="(value, key, index) in obj" :key="key">{{value}}--{{key}}---{{index}}</li>
      </ul>
    </div>
  `,
  data () {
    return {
      arr: [2, 3],
      obj: {
        a: 123,
        b: 456,
        c: 789
      },
      text: 1,
      active: false,
      html: '<span>this is html</span>',
      picked: ''
    }
  }
})
