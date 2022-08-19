<template>
  <v-app>
    <div class="app_container">
      <side-menu :content="faker"></side-menu>
      <main-content :content="faker.mainContent"></main-content>
    </div>
  </v-app>
</template>

<script>
import MainContent from "./components/mainContent";
import SideMenu from "./components/sideMenu";
import faker from "./services/dto/faker";

export default {
  name: "StreamLabs-Melon",

  components: {
    MainContent,
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
