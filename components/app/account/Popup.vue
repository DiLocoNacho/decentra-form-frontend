<template>
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
        @click="$emit('close')"
      ></div>

      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <div
        class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
      >
        <div>
          <div class="mt-3 text-center sm:mt-5">
            <h3
              class="text-2xl leading-6 font-medium text-gray-900"
              id="modal-title"
            >
              Let's give your form a name
            </h3>
            <div class="mt-2">
              <input
                v-model="formName"
                type="text"
                @keyup.enter="createForm()"
              />
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-6">
          <button
            type="button"
            class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            @click="createForm()"
          >
            Create Form
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formName: '',
    }
  },
  methods: {
    async createForm() {
      if (this.formName.length <= 0) return
      const id = this.$uuid.v4()
      const result = await this.$axios.post('/form/create', {
        id,
        name: this.formName,
        address: ['david'],
      })
      console.log(result)
      // Change --> error message here
      if (!result.data.success) return
      this.$store.commit('SET_FORM_NAME', this.formName)
      this.$store.commit('SET_FORM_ID', id)
      this.$router.push('/app/new-form')
    },
  },
}
</script>

<style></style>
