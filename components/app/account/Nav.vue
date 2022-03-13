<template>
  <header class="flex items-center justify-between py-12">
    <div class="flex items-center">
      <img
        src="https://lh3.googleusercontent.com/lW22aEwUE0IqGaYm5HRiMS8DwkDwsdjPpprEqYnBqo2s7gSR-JqcYOjU9LM6p32ujG_YAEd72aDyox-pdCVK10G-u1qZ3zAsn2r9=s0"
        alt=""
        class="w-24 h-24 rounded-full"
      />
      <div class="ml-6 space-y-2">
        <h1 class="text-5xl font-bold leading-tight text-secondary">
          Dashboard
        </h1>
        <p class="text-2xl font-light text-secondary text-opacity-60">
          Manage your forms
        </p>
      </div>
    </div>
    <button
      type="button"
      class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      @click="$emit('showPopup')"
    >
      <!-- Heroicon name: solid/plus -->
      <svg
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
      New Form
    </button>
  </header>
</template>

<script>
export default {}
</script>

<style></style>
