export interface FormField {
    type: 'input' | 'select' | 'checkbox' | 'textarea'
    name: string
    label: string
    attributes?: Record<string, unknown>
    options?: Array<{ value: string | number; text: string }>
    slotName?: string
  }
  
  export interface FormConfig {
    fields: FormField[]
    submitText?: string
    cancelText?: string
  }