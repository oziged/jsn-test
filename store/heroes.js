import Vue from 'vue'

export const state = () => ({
  currentPage: 0,
  itemsPerPage: 5,
  editingItem: {},
  dynamicField: 'origin_description',
  items: []
})

export const getters = {
  paginatedItems(state) {
    let start = state.itemsPerPage * state.currentPage
    let end = start + state.itemsPerPage
    return state.items.slice(start, end)
  }
}

export const actions = {
  createHero({ state, commit }, hero) {
    hero = {id: state.items[state.items.length-1].id + 1, ...hero}
    commit('CREATE_HERO', hero)
    return hero.id
  },

  updateHero({ commit }, payload) {
    commit('UPDATE_HERO', payload)
  },

  deleteHero({ commit }, id) {
    commit('DELETE_HERO', id)
  },

  updateState({ commit }, payload) {
    commit('UPDATE_STATE', payload)
  }
}

export const mutations = {
  CREATE_HERO(state, hero) {
    state.items.push(hero)
  },

  UPDATE_HERO(state, payload) {
    let oldHeroIndex = state.items.findIndex(item => item.id == payload.heroId)
    let oldHero = state.items[oldHeroIndex]

    Vue.set(state.items, oldHeroIndex, {...oldHero, ...payload.newHero})
    console.log(state.items[oldHeroIndex])
  },

  DELETE_HERO(state, id) {
    let heroIndex = state.items.findIndex(item => item.id == id)
    state.items.splice(heroIndex, 1)
  },

  UPDATE_STATE(state, payload) {
    state[payload.key] = payload.value
  }
}
