<template>
  <li class="group relative cursor-pointer">
    <div
      class="block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
    >
      <img
        src="https://lh3.googleusercontent.com/lW22aEwUE0IqGaYm5HRiMS8DwkDwsdjPpprEqYnBqo2s7gSR-JqcYOjU9LM6p32ujG_YAEd72aDyox-pdCVK10G-u1qZ3zAsn2r9=s0"
        alt=""
        class="object-cover pointer-events-none group-hover:opacity-75"
      />
      <button type="button" class="absolute inset-0 focus:outline-none">
        <span class="sr-only">View details for IMG_4985.HEIC</span>
      </button>
    </div>
    <div class="flex items-center justify-between">
      <div>
        <p
          class="mt-2 block text-base font-medium text-secondary truncate pointer-events-none"
        >
          {{ form.config.name }}
        </p>
        <p
          class="block text-sm font-light text-secondary text-opacity-60 pointer-events-none"
        >
          {{ form.responses || 0 }} responses
        </p>
      </div>
      <button class="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      </button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    src() {
      if (!this.form.image) {
        return 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80'
      } else return this.form.image
    },
  },
}
</script>

<style></style>
