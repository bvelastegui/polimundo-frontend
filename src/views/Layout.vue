<template>
  <v-app style="
    background: #3A1C71;
    background: -webkit-linear-gradient(to top left, #8c69cc, #613da6, #3A1C71);
    background: linear-gradient(to top left, #8c69cc, #613da6, #3A1C71);
  ">
    <v-app-bar
        elevation="4"
        app
    >
      <v-container>
        <v-app-bar-title>Agencia</v-app-bar-title>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <SearchTicket/>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import SearchTicket from "../components/SearchFlight.vue";

export default {
  components: {SearchTicket}
}
</script>