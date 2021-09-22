import Profile from "/@components/Profile.vue"
import Project from "/@components/Project.vue"
import { defineComponent } from "vue"

const NotFound = defineComponent({
  template: '<div>Not Found</div>'
})

const routes = [
  { path: '/', redirect: '/profile' },
  { path: '/profile', name: 'profile', component: Profile, alias: '/home' },
  { path: '/project', name: 'project', component: Project },
  { path: '/:catchAll(.*)+', component: NotFound },
]

export default routes