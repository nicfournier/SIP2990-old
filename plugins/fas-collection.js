import Vue from 'vue'
 
//import EdTask from '~/fas-collection/src/components'
import EdTask from 'fas-collection/src/components'
import EdResource from 'fas-collection/src/components'

//Vue.component('Edtask', Edtask)

export default () => {
  //Vue.use(EdResource, { EdResource })
  //Vue.use(EdResource)
  Vue.use([EdTask, EdResource])
}

//Vue.use(EdResource)
