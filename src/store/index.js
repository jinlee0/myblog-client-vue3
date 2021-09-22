import { createStore } from 'vuex'
import { about_me } from './modules/about-me'
import { projects } from './modules/projects'

export const store = createStore({
  modules: {
    about_me,
    projects,
  }
})