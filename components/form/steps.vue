<template>
  <aside
    class="flex flex-col space-y-12 p-12 overflow-y-auto overflow-x-visible"
  >
    <FormSingleStep
      v-for="(step, index) in steps"
      :key="step.id"
      :step="{ step, index }"
    />
    <!-- <div
      class="relative flex items-center justify-end transition hover:translate-x-2"
    >
      <div class="text-right mr-4 space-y">
        <h1 class="text-xl font-bold leading-tight text-secondary">Name</h1>
        <p class="text-base font-light text-secondary text-opacity-60">
          What is your name?
        </p>
      </div>
      <div class="bg-primary h-14 w-14 rounded-full"></div>
      <div class="absolute -right-14 bg-primary h-4 w-4 rounded-full"></div>
    </div>
    <div class="group relative flex items-center justify-end transition">
      <div class="text-right mr-4 space-y transition group-hover:translate-x-2">
        <h1
          class="text-xl font-bold leading-tight text-secondary text-opacity-40"
        >
          Favorite Pizza
        </h1>
        <p class="text-base font-light text-secondary text-opacity-20">
          Do you have a favorite pizza?
        </p>
      </div>
      <div
        class="bg-primary bg-opacity-40 h-14 w-14 rounded-full transition group-hover:translate-x-2"
      ></div>
      <div
        class="absolute -right-14 bg-background border border-primary h-4 w-4 rounded-full group-hover:-translate-x-0"
      ></div>
    </div>
    <div class="group relative flex items-center justify-end transition">
      <div class="text-right mr-4 space-y transition group-hover:translate-x-2">
        <h1
          class="text-xl font-bold leading-tight text-secondary text-opacity-40"
        >
          Pineapple?
        </h1>
        <p class="text-base font-light text-secondary text-opacity-20">
          Is there pineapple on that pizza?
        </p>
      </div>
      <div
        class="bg-primary bg-opacity-40 h-14 w-14 rounded-full transition group-hover:translate-x-2"
      ></div>
      <div
        class="absolute -right-14 bg-background border border-primary h-4 w-4 rounded-full group-hover:-translate-x-0"
      ></div>
    </div> -->
  </aside>
</template>

<script>
export default {
  props: {
    steps: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
}
</script>

<style></style>
