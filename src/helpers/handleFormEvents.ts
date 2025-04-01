import router from "@/router"
import { formStore } from "@/store/formStore"
import type { FormType } from "@/types/form"

const store = formStore

export const handleSubmit = (data: typeof FormData, type: FormType) => {
    // store.commit("saveCurrentForm", {fields: data, type})
    store.dispatch('saveForm', {
      title: `Form ${new Date().toLocaleString()}`,
      fields: data
    });
    router.push('/')
  }
  
export const handleCancel = () => {
    router.push('/')
  }