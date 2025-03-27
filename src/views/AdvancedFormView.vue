<template>
    <div class="advanced-form">
      <h2>Advanced User Profile</h2>
      
      <FormGenerator
        :config="formConfig"
        v-model="formData"
        @submit="handleSubmit"
        @cancel="handleCancel"
      >
        <template #phone="{ field, value }">
          <div class="custom-phone-input">
            <label :for="field.name">{{ field.label }}</label>
            <input
              :id="field.name"
              v-model="formData[field.name]"
              v-mask="'+7 (###) ###-##-##'"
              type="tel"
              placeholder="+7 (___) ___-__-__"
            />
          </div>
        </template>
  
        <template #address="{ field }">
          <div class="address-group">
            <input
              v-model="formData.street"
              placeholder="Street"
              class="address-input"
            />
            <div class="address-row">
              <input
                v-model="formData.city"
                placeholder="City"
                class="address-input"
              />
              <input
                v-model="formData.zip"
                placeholder="ZIP Code"
                class="address-input"
                style="max-width: 120px;"
              />
            </div>
          </div>
        </template>
      </FormGenerator>
    </div>
  </template>
  
  <script setup lang="ts">
  import { reactive } from 'vue'
  import FormGenerator from '@/components/FormGenerator.vue'
  import type { FormConfig } from '@/types/form'
  
  const formData = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bio: '',
    experience: [] as string[],
    notifications: true,
    street: '',
    city: '',
    zip: ''
  })
  
  const formConfig: FormConfig = {
    submitText: 'Save Profile',
    cancelText: 'Cancel',
    fields: [
      {
        type: 'input',
        name: 'firstName',
        label: 'First Name',
        attributes: { required: true }
      },
      {
        type: 'input',
        name: 'lastName',
        label: 'Last Name',
        attributes: { required: true }
      },
      {
        type: 'input',
        name: 'email',
        label: 'Email',
        attributes: { type: 'email', required: true }
      },
      {
        type: 'input',
        name: 'phone',
        label: 'Phone Number',
        slotName: 'phone'
      },
      {
        type: 'textarea',
        name: 'bio',
        label: 'Biography',
        attributes: { rows: 4 }
      },
      {
        type: 'select',
        name: 'experience',
        label: 'Experience Level',
        attributes: { multiple: true },
        options: [
          { value: 'beginner', text: 'Beginner' },
          { value: 'intermediate', text: 'Intermediate' },
          { value: 'advanced', text: 'Advanced' }
        ]
      },
      {
        type: 'checkbox',
        name: 'notifications',
        label: 'Enable Notifications'
      },
      {
        type: 'input',
        name: 'address',
        label: 'Shipping Address',
        slotName: 'address'
      }
    ]
  }
  
  const handleSubmit = (data: typeof formData) => {
    console.log('Advanced form submitted:', data)
  }
  
  const handleCancel = () => {
    console.log('Advanced form cancelled')
  }
  </script>
  
  <style lang="scss" scoped>
  .advanced-form {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  
    h2 {
      color: #2c3e50;
      margin-bottom: 2rem;
      text-align: center;
    }
  }
  
  .custom-phone-input {
    input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-family: inherit;
    }
  }
  
  .address-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  
    .address-row {
      display: flex;
      gap: 1rem;
    }
  
    .address-input {
      flex: 1;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }
  </style>