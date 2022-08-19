import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedMode: '',
    sourceArr: [{
      text: 'Add media source',
      subtext: 'Screenshare, Camera',
      backgroundImage: '',
      value: 'addMedia',
      id: '',
      type: 'default'
    }],
    selectedSources:[],
  },
  getters: {
    getSelectedMode: (state) =>  state.selectedMode,
    getSourceArr: (state) =>  state.sourceArr,
    getSelectedSources: (state) => state.selectedSources
  },
  mutations: {
    updateSelectedMode(state, mode) {
      state.selectedMode = mode;
    },
    updateSourceArr(state, arr) {
      state.sourceArr = arr;
    },
    updateSelectedSources(state, arr) {
      state.selectedSources = arr;
    }
  },
  actions: {
    updateSelectedMode(context, mode) {
      context.commit('updateSelectedMode', mode);
    },
    updateSourceArr(context, arr) {
      context.commit('updateSourceArr', arr);
    },
    selectedSources(context, arr) {
      context.commit('updateSelectedSources', arr);
    }
  }
});
