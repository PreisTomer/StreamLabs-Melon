<template>
  <!-- MAIN CONTENT -->
  <div class="main_content_container">
    <!-- CANVAS -->
    <div class="canvas">
      <!-- SINGLE SCREEN IMAGE -->
      <!-- <div style="color:red;">{{sourceArr}}</div> -->
      <div
        :class="{
          hundred_percent:
            this.selectedScreenType === 'webcam_full' ||
            this.selectedScreenType === 'screenshare_only',
          eighty_percent: this.selectedScreenType === 'webcam_80',
          sixty_percent: this.selectedScreenType === 'webcam_60',
        }"
      >
        <img
          v-if="streamSourceImage"
          :src="streamSourceImage"
        />
      </div>
      <!-- SPLIT SCREEN IMAGES -->
      <div v-if="selectedSources.length > 1" class="split_screen">
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
                isSelectedModeButton(camOption.id) +
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
                (content.viewModes.screen[0].id === selectedScreenType
                  ? '_selected'
                  : '') +
                '.svg')
            "
          />
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
    "$store.state.selectedMode": function (newVal) {
      if(newVal){
      this.selectedScreenType = this.content.viewModes[newVal][0].id;
      } else {
        this.selectedScreenType = {}
      }
    },
  },
  methods: {
    viewModeSelected(id) {
      this.selectedScreenType = id;
    },
    isSelectedModeButton(id) {
      return id === this.selectedScreenType ? "_selected" : "";
    },
  },
  computed: {
    ...mapGetters({
      selectedMode: "getSelectedMode",
      sourceArr: "getSourceArr",
      selectedSources: "getSelectedSources",
    }),
    streamSourceImage() {
      switch (this.selectedMode) {
        case "camera":
          return require("@/assets/webcam-image.png");

        case "screen":
          debugger
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
    aspect-ratio: 16 / 9;
    position: relative;
    min-width: 800px;


    .hundred_percent {
      & img {
        min-width: 100%;
        min-height: 100%;
         position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
         display:block;
    margin:auto;
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
         display:block;
    margin:auto;
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
         display:block;
    margin:auto;
        aspect-ratio: 16 / 9;
      }
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