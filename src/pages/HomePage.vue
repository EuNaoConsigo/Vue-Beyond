<template>
    <div>
        <v-app-bar dark color="dark-grey">
          <div class="header">
           <p class="text-header">SilphCo.</p>
           <v-icon class="title-icon" color="white">mdi-developer-board</v-icon>
            <v-btn @click="navegar('/Calendario')" class="button-header">Tarefas</v-btn>
            <v-btn @click="navegar('/')" class="button-header">Home </v-btn>
            <v-btn @click="navegar('/login')" class="button-header">Login </v-btn>
         </div>
        </v-app-bar>
        <div class="container">
          <h1>O primeiro filme da série "Shrek" apresenta a história de um ogro solitário chamado Shrek que vive em um pântano. Sua paz é interrompida quando um grupo de criaturas de contos de fadas é exilado para seu pântano pelo maligno Lorde Farquaad. Para recuperar sua tranquilidade, Shrek faz um acordo com Farquaad: ele vai resgatar a princesa Fiona, que está presa em uma torre guardada por um dragão, para que Farquaad possa se casar com ela e, em troca, o pântano de Shrek será livre das criaturas indesejadas.

Shrek, junto com um burro falante chamado Donkey, embarca na missão e consegue resgatar Fiona. Durante a jornada de volta, Shrek e Fiona se apaixonam, mas Fiona guarda um segredo: à noite, ela se transforma em uma ogra devido a uma maldição. No final, Shrek interrompe o casamento de Fiona com Farquaad, revela seu amor por ela, e Fiona escolhe ficar permanentemente como uma ogra, aceitando sua verdadeira forma. Os dois se casam e vivem felizes juntos.</h1>
            &nbsp;
          <h1>A sequência, "Shrek 2", começa com Shrek e Fiona aproveitando sua lua de mel. Quando voltam para o pântano, são convidados pelos pais de Fiona, o Rei Harold e a Rainha Lillian, para visitar o reino de Tão Tão Distante. Os pais de Fiona, especialmente o Rei Harold, ficam chocados ao descobrir que Fiona se casou com um ogro e que ela mesma é uma ogra.

O Rei Harold, que tinha um acordo com a Fada Madrinha para que Fiona se casasse com seu filho, o Príncipe Encantado, conspira com ela para separar Shrek e Fiona. Shrek se sente inseguro sobre seu relacionamento com Fiona e, em um esforço para se tornar um "marido ideal", ele toma uma poção mágica da Fada Madrinha que o transforma em um homem bonito e Fiona de volta em uma humana. No entanto, essa transformação só será permanente se eles se beijarem antes da meia-noite.

Enquanto isso, a Fada Madrinha trama para que Fiona beije o Príncipe Encantado, fazendo-a acreditar que ele é Shrek. Com a ajuda de seus amigos, incluindo Donkey e o Gato de Botas, Shrek consegue impedir os planos da Fada Madrinha. No clímax, Fiona percebe que ama Shrek por quem ele é, e não pela sua aparência. Eles se beijam antes da meia-noite, mas ambos voltam a suas formas de ogro, escolhendo viver felizes como ogros.</h1>
        </div>
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
  margin-top: 14px;
  
}

.button-header{
  margin-top: 9px;
}

.container{
  max-width: 80%;
  text-align: justify;
  font-size:10px ;
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
