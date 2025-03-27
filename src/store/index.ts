import { createStore, Store } from 'vuex'
import { formStore } from './formStore'

export interface RootState {
  form: any
}

export const store = createStore<RootState>({
  modules: {
    form: formStore
  }
})

export type AppStore = Omit<Store<RootState>, 'getters'> & {
  getters: {
    [K in keyof (typeof formStore)['getters']]: 
      ReturnType<(typeof formStore)['getters'][K]>
  }
}

export function useStore() {
  return store as AppStore
}

export function initializeStore() {
  return store
}