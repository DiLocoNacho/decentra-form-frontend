<template>
  <div>
    <AppSettingsShortText
      v-if="selectedStep && selectedStep.type === 'shortText'"
      @valueChanged="$emit('valueChanged', $event)"
    />
    <AppSettingsLongText
      v-if="selectedStep && selectedStep.type === 'longText'"
      @valueChanged="$emit('valueChanged', $event)"
    />
    <AppSettingsEmail
      v-if="selectedStep && selectedStep.type === 'email'"
      @valueChanged="$emit('valueChanged', $event)"
    />
    <AppSettingsNumber
      v-if="selectedStep && selectedStep.type === 'number'"
      @valueChanged="$emit('valueChanged', $event)"
    />
    <AppSettingsSelect
      v-if="selectedStep && selectedStep.type === 'select'"
      @valueChanged="$emit('valueChanged', $event)"
    />
    <AppSettingsCheckbox
      v-if="selectedStep && selectedStep.type === 'checkbox'"
      @valueChanged="$emit('valueChanged', $event)"
    />
    <AppSettingsYesNo
      v-if="selectedStep && selectedStep.type === 'yesNo'"
      @valueChanged="$emit('valueChanged', $event)"
    />
  </div>
</template>

<script>
export default {
  props: {
    selectedStep: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style></style>
