import { createApp } from 'vue'
import App from './App.vue'
import Attribute from './Attribute.vue'
import On from './On.vue'
import Model from './Model.vue'
import ConditionRenderer from './ConditionRenderer.vue'
import CalcAttribute from './CalcAttribute.vue'
import Template from './Template.vue'
import Watch from './Watch.vue'

import './assets/main.css'

//createApp(On).mount('#app')
//createApp(Model).mount('#app')
//createApp(CalcAttribute).mount('#app');
createApp(Watch).mount('#app');
