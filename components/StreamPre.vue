<script setup lang="ts">
import { ShikiCachedRenderer } from 'shiki-stream/vue'
import { useHighlighter } from '~/composables/useHighlighter'

const highlighter = await useHighlighter()

const props = defineProps<{
  code: string
  language: string
  class?: string
  meta?: string
}>()

const trimmedCode = computed(() => {
  return props.code.trim()
})
const _lang = computed(() => {
  switch (props.language) {
    case 'vue':
      return 'vue'
    case 'javascript':
      return 'js'
    case 'typescript':
      return 'ts'
    case 'css':
      return 'css'
    default:
      return props.language
  }
})
</script>

<template>
  <code>lang: {{ props.language }}</code>
  <ShikiCachedRenderer
    :highlighter="highlighter"
    :code="trimmedCode"
    :lang="props.language"
    theme="github-dark"
  />
</template>