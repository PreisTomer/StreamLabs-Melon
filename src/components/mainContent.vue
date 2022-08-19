<template>
  <!-- MAIN CONTENT -->
  <div class="main_content_container">
    <!-- CANVAS -->
    <div class="canvas">
      <!-- SINGLE SCREEN IMAGE -->
      <div v-if="sourceArr.length > 0" class="single_screen">
        <img class="single_screen_image" :src="image" />
      </div>
      <!-- SPLIT SCREEN IMAGES -->
      <div v-if="sourceArr.length > 1" class="split_screen">
        <img class="video_image" lazyload :src="videoImage" />
        <img class="screen_share_image" lazyload :src="screenShareImage" />
      </div>
    </div>

    <!-- VIEW MODE BUTTONS -->
    <div v-if="selectedSources.length > 0" class="view_modes_container">
      <div   v-if="selectedMode === 'camera'"     class="mode_buttons"       >
        <v-btn  v-for=" camOption in content.viewModes.camera" :key="camOption.id"
          :id="camOption.id"
          depressed
          @click="viewModeSelected(camOption.id)"
          icon
        >
          <img
            class="mode_select_button"
            :src="require('@/assets/' + camOption.image + '.svg')"
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
  name: "MainContent",
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
      selectedViewModeButton: "",
    };
  },
  watch:{
    selectedMode(newVal){
debugger
    }
  },
  methods: {
    viewModeSelected(viewMode) {},
  },
  computed: {
    image() {
      switch (this.selectedSources[0]) {
        case "cam":
          return "../assets/webcam-image.png";
        case "screenshare":
          return "../assets/screenshare-image.png";
        default:
          break;
      }
    },
    ...mapGetters({
      selectedMode: "getSelectedMode",
      sourceArr: "getSourceArr",
      selectedSources: "getSelectedSources",
    }),
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
    background: #000000;
    width: 800px;
    height: 450px;
    margin: 32px;
  }

.mode_buttons{
    display: flex;
    max-width: 200px;
    align-content: center;
    justify-content: space-between;
    padding: 9px;

    .mode_select_button{
      border-radius: 7px;
      height: 40px;
width: 60px;
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