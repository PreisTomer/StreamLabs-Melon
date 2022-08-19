<template>
  <div class="button_container">
    <div v-if="content.type === 'default'">
      <v-btn class="add_media_button" depressed @click="addMediaButtonClicked">
        <v-icon class="plus_icon" color="#128079">mdi-plus</v-icon>
        <span class="text">{{ content.text }}</span>
        <span class="subtext">{{ content.subtext }}</span>
      </v-btn>
    </div>
    <div v-else class="source_mode">
      <v-btn class="toggle_media_button" @click="toggleStream">
        <span>{{ content.text }}</span>
        <span>My {{ content.type }} feed</span>
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
  methods: {
    addMediaButtonClicked() {},

    toggleStream() {},
  },
};
</script>

<style lang="scss">
.button_container {
  color: #000000;

  .add_media_button {
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
      color:#757575;
    }

    .v-btn__content {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>