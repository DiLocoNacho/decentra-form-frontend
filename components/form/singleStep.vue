<template>
  <div
    :id="step.index + 1"
    class="group flex items-center justify-end transition"
  >
    <div class="text-right mr-4 space-y transition group-hover:translate-x-2">
      <h1
        class="text-xl font-bold leading-tight text-secondary text-opacity-40"
      >
        {{ step.step.title }}
      </h1>
      <p class="text-base font-light text-secondary text-opacity-20">
        {{ step.step.description }}
      </p>
    </div>
    <div
      :class="
        step.index + 1 === currentStep ? 'bg-opacity-80' : 'bg-opacity-40'
      "
      class="bg-primary h-14 w-14 rounded-full transition group-hover:translate-x-2"
    ></div>
    <div
      class="translate-x-14 bg-background border border-primary h-4 w-4 rounded-full group-hover:translate-x-14 z-10"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  computed: {
    currentStep() {
      return this.$store.state.form.currentStep
    },
  },
}
</script>

<style></style>
