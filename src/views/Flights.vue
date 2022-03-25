<template>
  <v-card
      class="mt-3"
      :loading="loading"
  >
    <v-toolbar>
      <v-btn
          icon
          class="hidden-xs-only"
          @click="$router.push({name: 'search'})"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>Vuelos disponibles</v-toolbar-title>
    </v-toolbar>
    <v-card-subtitle v-if="!loading" key="subtitle">Resultados de la búsqueda <strong v-text="searchTerms"></strong>
    </v-card-subtitle>
    <v-card-subtitle v-else-if="loading" key="subtitle">Buscando...</v-card-subtitle>
    <v-card-text v-if="!loading && flights.length === 0" key="results">
      No se encontraron resultados para tu búsqueda
    </v-card-text>
    <v-list v-else key="results">
      <v-list-item
          v-for="flight in flights"
          :key="flight.id"
      >
        <v-list-item-content>
          <v-list-item-title v-text="flight.company"></v-list-item-title>

          <v-list-item-subtitle v-text="flight.duration"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
import {mapGetters, mapState} from "vuex";

export default {
  computed: {
    ...mapGetters({
      searchTerms: 'search/searchTerms'
    }),
    ...mapState({
      flights: state => state.flights.items,
      loading: state => state.flights.loading,
    })
  },
  async created() {
    await this.$store.dispatch('flights/clearItems')

    if (!this.searchTerms) {
      await this.$router.push({
        name: 'search'
      })
    }

    await this.$store.dispatch('flights/searchFlights')
  }
}
</script>