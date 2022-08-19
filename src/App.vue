<template>
  <v-app>
    <div class="app_container">
      <side-menu :content="faker"></side-menu>
      <canvas-component :content="faker.mainContent"></canvas-component>
    </div>
  </v-app>
</template>

<script>
import CanvasComponent from "./components/canvas";
import SideMenu from "./components/sideMenu";
import faker from "./services/dto/faker";

export default {
  name: "StreamLabs-Melon",

  components: {
    CanvasComponent,
    SideMenu,
  },

  data: () => ({
    faker,
  }),
};
</script>

<style lang="scss">
.app_container {
  display: flex;
}
.v-btn{
  letter-spacing: unset;
}
</style>
