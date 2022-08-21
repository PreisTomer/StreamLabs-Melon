<template>
  <!-- SIDE MENU -->
  <div class="side_menu_container">
    <!-- ADD SOURCE BUTTON -->
    <v-btn class="add_source_button" :id="content.sideMenu.actions.addSource.id" :disabled="streamsForDisplay.length === 2" depressed @click="openAddMediaModal">
      {{ content.sideMenu.actions.addSource.text }}
    </v-btn>
    <!-- SOURCE CARDS -->
    <div class="active_sources" v-for="(mediaSource, index) in sourceArr" :key="index">
    <!-- MEDIA-SOURCE COMPONENT AS BUTTON -->
      <media-source-button :content="mediaSource" @addSource="openAddMediaModal" @showStream="loadCanvasContent" @hideStream="hideCanvasContent"></media-source-button>
    </div>
    <!-- SIMPLE DIVIDER -->
    <div class="divider"></div>
    <!-- SELECT STREAM TYPE MODAL (OPENS WHEN ADDING SOURCE) -->
    <add-media-modal :show="showModal" :content="content.addNewMediaModal" @close="showModal = false" @mediaSelected="sourceSelected"></add-media-modal>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import MediaSourceButton from "./mediaSourceButton.vue";
import AddMediaModal from "./addMediaModal.vue";

export default {
  name: "SideMenu",
  components: {
    MediaSourceButton,
    AddMediaModal,
  },
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
      showModal: false,
    };
  },
  methods: {
    openAddMediaModal() {
      this.showModal = true;
    },
    sourceSelected(obj) {
      // UPDATE VUEX STORE WITH SELECTED SOURCE
      this.$store.dispatch("updateSourceArr", obj);
    },
    loadCanvasContent(stream) {
      // SHOW SOURCE ON CANVAS
      this.$store.dispatch("updateStreamsForDisplay", stream);
      // UPDATE SELECTED MODE BASED ON ACTIVE SOURCES
      this.$store.dispatch("updateSelectedMode", stream.type);
    },
    hideCanvasContent(stream) {
      // REMOVE SOURCE FROM STORE ARRAY
      this.$store.dispatch("removeSelectedSource", stream[0]);
    },
  },
  computed: {
    ...mapGetters({
      selectedMode: "getSelectedMode",
      sourceArr: "getSourceArr",
      sideMenuSources: "getSideMenuSources",
      streamsForDisplay: "getStreamsForDisplay",
    }),
  },
};
</script>

<style lang="scss" scoped>
.side_menu_container {
  height: 100%;
  max-width: 202px;
  padding: 11px;
  position: relative;

  .add_source_button {
    color: #ffffff;
    background: #128079;
    width: 100%;
    // VUETIFY TRANSFORMS ALL BUTTON TEXT TO CAPITAL
    text-transform: none;
    font-size: 12px;
  }

  .divider {
    position: absolute;
    width: 2px;
    height: 100vh;
    background: #e5eaed;
    right: 0;
    top: 0;
  }
}
</style>