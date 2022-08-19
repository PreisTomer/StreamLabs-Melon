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
      <v-btn
        :class="['button_card', 'toggle_media_button']"
        @click="toggleStream"
      >
        <span v-if="selectedSource !== content.id" class="show_stream"
          >Show on stream</span
        >
        <span v-else class="hide_stream">Hide on stream</span>
        <span class="type_indicator">My {{ content.type }} feed</span>
      </v-btn>
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
  computed: {
    buttonStyle() {
      return {
        "--background-image":
          'url("../assets/' + this.content.backgroundImage + '")',
      };
    },
  },
  methods: {
    addMediaButtonClicked() {},

    toggleStream() {},
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
    .toggle_media_button {
      background-image: var(--background-image);
      background-size: cover;
      text-align: center;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;

      .show_stream {
        border-radius: 4px;
        width: 110px;
        height: 34px;
        color: #ffffff;
        background: #128079;
        align-items: center;
        padding: 10px 0;
            }
      .hide_stream {
        border-radius: 4px;
        width: 110px;
        height: 34px;
              color: #f34848;
        background: #ffffff;
        padding: 10px 0;
      }
    }
  }
}
</style>