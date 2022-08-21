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
  
        
          state.sourceArr.push(obj);
        
      }
    },
    updateSelectedSources(state, obj) {
      state.selectedSources.push(obj);
    },
    removeSelectedSource(state, obj) {
      let index = state.selectedSources.findIndex(function (source) {
        return source.id === obj.id;
      });
      if (index !== -1) state.selectedSources.splice(index, 1);
    }
  },
  actions: {
    updateSelectedMode(context, mode) {
      context.commit('updateSelectedMode', mode);
    },
    updateSourceArr(context, obj) {
      context.commit('updateSourceArr', obj);
    },
    updateSelectedSources(context, obj) {
      context.commit('updateSelectedSources', obj);
    },
    removeSelectedSource(context, obj) {
      context.commit('removeSelectedSource', obj);
    }
  }
});
