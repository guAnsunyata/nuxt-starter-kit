import { Module } from 'vuex'

export const createStoreMoudle = <R>(rootState: R): Module<State, R> => {
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
