export default {
  namespaced: true,
  state:{
    activeNum:1
  },
  mutations:{
    updateActiveNum (state, activeNum) {
      state.activeNum = activeNum
    },
  }
}
