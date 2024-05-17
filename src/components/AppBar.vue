<template>
    <div>
        <v-app-bar dark color="dark-grey">
          <div class="header">
           <p class="text-header">Home</p>
           <v-icon class="title-icon" color="white">mdi-developer-board</v-icon>
            <v-btn @click="navegar('/Calendario')" class="button-header">Tarefas</v-btn>
            <v-btn @click="navegar('/login')" class="button-header">Login </v-btn>
           
         </div>
        </v-app-bar>
    </div>
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
export default {
  methods: {
    navegar(path) {
      this.$router.push(path)
    }
  }
}
</script>
