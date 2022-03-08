export const state = () => ({
  form: {
    currentStep: null,
    totalSteps: null,
  },
});

export const mutations = {
  SET_CURRENT_STEP(state, step) {
    state.form.currentStep = step;
  },
  SET_TOTAL_STEPS(state, steps) {
    state.form.totalSteps = steps;
  },
};

export const getters = {
  getCurrentStep: (state) => state.form.currentStep,
  getTotalSteps: (state) => state.form.totalSteps,
};
