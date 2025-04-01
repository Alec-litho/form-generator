<template>
  <div class="forms-list">
    <h1>Saved Forms</h1>

    <div v-if="forms.length === 0" class="empty-state">No forms created yet</div>

    <div v-else class="forms-container">
      <div v-for="form in forms" :key="form.id" class="form-card">
        <div class="form-header">
          <h3>{{ form.title }}</h3>
          <div class="form-meta">
            <span>Created: {{ formatDate(form.createdAt) }}</span>
          </div>
        </div>

        <div class="form-preview">
          <div v-for="(value, fieldName) in form.fields" :key="fieldName" class="form-field">
            <strong>{{ fieldName }}:</strong>
            <span>{{ formatValue(value) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const forms = computed(() => store.getters.allForms);

const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const formatValue = (value: any) => {
  if (Array.isArray(value)) return value.join(", ");
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return value || "-";
};

const deleteForm = (formId: string) => {
  store.commit("DELETE_FORM", formId);
};
</script>

<style scoped>
.forms-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.empty-state {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.forms-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.form-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.form-header {
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.form-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 0.9em;
  color: #666;
}

.delete-btn {
  background: #ff4444;
  color: white;
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
}

.form-preview {
  display: grid;
  gap: 0.5rem;
}

.form-field {
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0;
  border-bottom: 1px solid #f5f5f5;
}
</style>
