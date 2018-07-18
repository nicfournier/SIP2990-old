import Vue from 'vue'
import Element from 'element-ui/lib/element-ui.common'
import locale from 'element-ui/lib/locale/lang/en'
 
 
 
import Tiles from 'my-vue-lib-fel'
 
export default () => {
  Vue.use(Element, { locale })
  Vue.use(Tiles)
 
}