<template>
  <v-app>
   <main-content :content="faker"></main-content>
  </v-app>
</template>

<script>
import MainContent from './components/mainContent';
import faker from './services/dto/faker'

export default {
  name: 'StreamLabs-Melon',

  components: {
    MainContent,
  },

  data: () => ({
    faker
  }),
};
</script>
