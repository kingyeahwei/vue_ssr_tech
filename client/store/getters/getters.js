export default {
  count (state) {
    return state.count
  },
  fullName (state) {
    return `${state.firstName} ${state.lastName}`
  }
}
