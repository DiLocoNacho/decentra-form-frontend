<template>
  <main class="flex flex-1 flex-col col-span-2 w-full pt-12 px-16">
    <FormStepCounter />
    <div>
      <h1 class="mt-2 text-5xl font-bold leading-tight text-secondary">Name</h1>
      <p class="text-2xl font-light text-secondary text-opacity-60">
        What is your name?
      </p>
    </div>
    <input
      type="text"
      placeholder="Your name"
      class="mt-10 w-full px-4 py-4 text-secondary placeholder-white placeholder-opacity-60 bg-white bg-opacity-10 border border-primary rounded-lg"
    />
    <FormNextBack />
  </main>
</template>

<script>
export default {
  props: {
    steps: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
}
</script>

<style></style>
