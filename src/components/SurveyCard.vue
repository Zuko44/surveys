<script setup lang="ts">
import type { Survey } from '@/types/index'

const props = defineProps<{
  survey: Survey
}>()
</script>

<template>
  <v-card class="survey-card">
    <v-card-text>
      <div><strong>Order ID:</strong> {{ props.survey.order_id }}</div>
      <div><strong>Source:</strong> {{ props.survey.source }}</div>
      <div><strong>Product Rating:</strong> {{ props.survey.product_rating }}</div>
      <div><strong>Comment:</strong> {{ props.survey.comment }}</div>
      <div><strong>Status:</strong> {{ props.survey.status }}</div>
      <div><strong>DateTime:</strong> {{ props.survey.dateTime }}</div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.survey-card {
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
