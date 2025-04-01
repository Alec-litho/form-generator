<template>
  <div class="advanced-form">
    <h2>Advanced User Profile</h2>

    <FormGenerator :config="formConfig" v-model="formData" @submit="(data) => handleSubmit(data, FormType.ADVANCED)">
      <template #phone="{ field }">
        <div class="custom-phone-input">
          <label :for="field.name">{{ field.label }}</label>
          <input
            :id="field.name"
            :value="formData[field.name]"
            @input="(e) => updateModel(field.name, e.target.value)"
            v-mask="'+7 (###) ###-##-##'"
            type="tel"
            placeholder="+7 (___) ___-__-__"
          />
        </div>
      </template>

      <template #address="{ field }">
        <div class="address-group">
          <input v-model="formData.street" @input="(e) => updateModel('street', e.target.value)" placeholder="Street" />
          <div class="address-row">
            <input v-model="formData.city" @input="(e) => updateModel('city', e.target.value)" placeholder="City" />
            <input v-model="formData.zip" @input="(e) => updateModel('zip', e.target.value)" placeholder="ZIP Code" style="max-width: 120px" />
          </div>
        </div>
      </template>
    </FormGenerator>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import FormGenerator from "@/components/FormGenerator.vue";
import { FormType } from "@/types/form.d";
import { handleCancel, handleSubmit } from "@/helpers/handleFormEvents";

const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  bio: "",
  experience: [],
  notifications: true,
  street: "",
  city: "",
  zip: "",
});

const updateModel = (fieldName: string, value: any) => {
  formData.value = { ...formData.value, [fieldName]: value };
};

const formConfig = {
  submitText: "Save Profile",
  cancelText: "Cancel",
  fields: [
    {
      type: "input",
      name: "firstName",
      label: "First Name",
      attributes: { required: true },
    },
    {
      type: "input",
      name: "lastName",
      label: "Last Name",
      attributes: { required: true },
    },
    {
      type: "input",
      name: "email",
      label: "Email",
      attributes: { type: "email", required: true },
    },
    {
      type: "input",
      name: "phone",
      label: "Phone Number",
      slotName: "phone",
    },
    {
      type: "textarea",
      name: "bio",
      label: "Biography",
      attributes: { rows: 4 },
    },
    {
      type: "select",
      name: "experience",
      label: "Experience Level",
      options: [
        { value: "beginner", label: "Beginner" },
        { value: "intermediate", label: "Intermediate" },
        { value: "advanced", label: "Advanced" },
      ],
    },
    {
      type: "checkbox",
      name: "notifications",
      label: "Enable Notifications",
    },
    {
      type: "input",
      name: "address",
      label: "Shipping Address",
      slotName: "address",
    },
  ],
};
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
