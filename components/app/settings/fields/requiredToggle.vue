<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->

  <div class="flex items-center justify-between">
    <label for="email" class="block text-sm font-medium text-gray-700"
      >Required</label
    >
    <div>
      <button
        type="button"
        :class="enabled ? 'bg-deep-blue' : 'bg-gray-200'"
        class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        role="switch"
        aria-checked="false"
        @click="toggle()"
      >
        <span class="sr-only">Use setting</span>
        <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
        <span
          :class="enabled ? 'translate-x-5' : 'translate-x-0'"
          aria-hidden="true"
          class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
        ></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enabled: false,
    }
  },
  methods: {
    toggle() {
      this.enabled = !this.enabled
      this.changeInput('required', this.enabled)
    },
    changeInput(field, value) {
      this.$emit('valueChanged', { field, value })
    },
  },
}
</script>

<style></style>
