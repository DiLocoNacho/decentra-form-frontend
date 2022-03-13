export const state = () => ({
  form: {
    currentStep: null,
    totalSteps: null,
    name: null,
    id: null,
  },
  answers: null,
})

export const mutations = {
  CREATE_ANSWER_SHEET(state, stepsArray) {
    state.answers = stepsArray
  },
  SET_CURRENT_STEP(state, step) {
    state.form.currentStep = step
  },
  NEXT_STEP(state) {
    if (
      state.form.currentStep &&
      state.form.currentStep < state.form.totalSteps
    )
      state.form.currentStep++
  },
  PREVIOUS_STEP(state) {
    if (state.form.currentStep && state.form.currentStep > 1)
      state.form.currentStep--
  },
  SET_TOTAL_STEPS(state, steps) {
    state.form.totalSteps = steps
  },
  SET_FORM_NAME(state, name) {
    state.form.name = name
  },
  SET_FORM_ID(state, id) {
    state.form.id = id
  },
}

export const getters = {
  getCurrentStep: (state) => state.form.currentStep,
  getTotalSteps: (state) => state.form.totalSteps,
  getFormName: (state) => state.form.name,
  getFormId: (state) => state.form.id,
}
