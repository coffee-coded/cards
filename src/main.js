import Vue from 'vue'
import App from './App.vue'

// Global component
// Vue.component('text-input',{
//   template: '<textarea :placeholder="textValue" @click="changeText"></textarea>',
//   data: function() {
//     return{
//       textValue: 'Type here'
//     }
//   },
//   methods: {
//     changeText: function() {
//       this.textValue = "Text Changed"
//     }
//   }
// })

// local component
// var component1 = {
//   template: "<p>Component 1</p>"
// }

export const EventBus = new Vue();


new Vue({
  el: '#app',
  render: h => h(App)
})
