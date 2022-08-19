<template>
  <!-- MAIN CONTENT -->
  <div class="main_content_container">
    <!-- CANVAS -->
    <div class="canvas">
      <!-- SINGLE SCREEN IMAGE -->
      <div class="single_screen">
        <img class="single_screen_image" :src="image" />
      </div>
      <!-- SPLIT SCREEN IMAGES -->
      <div class="split_screen">
        <img class="video_image" :src="videoImage" />
        <img class="screen_share_image" :src="screenShareImage" />
      </div>
    </div>


    <!-- VIEW MODE BUTTONS -->
    <div v-if="selectedSources.length > 0" class="view_modes_container">
      <div
        class="mode_buttons"
        v-for="viewMode in content.viewModes[selectedMode]"
        :key="viewMode.id"
      >
        <v-btn
          :id="viewMode.id"
          depressed
          @click="viewModeSelected(viewMode.id)"
        >
          <img
            class="mode_select_button"
            :src="
              '../assets/' + viewMode.image + selectedViewMode === viewMode.id
                ? '_selected'
                : '' + '.svg'
            "
          />
        </v-btn>
      </div>
    </div>

    <div
      class="action_buttons"
      v-for="button in content.actions.footerButtons"
      :key="button.id"
    >
      <v-btn :id="button.id" depressed>
        {{ button.text }}
      </v-btn>
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
      selectedViewModeButton: ''
 
    };
  },
  methods:{
    viewModeSelected(viewMode) {

    }
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
   
      selectedMode(){
        this.$store.getters.selectedMode
      },
      sourceArr(){
        this.$store.getters.sourceArr
      },
      selectedSources(){
        this.$store.getters.selectedSources
      }
  },
};
</script>
<style lang="scss" scoped>
.canvas {
  background: #000000;
  max-width: 800px;
  max-height: 450px;
  margin: 32px;
}
</style>