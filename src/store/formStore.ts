import { FormType, type Form } from '@/types/form.d'
import { createStore } from 'vuex'

interface IformStore {
  forms: Form[],
  currentForm: Form
}

export const formStore = createStore({ 
  state:{
    forms: [],
    currentForm: {  
      fields: [],
      type: FormType.SIMPLE
    }
  },
  mutations: {
    saveCurrentForm(state:IformStore, form:Form) {
      try {
        console.log(form)
        state.currentForm = form
        state.forms.push(form)
      } catch (error) {
        console.log(error)
      }

    }

  },
  getters: {
    getCurrentForm: (state:IformStore) => () => state.currentForm
  }
})