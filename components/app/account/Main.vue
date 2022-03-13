<template>
  <div class="py-10">
    <main>
      <div class="max-w-7xl mx-auto">
        <!-- Replace with your content -->
        <ul
          role="list"
          class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          <slot></slot>
        </ul>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
