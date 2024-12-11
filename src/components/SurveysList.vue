<script setup lang="ts">
import SurveyCard from '@/components/SurveyCard.vue'
import type { Survey } from '@/types/index'

const { surveys } = defineProps<{
  surveys?: Survey[]
}>()
</script>

<template>
  <v-row v-if="surveys?.length" class="survey-list">
    <v-col v-for="survey in surveys" :key="survey.id" cols="12" sm="6" md="4">
      <SurveyCard :survey="survey" />
    </v-col>
  </v-row>
  <div v-else>Нет данных для выбранного периода.</div>
</template>

<style scoped>
.survey-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
