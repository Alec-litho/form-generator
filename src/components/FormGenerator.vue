<template>
    <form class="form-generator" @submit.prevent="handleSubmit">
      <div v-for="field in config.fields" :key="field.name" class="form-field">
        <slot :name="field.slotName || field.name" :field="field" :value="modelValue[field.name]">
          <label>{{ field.label }}</label>
          <component
            :is="getFieldComponent(field.type)"
            v-bind="field.attributes"
            v-model="modelValue[field.name]"
          />
        </slot>
      </div>
      
      <div class="form-actions">
        <button type="submit" class="submit-button">
          {{ config.submitText || 'Submit' }}
        </button>
        <button type="button" class="cancel-button" @click="handleCancel">
          {{ config.cancelText || 'Cancel' }}
        </button>
      </div>
    </form>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import type { FormConfig } from '@/types/form'
  
  const props = defineProps<{
    config: FormConfig
    modelValue: Record<string, unknown>
  }>()
  
  const emit = defineEmits(['submit', 'cancel', 'update:modelValue'])
  
  const formData = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
  })
  
  const getFieldComponent = (type: string) => {
    const components = {
      input: 'input',
      select: 'select',
      checkbox: 'input',
      textarea: 'textarea'
    }
    return components[type as keyof typeof components]
  }
  
  const handleSubmit = () => emit('submit', formData.value)
  const handleCancel = () => emit('cancel')
  </script>
  
  <style lang="scss">

  .form-generator {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;

  .form-field {
    margin-bottom: 1.5rem;

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    input, select, textarea {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    textarea {
      min-height: 100px;
    }
  }

  .form-actions {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;

    button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &.submit-button {
        background-color: #42b983;
        color: white;
      }

      &.cancel-button {
        background-color: #ff4444;
        color: white;
      }
    }
  }
}
  </style>