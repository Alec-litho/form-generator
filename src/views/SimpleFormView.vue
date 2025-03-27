<template>
  <FormGenerator :config="formConfig" v-model="formData" @submit="handleSubmit" @cancel="handleCancel">
    <template #custom-input="{ field, value }">
      <div class="custom-input-wrapper">
        <label :for="field.name">{{ field.label }}</label>
        <input :id="field.name" v-model="formData[field.name]" class="custom-input" v-bind="field.attributes" />
      </div>
    </template>
  </FormGenerator>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import FormGenerator from "@/components/FormGenerator.vue";
import type { FormConfig } from "@/types/form";

const formData = reactive({
  username: "",
  newsletter: false,
  country: "us",
});

const formConfig: FormConfig = {
  submitText: "Save Profile",
  cancelText: "Go Back",
  fields: [
    {
      type: "input",
      name: "username",
      label: "Username",
      attributes: { type: "text", placeholder: "Enter username" },
      slotName: "custom-input",
    },
    {
      type: "select",
      name: "country",
      label: "Country",
      options: [
        { value: "us", text: "United States" },
        { value: "ca", text: "Canada" },
      ],
    },
    {
      type: "checkbox",
      name: "newsletter",
      label: "Subscribe to newsletter",
      attributes: { type: "checkbox" },
    },
  ],
};

const handleSubmit = (data: typeof formData) => {
  console.log("Form submitted:", data);
};

const handleCancel = () => {
  console.log("Form cancelled");
};
</script>

<style lang="scss" scoped>
.simple-form-view {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;

  h2 {
    color: #2c3e50;
    margin-bottom: 2rem;
    text-align: center;
  }

  .custom-input-wrapper {
    margin-bottom: 1.5rem;

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: #4a5568;
    }

    .custom-input {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid #e2e8f0;
      border-radius: 6px;
      transition: border-color 0.3s ease;

      &:focus {
        outline: none;
        border-color: #42b983;
        box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.1);
      }
    }
  }

  .form-actions {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
  }
}
</style>
