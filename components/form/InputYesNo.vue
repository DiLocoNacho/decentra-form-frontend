<template>
  <div>
    <div class="flex justify-between">
      <label
        for="yes-no-method"
        class="block text-2xl font-medium text-white"
        >{{ config.title }}</label
      >
      <span
        v-if="config.required"
        id="text-optional"
        class="text-lg font-light text-white text-opacity-60"
        >Required</span
      >
    </div>
    <p class="text-white text-opacity-70 text-lg">{{ config.description }}</p>

    <fieldset class="mt-4">
      <legend class="sr-only">Yes NO</legend>
      <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
        <div class="flex items-center">
          <input
            id="yes"
            name="yes-no-method"
            type="radio"
            checked
            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
          />
          <label for="yes" class="ml-3 block text-sm font-medium text-gray-700">
            Yes
          </label>
        </div>

        <div class="flex items-center">
          <input
            id="no"
            name="yes-no-method"
            type="radio"
            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
          />
          <label for="no" class="ml-3 block text-sm font-medium text-gray-700">
            No
          </label>
        </div>
      </div>
    </fieldset>
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
