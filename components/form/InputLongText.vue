<template>
  <div>
    <div class="flex justify-between">
      <label for="long-text" class="block text-2xl font-medium text-white">{{
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
      <textarea
        id="long-text"
        rows="4"
        name="long-text"
        class="block py-4 w-full bg-white bg-opacity-5 border-white border-opacity-10 sm:text-sm text-white text-3xl rounded-md"
        :placeholder="config.placeholder"
      ></textarea>
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
