<template>
  <div class="min-h-full">
    <AppAccountNav class="hidden" />
    <AppAccountMain :forms="forms" @showPopup="showPopup = true">
      <AppAccountFormCard v-for="form of forms" :key="form.id" :form="form" />
      <AppAccountNewFormCard v-if="forms.length === 0" />
    </AppAccountMain>
    <AppAccountPopup v-show="showPopup" @close="showPopup = false" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      forms: [],
      showPopup: false,
    }
  },
  mounted() {
    this.getForms()
  },
  methods: {
    async getForms() {
      // Change --> address
      const result = await this.$axios.$get('/form/list', {
        params: { address: 'david' },
      })
      console.log(result)

      if (!result.success) {
        this.$toast.error(result.data.message)
        return
      }
      this.forms = result.data
    },
  },
}
</script>

<style></style>
