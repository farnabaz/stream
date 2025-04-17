<script setup lang="ts">
import StreamPre from './components/StreamPre.vue'
import type { DefineComponent } from 'vue';

const id = ref('1')
const content = ref('')
const fullContent = `
A Vue composable is a reusable piece of code that can be used to manage state and side effects in a Vue application. Here's a basic example of a Vue composable:

**Counter Composable**
\`\`\`javascript
import { ref, onMounted, onUnmounted } from 'vue'

export default function useCounter() {
  const count = ref(0)

  const increment = () => {
    count.value++
  }

  const decrement = () => {
    count.value--
  }

  onMounted(() => {
    console.log('Counter mounted')
  })

  onUnmounted(() => {
    console.log('Counter unmounted')
  })

  return { count, increment, decrement }
}
\`\`\`
Let me explain what's going on in this example:

* We import the necessary functions from Vue: \`ref\` for creating reactive state, \`onMounted\` and \`onUnmounted\` for lifecycle hooks, and \`export default\` to make the composable available for use in other components.
* We create a \`count\` ref with an initial value of 0.

**Using the Counter Composable**
\`\`\`html
<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <p>Count: {{ count }}</p>
  </div>
</template>

<script>
import { useCounter } from './Counter.vue'

export default {
  setup() {
    const { count, increment, decrement } = useCounter()
    return {
      count,
      increment,
      decrement
    }
  }
}
<` + `/script>
\`\`\`
In this example, we import the \`useCounter\` composable and use it in a Vue component. We destructure the returned object to get the \`count\`, \`increment\`, and \`decrement\` functions, and use them in the template.

I hope this helps! Let me know if you have any questions or need further assistance.
`

const components = {
  pre: StreamPre as unknown as DefineComponent
}

onMounted(async () => {
  let index = 0
  let interval = setInterval(() => {
    content.value = fullContent.slice(0, index)

    index += Math.floor(Math.random() * 10)

    if (index > fullContent.length) {
      clearInterval(interval)
    }
  }, 20)
})

</script>

<template>
  <div>
    <MDCCached
      :value="content"
      :cache-key="id"
      :components="components"
      :parser-options="{ highlight: false }"
      class="*:first:mt-0 *:last:mb-0"
    />
  </div>
</template>
