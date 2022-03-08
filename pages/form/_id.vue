<template>
  <div
    class="relative flex jusitfy-center items-center min-w-screen min-h-screen bg-gradient-to-tr from-black to-deep-blue"
  >
    <!-- Progress Bar -->
    <div class="absolute top-0 h-2 w-screen bg-indigo-400"></div>
    <div
      class="absolute top-0 h-2 bg-indigo-900 rounded-r-md"
      :style="width"
    ></div>

    <!-- Steps and Nav -->
    <div class="flex absolute top-4 right-4 space-x-2">
      <p class="my-auto text-xl font-light text-white text-opacity-50">
        {{ $store.state.form.currentStep }} of
        {{ $store.state.form.totalSteps }}
      </p>
      <button
        class="p-1.5 bg-white bg-opacity-20 border rounded-lg border-white border-opacity-30 cursor pointer hover:bg-opacity-30 hover:border-opacity-40"
        @click="previousStep()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 17l-5-5m0 0l5-5m-5 5h12"
          />
        </svg>
      </button>
      <button
        class="p-1.5 bg-white bg-opacity-20 border rounded-lg border-white border-opacity-30 cursor pointer hover:bg-opacity-30 hover:border-opacity-40"
        @click="nextStep()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </button>
    </div>

    <!-- All Steps -->
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-lg mx-auto">
        <FormTotalView :config="config" :data="data" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        title: 'Test Form',
        id: '52356314871',
        creator: 'shiny',
        steps: [
          {
            step: 1,
            title: 'Step 1',
            text: 'afhsaf fih f iifdsahih adsfoih dasfaoihs isd foij adfsasfhpu as',
            type: 'shortText',
            placeholder: 'Placeholder',
            required: true,
          },
          {
            step: 2,
            title: 'Step 2',
            text: 'afhsaf fih f iifdsahih adsfoih dasfaoihs isd foij adfsasfhpu as',
            type: 'number',
            placeholder: 3,
            min: 0,
            max: 5,
            required: true,
          },
          {
            step: 3,
            title: 'Step 3',
            text: 'afhsaf fih f iifdsahih adsfoih dasfaoihs isd foij adfsasfhpu as',
            type: 'longText',
            placeholder: 'Placeholder',
            required: true,
          },
          {
            step: 4,
            title: 'Step 4',
            text: 'afhsaf fih f iifdsahih adsfoih dasfaoihs isd foij adfsasfhpu as',
            type: 'email',
            placeholder: 'Placeholder',
            required: true,
          },
          {
            step: 5,
            title: 'Step 5',
            text: 'afhsaf fih f iifdsahih adsfoih dasfaoihs isd foij adfsasfhpu as',
            type: 'checkbox',
            placeholder: 'Placeholder',
            required: true,
          },
          {
            step: 6,
            title: 'Step 6',
            text: 'afhsaf fih f iifdsahih adsfoih dasfaoihs isd foij adfsasfhpu as',
            type: 'yesNo',
            placeholder: 'Placeholder',
            required: true,
          },
          {
            step: 7,
            title: 'Step 7',
            text: 'afhsaf fih f iifdsahih adsfoih dasfaoihs isd foij adfsasfhpu as',
            type: 'select',
            placeholder: 'Placeholder',
            required: true,
          },
        ],
      },
      data: [
        {
          step: 1,
          value: '',
        },
        {
          step: 2,
          value: '',
        },
        {
          step: 3,
          value: '',
        },
        {
          step: 4,
          value: '',
        },
      ],
    }
  },
  computed: {
    width() {
      return `width: ${
        (this.$store.state.form.currentStep /
          this.$store.state.form.totalSteps) *
        100
      }%`
    },
  },
  mounted() {
    this.$store.commit('SET_CURRENT_STEP', 1)
    this.$store.commit('SET_TOTAL_STEPS', this.config.steps.length)
  },
  methods: {
    previousStep() {
      if (this.$store.state.form.currentStep > 0) {
        this.$store.commit(
          'SET_CURRENT_STEP',
          this.$store.state.form.currentStep - 1
        )
      }
    },
    nextStep() {
      if (
        this.$store.state.form.currentStep < this.$store.state.form.totalSteps
      ) {
        this.$store.commit(
          'SET_CURRENT_STEP',
          this.$store.state.form.currentStep + 1
        )
      }
    },
  },
}
</script>

<style></style>
