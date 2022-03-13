<template>
  <header class="flex items-center py-12">
    <img :src="config.image" alt="" class="w-24 h-24 rounded-full" />
    <div class="ml-6 space-y-2">
      <h1 class="text-5xl font-bold leading-tight text-secondary">
        {{ config.name }}
      </h1>
      <p class="text-2xl font-light text-secondary text-opacity-60">
        {{ config.description }}
      </p>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
}
</script>

<style></style>
