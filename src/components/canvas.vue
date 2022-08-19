<template>
  <!-- MAIN CONTENT -->
  <div class="main_content_container">
    <!-- CANVAS -->
    <div class="canvas" >
      <!-- SINGLE SCREEN IMAGE -->
      <img v-if="sourceArr.length > 0" class="single_screen" :src="streamSourceImage" />
      <!-- SPLIT SCREEN IMAGES -->
      <div v-if="sourceArr.length > 1" class="split_screen">
        <div></div>
        <div></div>
      </div>
    </div>

    <!-- VIEW MODE BUTTONS -->
    <div v-if="selectedSources.length > 0" class="view_modes_container">
      <div v-if="selectedMode === 'camera'" class="mode_buttons">
        <v-btn
          class="mode_select_button"
          v-for="camOption in content.viewModes.camera"
          :key="camOption.id"
          :id="camOption.id"
          depressed
          @click="viewModeSelected(camOption.id)"
          icon
        >
          <img
            :src="
              require('@/assets/' +
                camOption.image +
                (camOption.id === selectedScreenType.id ? '_selected' : '') +
                '.svg')
            "
          />
        </v-btn>
      </div>
      <div v-if="selectedMode === 'screen'" class="mode_buttons">
        <v-btn
          :id="content.viewModes.screen[0].id"
          depressed
          @click="viewModeSelected(content.viewModes.screen[0].id)"
          icon
        >
          <img
            class="mode_select_button"
            :src="
              require('@/assets/' +
                content.viewModes.screen[0].image +
                (content.viewModes.screen[0].id === selectedScreenType.id
                  ? '_selected'
                  : '') +
                '.svg')
            "
          />
        </v-btn>
      </div>
    </div>
    <div class="action_buttons">
      <div v-for="button in content.footerButtons" :key="button.id">
        <v-btn
          :class="['footer_button', { selected: button.id === 'live_button' }]"
          :id="button.id"
          depressed
        >
          {{ button.text }}
        </v-btn>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "Canvas",
  props: {
    content: {
      type: Object,
      required: false,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      showSplitScreen: false,
      selectedScreenType: {},
      activeStream: "",
    };
  },
  watch: {
    "$store.state.selectedMode": function (newVal) {
      this.selectedScreenType = this.content.viewModes[newVal][0];
    },
  },
  methods: {
    viewModeSelected(id) {
      this.selectedScreenType = id;
    },
  },
  computed: {
    ...mapGetters({
      selectedMode: "getSelectedMode",
      sourceArr: "getSourceArr",
      selectedSources: "getSelectedSources",
    }),
    streamSourceImage(){
      switch (this.selectedMode) {
        case 'camera':
           return require('@/assets/webcam-image.png')
      
        case 'screen':
           return require('@/assets/screenshare-image.png')
      
        default:
          break;
      }
      
    }
  },
};
</script>
<style lang="scss" scoped>
.main_content_container {
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .canvas {
    background: black;
    width: 800px;
    height: 450px;
    margin: 32px;
    .single_screen {
      width:100%;
      height:100%;
 
    }
  }
  .view_modes_container {
    min-width: fit-content;

    .mode_buttons {
      display: flex;

      align-content: center;
      justify-content: space-between;
      padding: 9px;

      .mode_select_button,
      img {
        border-radius: 7px;
        height: 40px;
        width: 60px;
        margin: 10px 8px;
      }
    }
  }
  .action_buttons {
    display: flex;
    width: 506px;
    justify-content: space-between;
    border: 2px solid #e5eaed;
    padding: 9px;

    .footer_button {
      width: 156px;
      font-weight: 700;
      line-height: 14px;
      text-transform: none;

      &.selected {
        color: #ffffff;
        background: #128079;
      }
    }
  }
}
</style>