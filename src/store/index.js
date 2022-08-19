import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedMode: '',
    
  
    sourceArr: [
      {
        text: 'Add media source',
        subtext: 'Screenshare, Camera',
        backgroundImage: '',
        value: 'addMedia',
        id: 'default_button',
        type: 'default'
      }
    ],
    selectedSources: []
  },
  getters: {
    getSelectedMode: (state) => state.selectedMode,
    getSourceArr: (state) => state.sourceArr,
    getSelectedSources: (state) => state.selectedSources
  },
  mutations: {
    updateSelectedMode(state, mode) {
      state.selectedMode = mode;
    },
    updateSourceArr(state, obj) {
      if (state.sourceArr[0].type === 'default') {
        state.sourceArr = [];
        state.sourceArr.push(obj);
      } else {
        if (!state.sourceArr.length > 1) {
          state.sourceArr.push(obj);
        }
      }

    },
    updateSelectedSources(state, obj) {
      state.selectedSources.push(obj);
    }
  },
  actions: {
    updateSelectedMode(context, mode) {
      context.commit('updateSelectedMode', mode);
    },
    updateSourceArr(context, arr) {
      context.commit('updateSourceArr', arr);
    },
    updateSelectedSources(context, obj) {
      context.commit('updateSelectedSources', obj);
    }
  }
});
