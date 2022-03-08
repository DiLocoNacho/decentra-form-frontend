<template>
  <div class="space-y-4">
    <AppSettingsFieldsTitleField @valueChanged="changeInput($event)" />
    <AppSettingsFieldsDescriptionField @valueChanged="changeInput($event)" />
    <AppSettingsFieldsOptionsField @valueChanged="changeInput($event)" />
    <AppSettingsFieldsRequiredToggle @valueChanged="changeInput($event)" />
  </div>
</template>

<script>
export default {
  methods: {
    changeInput(event) {
      this.$emit('valueChanged', event)
    },
  },
}
</script>

<style></style>
