<template>
  <section
    v-if="form"
    class="flex flex-col items-stretch px-24 min-h-screen max-h-screen min-w-screen overflow-y-hidden overflow-x-visible divide-y divide-secondary divide-opacity-20 bg-background"
  >
    <FormHeader :config="form.config" />
    <section
      class="grid grid-cols-3 flex-1 divide-x divide-secondary divide-opacity-20 overflow-x-visible overflow-y-hidden"
    >
      <FormSteps :steps="form.steps" />
      <FormMain :steps="form.steps" />
    </section>
  </section>
</template>

<script>
import exampleForm from '@/assets/form/example-form.json'
export default {
  computed: {
    form() {
      return exampleForm
    },
  },
  mounted() {
    // This is a call to get a form from the backend
    this.$store.commit('SET_TOTAL_STEPS', this.form.steps.length)
    this.$store.commit('SET_CURRENT_STEP', 1)
    const stepsArray = this.form.steps.map((step) => {
      return {
        id: step.id,
        answer: null,
      }
    })
    console.log(stepsArray)
    this.$store.commit('CREATE_ANSWER_SHEET', stepsArray)
  },
}
</script>

<style></style>
