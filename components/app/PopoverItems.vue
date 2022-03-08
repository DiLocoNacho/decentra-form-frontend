<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div
    class="fixed z-50 inset-0 overflow-hidden"
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
  >
    <div class="absolute inset-0 overflow-hidden">
      <!-- Background overlay, show/hide based on slide-over state. -->
      <div class="absolute inset-0" aria-hidden="true">
        <div class="fixed inset-y-0 left-0 pr-10 max-w-full flex">
          <!--
          Slide-over panel, show/hide based on slide-over state.

          Entering: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-0"
            To: "translate-x-full"
        -->
          <div class="w-screen max-w-md">
            <div
              class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll"
            >
              <div class="py-6 px-4 bg-indigo-700 sm:px-6">
                <div class="flex items-center justify-between">
                  <h2
                    id="slide-over-title"
                    class="text-lg font-medium text-white"
                  >
                    Panel title
                  </h2>
                  <div class="ml-3 h-7 flex items-center">
                    <button
                      type="button"
                      class="bg-indigo-700 rounded-md text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      @click="$emit('close')"
                    >
                      <span class="sr-only">Close panel</span>
                      <!-- Heroicon name: outline/x -->
                      <svg
                        class="h-6 w-6"
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="mt-1">
                  <p class="text-sm text-indigo-300">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                    aliquam ad hic recusandae soluta.
                  </p>
                </div>
              </div>
              <ul class="relative flex-1 py-6 px-4 sm:px-6 space-y-2">
                <li
                  v-for="(step, index) in types"
                  :key="index"
                  class="flex items-center space-x-2 cursor-pointer"
                  @click="addStep(step)"
                >
                  <div :class="step.color" class="rounded-lg p-1">
                    <img
                      :src="require(`../../assets/${step.type}.svg`)"
                      alt=""
                      class="h-4 w-4 text-white"
                    />
                  </div>
                  <p>{{ step.name }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import inputTypes from '@/assets/form/input-types.json'
export default {
  computed: {
    types() {
      return inputTypes
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
