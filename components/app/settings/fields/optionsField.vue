<template>
  <div>
    <label for="steps" class="block text-sm font-medium text-gray-700"
      >Steps</label
    >
    <div class="mt-1 mb-4 flex">
      <input
        v-model="newOption"
        type="text"
        name="steps"
        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="you@example.com"
        @keydown.enter="addOption(newOption)"
      />
      <button
        class="ml-2 px-3 py-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 hover:text-primary-blue focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
        @click="addOption(newOption)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
    <ul>
      <draggable v-model="options" @start="drag = true" @end="drag = false">
        <li
          v-for="(option, index) of options"
          :key="index"
          class="relative flex w-full items-center justify-start mb-2 cursor-move"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-2 text-gray-700 text-opacity-60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <p>{{ option.option }}</p>
          <button class="absolute right-1" @click="removeOption(index)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-700 text-opacity-60 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </li>
      </draggable>
    </ul>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable,
  },
  data() {
    return {
      options: [],
      newOption: '',
    }
  },
  methods: {
    addOption(option) {
      if (
        !this.newOption ||
        this.newOption.length === 0 ||
        this.newOption === ''
      )
        return
      if (this.options.length >= 10) {
        this.$toast.error('You can only have 10 options', {
          duration: 2500,
          position: 'bottom-left',
        })
        return
      }
      this.options.push({ option: this.newOption, value: false })
      this.changeInput('options', this.options)
      this.newOption = ''
    },
    removeOption(index) {
      this.options.splice(index, 1)
      this.changeInput('options', this.options)
    },
    changeInput(field, value) {
      this.$emit('valueChanged', { field, value })
    },
  },
}
</script>

<style></style>
