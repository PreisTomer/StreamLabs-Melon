<template>
  <!-- MAIN CONTENT -->
  <div class="side_menu_container">
    
    <v-btn
      class="add_source_button"
      :id="content.sideMenu.actions.addSource.id"
      depressed
      @click="openAddMediaModal"
    >
      {{ content.sideMenu.actions.addSource.text }}
    </v-btn>

    <div
      class="active_sources"
      v-for="(mediaSource, index) in sourceArr"
      :key="index"
    >
      <media-source-button :content="mediaSource"></media-source-button>
    </div>

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
    AddMediaModal
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
        showModal:false
    };
  },
  methods: {
    openAddMediaModal() {
        this.showModal =  true
    },
    sourceSelected(obj){
        this.$store.dispatch('updateSourceArr', obj)
        debugger
        console.log(this.sourceArr)
    }
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