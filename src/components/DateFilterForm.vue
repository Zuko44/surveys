<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const fromDate = ref<string>('')
const toDate = ref<string>('')

const emit = defineEmits<{
  (e: 'submit', payload: { from: string; to: string }): void
}>()

function submitDates() {
  emit('submit', { from: fromDate.value, to: toDate.value })
}
</script>

<template>
  <form class="date-filter-form" @submit.prevent="submitDates">
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="fromDate"
          name="fromDate"
          label="Начальная дата"
          type="date"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="toDate"
          name="toDate"
          label="Конечная дата"
          type="date"
          required
        ></v-text-field>
      </v-col>
    </v-row>
    <v-btn type="submit" color="primary">Загрузить опросы</v-btn>
  </form>
</template>

<style scoped>
.date-filter-form {
  margin-bottom: 20px;
}
</style>
