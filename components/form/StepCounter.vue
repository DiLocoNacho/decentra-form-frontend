<template>
  <p class="text-lg text-secondary text-opacity-20">
    Step {{ currentStep }}/{{ totalSteps }}
  </p>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      currentStep: 'getCurrentStep',
      totalSteps: 'getTotalSteps',
    }),
  },
}
</script>

<style></style>
