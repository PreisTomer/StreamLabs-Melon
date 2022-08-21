<template>
<!-- MEDIA SOURCE CARDS COMPONENT -->
  <div class="button_container">
    <!-- DEFAULT STATE (NO SELECTION) -->
    <div v-if="content.type === 'default'">
      <v-btn class="button_card" depressed @click="addMediaButtonClicked">
        <v-icon class="plus_icon" color="#128079">mdi-plus</v-icon>
        <span class="text">{{ content.text }}</span>
        <span class="subtext">{{ content.subtext }}</span>
      </v-btn>
    </div>

    <!-- SOURCES ADDED TO SIDE BAR STATE -->
    <div v-else class="source_mode" :style="buttonStyle">
      <div :class="['button_card', 'toggle_media_card']">
        <!-- SHOW/HIDE STREAM BUTTONS WITHIN CARD -->
        <v-btn v-if="selectedSource !== content.id || streamsToShow.length === 0" class="show_stream" @click="showStream">Show on stream</v-btn>
        <v-btn v-if="selectedSource === content.id && streamsToShow.length> 0" class="hide_stream" @click="hideStream">Hide on stream</v-btn>
        <!-- GRADIENT AND SMALL COPY AT BOTTOM OF CARD -->
        <div class="gradient_container">
          <span class="type_indicator">My {{ content.type }} feed</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MediaSourceButton",
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
      selectedSource: "",
      streamsToShow: [],
    };
  },
  watch: {
    // WHEN ADDING SOURCE WE WANT THE TYPE TO BE UPDATED FOR DISPLAY PURPOSES
    content(newVal) {
      this.selectedSource = newVal.type;
    },
  },

  // TYPE IMPLEMENTATION WHEN FIRST ADDING SOURCE
  created() {
    this.selectedSource = this.content.type;
  },

  computed: {
    buttonStyle() {
      // CARD BACKGROUND IMPLEMENTATION AS IMAGE BACKGROUND - BOUND AS STYLE PROPERTY IN TEMPLATE
      if (this.selectedSource) {
        let imageUrl = require(`@/assets/${this.content.backgroundImage}`);
        return {"--background-image": "url(" + imageUrl + ")",
        };
      }
    },

    ...mapGetters({
      selectedMode: "getSelectedMode",
      sourceArr: "getSourceArr",
      sideMenuSources: "getSideMenuSources",
      streamsForDisplay: "getStreamsForDisplay",
    }),
  },

  methods: {
    // SINCE THIS IS A CHILD COMPONENT WE EMIT EVENTS TO PARENT WHEN USER INTERACTS
    addMediaButtonClicked() {
      this.$emit("addSource");
    },

    showStream() {
      this.$emit("showStream", this.content);
      this.streamsToShow.push(this.content.id);
    },

    hideStream() {
      if (this.streamsToShow.length > 1) {
        this.streamsToShow.filter((stream) => {
          return stream !== this.content.id;
        });
      } else {
        this.streamsToShow = [];
      }
      this.$emit("hideStream", this.streamsToShow);
    },
  },
};
</script>

<style lang="scss">
.button_container {
  color: #000000;

  .button_card {
    // UNFORTUNATELY OVERRIDING CLASSES IN VUETIFY SOMETIMES REQUIRES THE USE OF !important
    width: 179px !important;
    height: 100px !important;
    padding: 18px 5px !important;
    margin: 15px 0;
    text-transform: none;

    .plus_icon.v-icon::before {
      font-size: 32px;
    }

    .text {
      font-weight: bold;
      color: #000000;
      padding-top: 2px;
      padding-bottom: 8px;
      font-size: 14px;
      font-style: normal;
    }

    .subtext {
      font-size: 12px;
      color: #757575;
    }

    .v-btn__content {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .source_mode {
    .toggle_media_card {
      border-radius: 4px;
      position: relative;
      background-image: var(--background-image);
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;

      .show_stream {
        line-height: 14px;
        font-size: 12px;
        text-transform: none;
        border-radius: 4px;
        width: 110px;
        height: 34px;
        color: #ffffff;
        background: #128079;
        align-items: center;
        padding: 10px 0;
      }
      .hide_stream {
        line-height: 14px;
        font-size: 12px;
        text-transform: none;
        border-radius: 4px;
        width: 110px;
        height: 34px;
        background: #ffffff;
        text-align: center;
        align-items: center;
        color: #f34848;
        padding: 10px 0;
      }
      .gradient_container {
        width: 100%;
        position: absolute;
        bottom: 0;
        height: 37px;
        background: linear-gradient( 180deg, rgba(196, 196, 196, 0) 0%, #000000 100%);
        border-radius: 0 0 4px 4px;

        .type_indicator {
          position: absolute;
          line-height: 14px;
          font-size: 12px;
          left: 4px;
          bottom: 1px;
          color: #ffffff;
        }
      }
    }
  }
}
</style>