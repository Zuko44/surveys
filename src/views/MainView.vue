<script setup lang="ts">
import { ref } from 'vue'
import DateFilterForm from '@/components/DateFilterForm.vue'
import StatusMessage from '@/components/StatusMessage.vue'
import SurveysList from '@/components/SurveysList.vue'
import type { Survey, StatusMessageProps, ApiResponse } from '@/types/index'

const surveys = ref<Survey[]>([])
const loading = ref<boolean>(false)
const error = ref<StatusMessageProps>({ message: '' })

async function handleDateSubmit({ from, to }: { from: string; to: string }) {
  error.value.message = ''
  surveys.value = []

  try {
    loading.value = true
    const url = `https://bot.artis21.ru/api/get_surveys.php?from_date=${from}&to_date=${to}`
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Ошибка при получении данных с сервера.')
    }

    // Явно типизируем данные
    const data: ApiResponse = await response.json()

    // Если данные не массив, обернуть в массив (либо API всегда возвращает массив)
    const result = Array.isArray(data) ? data : [data]

    // Фильтрация по статусу, если требуется (по заданию API возвращает "finished", но на всякий случай)
    surveys.value = result.filter((item) => item.status === 'finished')
  } catch (err: unknown) {
    // Проверяем тип ошибки
    if (err instanceof Error) {
      error.value.message = err.message
    } else {
      error.value.message = 'Произошла неизвестная ошибка.'
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <v-container>
    <h1>Опросы за период</h1>
    <!-- Компонент формы дат -->
    <DateFilterForm @submit="handleDateSubmit" />

    <!-- Компонент статуса или ошибок -->
    <StatusMessage v-if="error.message" :message="error.message" type="error" />
    <StatusMessage v-else-if="loading" message="Загрузка..." type="info" />

    <!-- Список опросов -->
    <SurveysList :surveys="surveys" />
  </v-container>
</template>
