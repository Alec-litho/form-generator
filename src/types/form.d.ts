export interface FormField {
    type: 'input' | 'select' | 'checkbox' | 'textarea'
    name: string
    label: string
    attributes?: Record<string, unknown>
    options?: Array<{ value: string | number; text: string }>
    slotName?: string
  }
  
  export interface Form {
    fields: FormField[]
    type: FormType
  }


  export enum FormType{
    SIMPLE,
    ADVANCED
  }