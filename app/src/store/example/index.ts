import { Module } from 'vuex'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createStoreModule = <R>(rootState: R): Module<State, R> => {
  return {
    namespaced: true,
    state() {
      return {
        pageData: '',
      }
    },
    mutations: {
      update(state, payload) {
        state.pageData = payload
      },
    },
  }
}

export interface State {
  pageData: string
}
