<template>
<!-- FOOTER BUTTONS COMPONENT -->
  <div class="footer_buttons_container">
    <!-- SIMPLE ITERATION ON FOOTER OPTIONS FROM DATA -->
    <div v-for="button in content" :key="button.id">
      <v-btn :class="['footer_button', { selected: button.id === 'live_button' }]" :id="button.id" depressed>
        {{ button.text }}
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterButtons",
  props: {
    content: {
      type: Array,
      required: false,
      default: () => {
        return [];
      },
    },
  },
};
</script>


<style lang="scss" scoped>

.footer_buttons_container {
  display: flex;
  min-width: 506px;
  justify-content: space-between;
  border: 2px solid #e5eaed;
  padding: 9px;

  .footer_button {
    width: 156px;
    font-weight: 700;
    line-height: 14px;
    text-transform: none;

    &.selected {
      color: #ffffff;
      background: #128079;
    }
  }
}
</style>