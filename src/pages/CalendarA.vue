
<template>
    <v-app>
      <v-main>
        <v-app-bar dark color="dark-grey">
          <div class="header">
           <p class="text-header">SilphCo.</p>
           <v-icon class="title-icon" color="white">mdi-developer-board</v-icon>
            <v-btn @click="navegar('/Calendario')" class="button-header">Tarefas</v-btn>
            <v-btn @click="navegar('/')" class="button-header">Home </v-btn>
            <v-btn @click="navegar('/login')" class="button-header">Login </v-btn>
           
         </div>
        </v-app-bar>
        
        <TestCRUD/>
      </v-main>
    </v-app>
  </template>
  
  <style>
    
.header {
  max-width: 98%;
  align-content: space-between;
  display: flex;
  gap: 10px
}
.text-header{
  margin-top: 14px
  
}

.button-header{
  margin-top: 9px;
}
  </style>
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

    methods: {
    navegar(path) {
      this.$router.push(path)
    }
    }
  };
  </script>
  