<template>
  <div
    class="flex flex-col items-stretch px-24 min-h-screen max-h-screen min-w-screen overflow-y-hidden overflow-x-visible divide-y divide-secondary divide-opacity-20 bg-background"
  >
    <AppAccountNav @showPopup="showPopup = true" />
    <AppAccountMain :forms="forms">
      <AppAccountFormCard v-for="form of forms" :key="form.id" :form="form" />
      <AppAccountNewFormCard
        v-if="forms.length === 0"
        @showPopup="showPopup = true"
      />
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
  // mounted() {
  //   this.getForms()
  // },
  // methods: {
  //   async getForms() {
  //     // Change --> address
  //     const result = await this.$axios.$get('/form/list', {
  //       params: { address: 'david' },
  //     })
  //     console.log(result)

  //     if (!result.success) {
  //       this.$toast.error(result.data.message)
  //       return
  //     }
  //     this.forms = result.data
  //   },
  // },
}
</script>

<style></style>
