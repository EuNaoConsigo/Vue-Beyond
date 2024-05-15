
<template>
    <v-app>
      <v-main>
        <v-app-bar dark color="blue" >
          Quadro de Horários
          <v-icon class="title-icon" color="white">mdi-developer-board</v-icon>
        </v-app-bar>
        <TestCRUD/>
      </v-main>
    </v-app>
  </template>
  
  <script>
  
  import TestCRUD from '../components/TestCRUD.vue';
  
  export default {
    name: 'App',
  
    components: {
    
      TestCRUD, 
    },
  
    data: () => ({
      //
    }),
  };
  </script>
  