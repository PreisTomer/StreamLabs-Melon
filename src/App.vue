<template>
  <v-app>
    <div class="app_container">
      <side-menu class="side_menu" :content="faker"></side-menu>
      <canvas-component :content="faker.mainContent"></canvas-component>
    </div>
      <footer-buttons class="footer_buttons" :content="faker.footerButtons"></footer-buttons>
  </v-app>
</template>

<script>
import CanvasComponent from "./components/canvas";
import footerButtons from "./components/footerButtons";
import SideMenu from "./components/sideMenu";
import faker from "./services/dto/faker";

export default {
  name: "StreamLabs-Melon",

  components: {
    CanvasComponent,
    SideMenu,
    footerButtons
  },

  data: () => ({
    faker,
  }),
};
</script>

<style lang="scss">
.app_container {
  display: flex;
  justify-content: center;
  padding: 0 0 auto;
}
.side_menu{

  padding-bottom: auto;
}
.footer_buttons{
  margin:0 auto;
  padding-bottom: auto;
  }
  .v-btn{
    letter-spacing: unset;
  }
</style>
