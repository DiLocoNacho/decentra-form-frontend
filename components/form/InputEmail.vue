<template>
  <div>
    <div class="flex justify-between">
      <label for="email" class="block text-2xl font-medium text-white">{{
        config.title
      }}</label>
      <span
        v-if="config.required"
        id="text-optional"
        class="text-lg font-light text-white text-opacity-60"
        >Required</span
      >
    </div>
    <p class="text-white text-opacity-70 text-lg">{{ config.description }}</p>

    <div class="mt-4">
      <input
        id="email"
        type="email"
        name="email"
        class="block py-4 w-full bg-white bg-opacity-5 border-white border-opacity-10 sm:text-sm text-white text-3xl rounded-md"
        :placeholder="config.placeholder"
        aria-describedby="email-optional"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style></style>
