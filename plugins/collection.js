import Vue from 'vue'
import edActivity from '~/components/instructional-collection/edActivity.vue'
//import edObjective from '@/components/instructional-collection/edObjective.vue'
import NavigationCard from '@/components/navigation-collection/NavigationCard.vue'
import Step from '@/components/navigation-collection/Step.vue'
import Steps from '@/components/navigation-collection/Steps.vue'
import BadgeIcon from '@/components/signage-collection/BadgeIcon.vue'
import edEssential from '@/components/instructional-collection/edEssential.vue'
import edIntroduction from '@/components/instructional-collection/edIntroduction.vue'
import revealCard from '@/components/instructional-collection/revealCard.vue'

Vue.component('edActivity', edActivity)
//Vue.component('edObjective', edObjective)
Vue.component('NavigationCard', NavigationCard)
Vue.component('Step', Step)
Vue.component('Steps', Steps)
Vue.component('BadgeIcon', BadgeIcon)
Vue.component('edEssential', edEssential)
Vue.component('edIntroduction', edIntroduction)
Vue.component('revealCard', revealCard)