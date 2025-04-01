import { FormType, type Form } from "@/types/form.d";
import { createStore } from "vuex";

interface IformStore {
  forms: Form[];
  currentForm: Form;
}

export const formStore = createStore({
  state: {
    forms: [] as FormData[],
  },
  mutations: {
    addForm(state: IformStore, form: FormData) {
      state.forms.push(form);
    },
  },
  actions: {
    saveForm({ commit }, form: Omit<FormData, "id" | "createdAt">) {
      const newForm = {
        ...form,
        id: Date.now().toString(),
        createdAt: new Date(),
      };
      commit("addForm", newForm);
    },
  },
  getters: {
    allForms: (state: IformStore) => () => state.forms,
  },
});
