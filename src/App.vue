<template>
  <v-app class="app_container">
    
    <side-menu class="side_menu" :content="faker"></side-menu>
    <div class="component_wrapper">
      <canvas-component class="canvas_component" :content="faker.mainContent"></canvas-component>
  
      <footer-buttons class="footer_buttons" :content="faker.footerButtons"></footer-buttons>
</div>
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
.v-application--wrap{

    justify-content: center;
   flex-direction: row;


  
  .component_wrapper{
    width: 100%;
    position:relative;
margin-bottom: 100px;
    display:flex;
   flex-direction: column;

  
  .canvas_component{
    margin-top: 93px;
    
  
  }

.side_menu{
  margin-right: 45px;
  height:100%;
}
.footer_buttons{
  margin:20px auto;
  // position:absolute;
  // bottom:0;
  // left: 0; 
  // right: 0; 
    max-width: 506px;


  }
}
}
  .v-btn{
    letter-spacing: unset;
  }
  
</style>
