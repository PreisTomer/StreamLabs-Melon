<template>
  <v-app>
    <div id="app">
      <img alt="StreamLabs logo" src="./assets/logo.png" />
      <side-menu></side-menu>
      <main-content :content="faker"></main-content>
    </div>
  </v-app>
</template>

<script>
import mainContent from "./components/mainContent.vue";
import sideMenu from "./components/sideMenu.vue";
import contentFaker from "./services/dto/faker"

export default {
  name: "SteamLabs-Melon",
  components: {
    mainContent,
    sideMenu,
  },
  data(){
    return {
      faker: contentFaker
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
