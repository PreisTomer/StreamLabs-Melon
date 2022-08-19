<template>
  <div class="button_container" :style="buttonStyle">
    <div v-if="content.type === 'default'">
      <v-btn class="button_card" depressed @click="addMediaButtonClicked">
        <v-icon class="plus_icon" color="#128079">mdi-plus</v-icon>
        <span class="text">{{ content.text }}</span>
        <span class="subtext">{{ content.subtext }}</span>
      </v-btn>
    </div>
    <div v-else class="source_mode">
      <div :class="['button_card', 'toggle_media_card']">
        <v-btn
          v-if="selectedSource !== content.id"
          class="show_stream"
          @click="toggleStream"
          >Show on stream</v-btn
        >
        <span v-else class="hide_stream">Hide on stream</span>
        <div class="gradient_container">
          <span class="type_indicator">My {{ content.type }} feed</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    };
  },
  watch: {
    content(newVal) {
      this.selectedSource = newVal.type;
    },
  },
  computed: {
    buttonStyle() {
      if (this.selectedSource) {
        let imageUrl = require(`@/assets/${this.content.backgroundImage}`);
        return {
          "--background-image": "url(" + imageUrl + ")",
        };
      }
    },
  },
  methods: {
    addMediaButtonClicked() {
      this.$emit("addSource");
    },

    toggleStream() {
      this.$emit("toggleStream", this.content);

    },
  },
};
</script>

<style lang="scss">
.button_container {
  color: #000000;

  .button_card {
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
        border-radius: 4px;
        width: 110px;
        height: 34px;
        color: #f34848;
        background: #ffffff;
        padding: 10px 0;
      }
      .gradient_container {
        width: 100%;
        position: absolute;
        bottom: 0;
        height: 37px;
        background: linear-gradient(
          180deg,
          rgba(196, 196, 196, 0) 0%,
          #000000 100%
        );
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