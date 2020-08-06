import Vue from 'vue'
new Vue({
  template: `<div>
    <p>Name: {{name}}</p>
    <p>Name: {{getName()}}</p>
    <p>{{number}}</p>
    <p>fullname: {{fullName}}</p>
    <p><input type="text" v-model="number"></p>
    <p>firstName: <input type="text" v-model="firstName"></p>
    <p>lastName: <input type="text" v-model="lastName"></p>
    <p><input type="text" v-model="name"></p>
    <p>obj.a <input type="text" v-model="obj.a"></p>
  </div>`,
  el: '#root',
  data () {
    return {
      firstName: 'Jocky',
      lastName: 'Lou',
      number: 0,
      fullName: '',
      obj: {
        a: 0
      }
    }
  },
  computed: {
    name: {
      get () {
        console.log('new name')
        return `${this.firstName} ${this.lastName}`
      },
      set (name) {
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  // mounted () {
  //   this.obj = {
  //     a: 0
  //   }
  // },
  methods: {
    getName () {
      console.log('getName invoked')
      return `${this.firstName} ${this.lastName}`
    }
  },
  watch: {
    firstName: {
      handler (newName, oldName) {
        this.fullName = newName + ' ' + this.lastName
      },
      immediate: true,
      deep: true
    },
    'obj.a': {
      handler (newV, oldV) {
        console.log('obj.a changed')
      },
      immediate: true
    }
  }
})
