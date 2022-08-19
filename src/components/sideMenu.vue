<template>
  <!-- MAIN CONTENT -->
  <div class="side_menu_container">
    <v-btn
      class="add_source_button"
      :id="content.actions.addSource.id"
      depressed
      @click="openAddMediaModal"
    >
      {{ content.actions.addSource.text }}
    </v-btn>

    <div
      class="active_sources"
      v-for="(mediaSource, index) in sourceArr"
      :key="index"
    >
      <media-source-button :content="mediaSource"></media-source-button>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import MediaSourceButton from "./mediaSourceButton.vue";

export default {
  name: "SideMenu",
  components: {
    MediaSourceButton,
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
    return {};
  },
  methods: {
    viewModeSelected(viewMode) {},
  },
  computed: {
    ...mapGetters({
      selectedMode: "getSelectedMode",
      sourceArr: "getSourceArr",
      selectedSources: "getSelectedSources",
    }),
  },
};
</script>
<style lang="scss" scoped>
.side_menu_container {
  max-width: 202px;
  padding: 11px;

  .add_source_button {
    color: #ffffff;
    background: #128079;
    width:100%;
    text-transform: none;
font-size: 12px;

  }

  .media_source_container {
  }
}
</style>