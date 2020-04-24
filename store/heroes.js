import Vue from 'vue'

export const state = () => ({
  currentPage: 0,
  itemsPerPage: 5,
  editingItem: {},
  dynamicField: 'origin_description',
  items:  [
    {
      id: 1,
      nickname: 'superman',
      real_name: 'https://i.imgur.com/hKPUDSG.jpg',
      origin_description: 'desc',
      superpowers: 'powers',
      catch_phrase: 'phrase',
      images: ['https://i.ebayimg.com/images/g/Z3AAAOSwOYRbvlo0/s-l400.png', 'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png']
    },
    {
      id: 2,
      nickname: 'superman',
      real_name: 'https://i.imgur.com/hKPUDSG.jpg',
      origin_description: 'desc',
      superpowers: 'powers',
      catch_phrase: 'phrase',
      images: ['https://i.ebayimg.com/images/g/Z3AAAOSwOYRbvlo0/s-l400.png', 'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png']
    },
    {
      id: 3,
      nickname: 'superman',
      real_name: 'https://i.imgur.com/hKPUDSG.jpg',
      origin_description: 'desc',
      superpowers: 'powers',
      catch_phrase: 'phrase',
      images: ['https://i.ebayimg.com/images/g/Z3AAAOSwOYRbvlo0/s-l400.png', 'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png']
    },
    {
      id: 4,
      nickname: 'superman',
      real_name: 'https://i.imgur.com/hKPUDSG.jpg',
      origin_description: 'desc',
      superpowers: 'powers',
      catch_phrase: 'phrase',
      images: ['https://i.ebayimg.com/images/g/Z3AAAOSwOYRbvlo0/s-l400.png', 'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png']
    },
    {
      id: 5,
      nickname: 'superman',
      real_name: 'https://i.imgur.com/hKPUDSG.jpg',
      origin_description: 'desc',
      superpowers: 'powers',
      catch_phrase: 'phrase',
      images: ['https://i.ebayimg.com/images/g/Z3AAAOSwOYRbvlo0/s-l400.png', 'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png']
    },
    {
      id: 6,
      nickname: 'superman',
      real_name: 'https://i.imgur.com/hKPUDSG.jpg',
      origin_description: 'desc',
      superpowers: 'powers',
      catch_phrase: 'phrase',
      images: ['https://i.ebayimg.com/images/g/Z3AAAOSwOYRbvlo0/s-l400.png', 'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png']
    },
    {
      id: 7,
      nickname: 'superman',
      real_name: 'https://i.imgur.com/hKPUDSG.jpg',
      origin_description: 'desc',
      superpowers: 'powers',
      catch_phrase: 'phrase',
      images: ['https://i.ebayimg.com/images/g/Z3AAAOSwOYRbvlo0/s-l400.png', 'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png']
    },
  ]
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
