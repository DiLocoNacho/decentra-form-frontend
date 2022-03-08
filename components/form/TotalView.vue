<template>
  <div>
    <div v-for="step of config.steps" :key="step.step">
      <FormInputShortText
        v-show="step.type === 'shortText' && step.step === currentStep"
        :config="step"
      />
      <FormInputLongText
        v-show="step.type === 'longText' && step.step === currentStep"
        :config="step"
      />
      <FormInputNumber
        v-show="step.type === 'number' && step.step === currentStep"
        :config="step"
      />
      <FormInputEmail
        v-show="step.type === 'email' && step.step === currentStep"
        :config="step"
      />
      <FormInputCheckbox
        v-show="step.type === 'checkbox' && step.step === currentStep"
        :config="step"
      />
      <FormInputYesNo
        v-show="step.type === 'yesNo' && step.step === currentStep"
        :config="step"
      />
      <FormInputSelect
        v-show="step.type === 'select' && step.step === currentStep"
        :config="step"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default: null,
    },
    data: {
      type: Array,
      default: null,
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
