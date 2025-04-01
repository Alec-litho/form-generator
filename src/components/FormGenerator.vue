<template>
  <form class="form-generator" @submit.prevent="handleSubmit">
    <div v-for="field in config.fields" :key="field.name" class="form-field">
      <slot :name="field.slotName || field.name" :field="field" :value="modelValue[field.name]">
        <label :for="field.name">{{ field.label }}</label>

        <component
          v-if="field.type !== 'checkbox'"
          :is="getFieldComponent(field.type)"
          :id="field.name"
          :value="modelValue[field.name]"
          @input="(e) => updateField(field.name, e.target.value)"
          @change="(e) => updateField(field.name, e.target.value)"
          v-bind="field.attributes"
        >
          <option v-for="option in field.options" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </component>

        <input v-else type="checkbox" :id="field.name" :checked="!!modelValue[field.name]" @change="(e) => updateField(field.name, e.target.checked)" v-bind="field.attributes" />
      </slot>
    </div>

    <div class="form-actions">
      <button type="submit" class="submit-btn">
        {{ config.submitText || "Submit" }}
      </button>
      <button type="button" class="cancel-btn" @click="handleCancel">
        {{ config.cancelText || "Cancel" }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

interface FormConfig {
  submitText?: string;
  cancelText?: string;
  fields: Array<{
    type: "input" | "select" | "checkbox" | "textarea";
    name: string;
    label: string;
    slotName?: string;
    attributes?: Record<string, unknown>;
    options?: Array<{ value: string; label: string }>;
  }>;
}

const props = defineProps<{
  config: FormConfig;
  modelValue: Record<string, any>;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: Record<string, any>): void;
  (e: "submit"): void;
  (e: "cancel"): void;
}>();

const getFieldComponent = (type: string) => {
  const components = {
    input: "input",
    select: "select",
    checkbox: "input",
    textarea: "textarea",
  };
  return components[type as keyof typeof components];
};

const updateField = (fieldName: string, value: any) => {
  const updatedModel = { ...props.modelValue, [fieldName]: value };
  emit("update:modelValue", updatedModel);
};

const handleSubmit = () => emit("submit", props.modelValue);
const handleCancel = () => emit("cancel");
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

    input,
    select,
    textarea {
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
