<template>
  <!--
  This example requires Tailwind CSS v3.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
  <div
    class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20"
    role="dialog"
    aria-modal="true"
  >
    <!--
    Background overlay, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"
      aria-hidden="true"
      @click="$emit('close')"
    ></div>

    <!--
    Command palette, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
    <div
      class="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
    >
      <div class="relative">
        <!-- Heroicon name: solid/search -->
        <svg
          class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
        <input
          v-model="searchTerm"
          type="text"
          class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
          placeholder="Search..."
          role="combobox"
          aria-expanded="false"
          aria-controls="options"
        />
      </div>

      <!-- Results, show/hide based on command palette state -->
      <ul
        v-show="filteredTypes || filteredTypes.length > 0"
        id="options"
        class="max-h-96 scroll-py-3 overflow-y-auto p-3"
        role="listbox"
      >
        <!-- Active: "bg-gray-100" -->
        <li
          v-for="(step, index) in filteredTypes"
          :key="index"
          class="group flex items-center cursor-pointer select-none rounded-xl p-3 group hover:bg-deep-blue"
          role="option"
          tabindex="-1"
          @click="addStep(step)"
        >
          <div
            :class="step.color"
            class="flex h-10 w-10 flex-none items-center justify-center rounded-lg"
          >
            <img
              :src="require(`../../assets/${step.type}.svg`)"
              alt=""
              class="h-6 w-6 text-white"
            />
          </div>
          <div class="ml-4 flex-auto">
            <p class="font-medium text-gray-700 group-hover:text-white">
              {{ step.name }}
            </p>
            <p
              class="text-sm text-gray-500 group-hover:text-white group-hover:text-opacity-60"
            >
              {{ step.typeDescription }}
            </p>
          </div>
        </li>

        <!-- More items... -->
      </ul>

      <!-- Empty state, show/hide based on command palette state -->
      <div
        v-show="!filteredTypes || filteredTypes.length === 0"
        class="py-14 px-6 text-center text-sm sm:px-14"
      >
        <svg
          class="mx-auto h-6 w-6 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p class="mt-4 font-semibold text-gray-900">No results found</p>
        <p class="mt-2 text-gray-500">
          No components found for this search term. Please try again.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import inputTypes from '@/assets/form/input-types.json'
export default {
  data() {
    return {
      searchTerm: '',
    }
  },
  computed: {
    filteredTypes() {
      return inputTypes.filter((type) => {
        if (this.searchTerm === '') {
          return type
        }
        return type.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      })
    },
  },
  methods: {
    addStep(step) {
      this.$emit('addStep', { ...step, id: this.$uuid.v4() })
    },
  },
}
</script>

<style></style>
