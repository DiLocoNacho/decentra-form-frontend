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
      <div class="relative flex items-start py-4">
        <div class="min-w-0 flex-1 text-sm">
          <label for="option-1" class="font-medium text-gray-700 select-none"
            >Option 1</label
          >
        </div>
        <div class="ml-3 flex items-center h-5">
          <input
            id="option-1"
            name="option-1"
            type="checkbox"
            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
      </div>

      <div class="relative flex items-start py-4">
        <div class="min-w-0 flex-1 text-sm">
          <label for="option-2" class="font-medium text-gray-700 select-none"
            >Option 2</label
          >
        </div>
        <div class="ml-3 flex items-center h-5">
          <input
            id="option-2"
            name="option-2"
            type="checkbox"
            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
      </div>

      <div class="relative flex items-start py-4">
        <div class="min-w-0 flex-1 text-sm">
          <label for="option-3" class="font-medium text-gray-700 select-none"
            >Option 3</label
          >
        </div>
        <div class="ml-3 flex items-center h-5">
          <input
            id="option-3"
            name="option-3"
            type="checkbox"
            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
      </div>

      <div class="relative flex items-start py-4">
        <div class="min-w-0 flex-1 text-sm">
          <label for="option-4" class="font-medium text-gray-700 select-none"
            >Option 4</label
          >
        </div>
        <div class="ml-3 flex items-center h-5">
          <input
            id="option-4"
            name="option-4"
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
