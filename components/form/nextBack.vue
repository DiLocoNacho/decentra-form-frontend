<template>
  <div
    :class="currentStep > 1 ? 'justify-between' : 'justify-end'"
    class="flex w-full"
  >
    <button
      v-show="currentStep > 1"
      class="mt-4 py-3 rounded-lg text-secondary font-thin text-xl bg-background"
      @click="previousStep()"
    >
      Back
    </button>
    <button
      class="mt-4 px-12 py-3 rounded-lg text-background font-semibold text-xl bg-primary"
      @click="nextStep()"
    >
      Next
    </button>
  </div>
</template>

<script>
// const VueScrollTo = require('vue-scrollto')
export default {
  computed: {
    currentStep() {
      return this.$store.state.form.currentStep
    },
  },
  methods: {
    nextStep() {
      this.$store.commit('NEXT_STEP')
      if (process.client) {
        const element = document.getElementById(this.currentStep)
        console.log(element)
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      //   window.scrollTo(0, element.offsetTop)
    },
    previousStep() {
      this.$store.commit('PREVIOUS_STEP')
      if (process.client) {
        const element = document.getElementById(this.currentStep)
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    },
  },
}
</script>

<style></style>
