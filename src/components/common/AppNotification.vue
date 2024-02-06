<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  type: 'success' | 'error' | 'info'
}>()

const typeClass = computed(() => {
  switch (props.type) {
    case 'success':
      return 'border-solid border border-green-100 text-green-800'
    case 'error':
      return 'border-solid border border-red-600 text-red-600'
    case 'info':
      return 'border-solid border border-blue-100 text-blue-800'
    default:
      return 'border-solid border border-blue-100 text-blue-800'
  }
})
</script>

<template>
  <div data-cy="notification" class="p-4" :class="typeClass">
    <slot></slot>
  </div>
</template>
