import router from "@/router"
import { formStore } from "@/store/formStore"
import type { FormType } from "@/types/form"

const store = formStore

export const handleSubmit = (data: typeof FormData, type: FormType) => {
  console.log(data)
    store.commit("saveCurrentForm", {fields: data, type})
    router.push('/')
  }
  
export const handleCancel = () => {
    router.push('/')
  }