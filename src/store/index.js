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
    sideMenuSources: [],
    streamsForDisplay: []
  },
  getters: {
    getSelectedMode: (state) => state.selectedMode,
    getSourceArr: (state) => state.sourceArr,
    getSideMenuSources: (state) => state.sideMenuSources,
    getStreamsForDisplay: (state) => state.streamsForDisplay
  },
  mutations: {
    updateSelectedMode(state, mode) {
      // HANDLE MODES (CAMERA OR SCREEN) IF DUAL STREAM CHANGE MODE TO HARDCODED
      if (state.streamsForDisplay.length > 1) {
        state.selectedMode = 'webcamWithScreenshare';
      } else {
        state.selectedMode = mode;
      }
    },
    updateSourceArr(state, obj) {
      // DEFAULT SOURCE OPTION APPEARS FIRST,
      //  WHEN USER INTERACTS WE REMOVE THE DEFAULT 
      // AND ADD THE NEW OR ADD  THE NEW IF DEFAULT IS NOT THERE
      if (state.sourceArr[0].type === 'default') {
        state.sourceArr = [];
        state.sourceArr.push(obj);
      } else {
        state.sourceArr.push(obj);
      }
    },
    updateSideMenuSources(state, obj) {
      // ADD SIDE MENU SOURCES TO ARRAY
      state.sideMenuSources.push(obj);
    },
    updateStreamsForDisplay(state, obj) {
      // ADD CANVAS STREAM TO ARRAY
      if (state.streamsForDisplay.length < 2) {
        state.streamsForDisplay.push(obj);
      }
    },
    removeSelectedSource(state, id) {
      // REMOVE SOURCE FROM ARRAY
      let index = state.sideMenuSources.findIndex(function (source) {
        return source.id === id;
      });

      state.streamsForDisplay.splice(index, 1);
    }
  },
  actions: {
    updateSelectedMode(context, mode) {
      context.commit('updateSelectedMode', mode);
    },
    updateSourceArr(context, obj) {
      context.commit('updateSourceArr', obj);
    },
    updateSideMenuSources(context, obj) {
      context.commit('updateSideMenuSources', obj);
    },
    updateStreamsForDisplay(context, obj) {
      context.commit('updateStreamsForDisplay', obj);
    },
    removeSelectedSource(context, id) {
      context.commit('removeSelectedSource', id);
    }
  }
});
