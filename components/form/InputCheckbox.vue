<template>
  <fieldset>
    <div class="flex justify-between">
      <label for="checkbox" class="block text-2xl font-medium text-white">{{
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

    <div
      class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
    >
      <div
        v-for="(option, index) of config.options"
        :key="index"
        class="relative flex items-start py-4"
      >
        <div class="min-w-0 flex-1 text-sm">
          <label :for="index" class="font-medium text-gray-700 select-none">{{
            option.option
          }}</label>
        </div>
        <div class="ml-3 flex items-center h-5">
          <input
            :id="index"
            :name="index"
            type="checkbox"
            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
      </div>
    </div>
  </fieldset>
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
