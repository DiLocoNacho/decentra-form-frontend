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
        class="fixed inset-0 bg-gray-500 bg-opacity-80 transition-opacity"
        aria-hidden="true"
        @click="$emit('close')"
      ></div>

      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <div
        class="relative inline-block align-bottom bg-white rounded-lg p-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
      >
        <div class="w-full border-b border-secondary border-opacity-20">
          <h3 class="pb-4 text-3xl text-secondary font-semibold">
            Create a form
          </h3>
        </div>
        <input
          v-model="formName"
          type="text"
          placeholder="Name of your form"
          class="mt-4 w-full px-4 py-2 text-secondary text-opacity-80 placeholder-opacity-60 placeholder-secondary border border-primary border-opacity-40 rounded-lg"
          @keydown.enter="createForm()"
        />
        <div class="mt-4 flex items-center justify-end">
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="createForm()"
          >
            <!-- Heroicon name: solid/plus -->
            <svg
              v-if="!loading"
              class="-ml-1 mr-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
            <p v-if="!loading">Create Form</p>
            <p v-else class="animate-pulse">Loading...</p>
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
      loading: false,
    }
  },
  methods: {
    async createForm() {
      this.loading = true
      if (this.formName.length <= 0) {
        this.loading = false
        return this.$toast.error('Please fill in a name for your form', {
          duration: 2000,
        })
      }
      const id = this.$uuid.v4()
      // Change --> addres to current address
      const result = await this.$axios.post('/form/create', {
        id,
        name: this.formName,
        address: ['david'],
      })
      if (!result.data.success) {
        this.loading = false
        return this.$toast.error(
          result.data.message || 'An error occured. Try again later',
          { duration: 2000 }
        )
      }
      this.$store.commit('SET_FORM_NAME', this.formName)
      this.$store.commit('SET_FORM_ID', id)
      this.$router.push('/app/new-form')
      this.loading = false
    },
  },
}
</script>

<style></style>
