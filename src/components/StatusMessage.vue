<script setup lang="ts">
import type { StatusMessageProps } from '@/types/index'

const { message, type = 'info' } = defineProps<StatusMessageProps>()
</script>

<template>
  <div v-if="message" class="status-message" :class="type">
    {{ message }}
  </div>
</template>

<style scoped>
.status-message {
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
}

.status-message.info {
  background-color: #e3f2fd;
  color: #0d47a1;
}

.status-message.error {
  background-color: #ffebee;
  color: #b71c1c;
}

.status-message.success {
  background-color: #e8f5e9;
  color: #1b5e20;
}
</style>
