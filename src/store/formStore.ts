import type { FormConfig } from '@/types/form'

export interface FormState {
  formConfigs: Record<string, FormConfig>
}

export const formStore = {
  namespaced: true,
  state: () => ({
    formConfigs: {}
  }),
  mutations: {
    saveFormConfig(state, { name, config }) {
      state.formConfigs[name] = config
    }
  },
  getters: {
    getFormConfig: (state) => (name: string) => state.formConfigs[name]
  }
}