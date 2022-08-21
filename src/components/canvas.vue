<template>
  <!-- MAIN CONTENT -->
  <div class="main_content_container">
    <!-- CANVAS -->
    <div class="canvas">
      <!-- SINGLE SOURCE FOR DISPLAY - MODE SELECTION CONTROLS DYNAMIC CLASSES FOR THE SOURCE -->
      <div :class="{ hundred_percent: this.selectedScreenType === 'webcam_full' || this.selectedScreenType === 'screenshare_only', eighty_percent: this.selectedScreenType === 'webcam_80', sixty_percent: this.selectedScreenType === 'webcam_60'}">
        <img v-if="streamSourceImage && streamsForDisplay.length === 1" :src="streamSourceImage"/>
      </div>

      <!-- DUEAL SOURCE DISPLAY - MODE SELECTION CONTROLS DYNAMIC CLASSES FOR BOTH SOURCES -->
      <img v-if="streamsForDisplay.length > 1" :class="{full_screen: this.selectedScreenType === 'webcam-screenshare_webcam-25-percent-left-align' || this.selectedScreenType === 'webcam-screenshare_webcam-25-percent-right-align', align_left_66: this.selectedScreenType === 'webcam-33-percent_screenshare-66-percent',}" :src="require('@/assets/screenshare-image.png')"/>
      <img v-if="streamsForDisplay.length > 1" :class="{ align_left_25: this.selectedScreenType === 'webcam-screenshare_webcam-25-percent-left-align', align_right_25: this.selectedScreenType === 'webcam-screenshare_webcam-25-percent-right-align', align_right_33: this.selectedScreenType === 'webcam-33-percent_screenshare-66-percent',}" :src="require('@/assets/webcam-image.png')"/>
    </div>

    <!-- MODE BUTTONS - CHANGE DYNAMICALLY ACCORDING TO VUEX STORE SOURCES -->
    <div v-if="streamsForDisplay.length > 0" class="view_modes_container">

      <!-- IF WEBCAM STREAM IS SELECTED -->
      <div v-if="selectedMode === 'camera'" class="mode_buttons">
        <v-btn class="mode_select_button" v-for="camOption in content.viewModes.camera" :key="camOption.id" :id="camOption.id" depressed @click="viewModeSelected(camOption.id)" icon>
          <img :src="require('@/assets/' + camOption.image + isSelectedModeButton(camOption.id) + '.svg')"/>
        </v-btn>
      </div>

      <!-- IF SCREENSHARE STREAM IS SELECTED -->
      <div v-if="selectedMode === 'screen'" class="mode_buttons">
        <v-btn :id="content.viewModes.screen[0].id" depressed @click="viewModeSelected(content.viewModes.screen[0].id)" icon>
          <img class="mode_select_button" :src="require('@/assets/' + content.viewModes.screen[0].image + (content.viewModes.screen[0].id === selectedScreenType ? '_selected': '') +'.svg')"/>
        </v-btn>
      </div>

      <!-- IF BOTH SCREENSHARE AND WEBCAM ARE SELECTED -->
      <div v-if="streamsForDisplay.length > 1" class="mode_buttons">
        <v-btn v-for="splitOption in content.viewModes.webcamWithScreenshare" :key="splitOption.id" :id="splitOption.id" depressed @click="viewModeSelected(splitOption.id)" icon>
          <img class="mode_select_button" :src="require('@/assets/' + splitOption.image + isSelectedModeButton(splitOption.id) + '.svg')"/>
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
      selectedScreenType: "",
    };
  },

  watch: {
    // THIS CANVAS COMPONENT CHANGES DYNAMICALLY ACCORDING TO VUEX VALUES SO WE MUST WATCH THEM
    "$store.state.selectedMode": function (newVal) {
      if (newVal) {
        this.selectedScreenType = this.content.viewModes[newVal][0].id;
      } else {
        this.selectedScreenType = {};
      }
    },

    "$store.state.streamsForDisplay": function (newVal) {
      if (newVal.length > 1) {
        // AUTOMATICALLY SELECT FIRST OPTION WHEN DUAL SOURCES ARE SELECTED
        this.selectedScreenType = "webcam-screenshare_webcam-25-percent-left-align";
      } else if (newVal.length === 1) {
        // AUTOMATICALLY SELECT FIRST OPTION WHEN ONE SOURCE IS SELECTED
        this.selctedScreenType = newVal[0].id;
      }
    },
  },

  methods: {
    viewModeSelected(id) {
      this.selectedScreenType = id;
    },
    isSelectedModeButton(id) {
      // ADD SELECTED STRING TO IMAGE SRC IF SELECTED
      return id === this.selectedScreenType ? "_selected" : "";
    },
  },

  computed: {
    ...mapGetters({
      selectedMode: "getSelectedMode",
      sourceArr: "getSourceArr",
      sideMenuSources: "getSideMenuSources",
      streamsForDisplay: "getStreamsForDisplay",
    }),

    streamSourceImage() {
      // RETURN SINGLE SOURCE IMAGES ACCORDING TO SELECTED MODE
      switch (this.selectedMode) {
        case "camera":
          return require("@/assets/webcam-image.png");
        case "screen":
          return require("@/assets/screenshare-image.png");
        default:
          return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>

.main_content_container {
  min-height: 450px;
  min-width: 800px;
  margin: 32px 32px 16px;
  max-width: 1500px;

  .canvas {
    background: black;
    min-width: 800px;
    aspect-ratio: 16 / 9;
    display: flex;
    align-items: center;
    position: relative;

    // SINGLE IMAGE CSS HANDELING FOR 16/9 RATIO AND RESPONSIVE DESIGN
    .hundred_percent {
      & img {
        min-width: 100%;
        min-height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: block;
        margin: auto;
        aspect-ratio: 16 / 9;
      }
    }

    .eighty_percent {
      & img {
        width: 80%;
        height: 80%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: block;
        margin: auto;
        aspect-ratio: 16 / 9;
      }
    }

    .sixty_percent {
      & img {
        width: 60%;
        height: 60%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: block;
        margin: auto;
        aspect-ratio: 16 / 9;
      }
    }
    // DUAL SOURCES CSS HANDELING FOR 16/9 RATIO AND RESPONSIVE DESIGN
    .align_left_25 {
      position: absolute;
      left: 5px;
      bottom: 11px;
      width: 25%;
      aspect-ratio: 16 / 9;
      margin-bottom: -5px;
    }

    .align_right_25 {
      position: absolute;
      right: 5px;
      bottom: 11px;
      width: 25%;
      aspect-ratio: 16 / 9;
    }

    .align_right_33 {
      width: 34%;
      height: 66%;
      object-fit: cover;
    }

    .align_left_66 {
      width: 66%;
      height: 66%;
    }

    .full_screen {
      width: 100%;
      height: 100%;
    }
  }

  .view_modes_container {
    margin: 12px 0;
    display: flex;
    justify-content: center;

    .mode_buttons {
      display: flex;
      align-content: center;
      justify-content: space-between;
      padding: 0 9px;
      min-width: 190px;

      .mode_select_button,
      img {
        border-radius: 7px;
        height: 40px;
        width: 60px;
        margin: 0 8px;
      }
    }
  }
}
</style>