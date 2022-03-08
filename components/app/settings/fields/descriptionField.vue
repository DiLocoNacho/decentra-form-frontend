<template>
  <div>
    <label for="email" class="block text-sm font-medium text-gray-700"
      >Description</label
    >
    <div class="mt-1">
      <input
        type="text"
        name="description"
        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="you@example.com"
        @input="changeInput('description', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeInput(field, value) {
      this.$emit('valueChanged', { field, value })
    },
  },
}
</script>

<style></style>
