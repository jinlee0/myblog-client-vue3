export const projects = {
  namespaced: true,
  state: () => ({
    projects: [],
  }),
  getters: {
    projects: (state) => (filter = null) => {
      if (filter) {
        return state.projects.filter((i) => i.name == filter)
      }
      return state.projects
    },
    projects_count: (state) => {
      return state.projects.length
    }
  },
  mutations: {
    SET_DATA(state, data) {
      state.projects = data;
    },
  },
  actions: {
    setProjects: ({ commit }, data) => {
      if (data.length > 0) {
        commit('SET_DATA', data)
      }
    }
  }
}