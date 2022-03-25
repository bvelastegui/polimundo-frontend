<template>
  <v-layout column>
    <v-toolbar rounded>
      <v-btn
        icon
        class="hidden-xs-only"
        @click="$router.push({name: 'search'})"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>Vuelos disponibles</v-toolbar-title>
    </v-toolbar>
    <v-card
      class="mt-3"
      :loading="loading"
    >
      <v-card-text
        v-if="!loading"
        key="subtitle"
      >
        Resultados de la búsqueda <strong v-text="searchTerms" />
      </v-card-text>
      <v-card-text
        v-else-if="loading"
        key="subtitle"
      >
        Buscando...
      </v-card-text>
    </v-card>
    <v-row
      v-if="!loading && flights.length === 0"
      key="results"
      class="mt-3"
    >
      <v-card>
        <v-card-text>No se encontraron resultados para tu búsqueda</v-card-text>
      </v-card>
    </v-row>
    <v-simple-table
      v-else
      key="results"
      class="mt-3"
    >
      <template #default>
        <tbody>
          <tr
            v-for="flight in flights"
            :key="flight.id"
          >
            <td>
              <v-avatar
                class="my-3"
                color="indigo"
              >
                <v-icon dark>
                  mdi-airplane
                </v-icon>
              </v-avatar>
            </td>
            <td>
              {{ flight.company }}
              <small class="d-block">Duración: {{ time(flight.duration) }}</small>
            </td>
            <td>
              {{ flight.segment[0].departureTime }}
              <small class="d-block">{{ flight.segment[0].origin }}</small>
            </td>
            <td
              v-if="flight.segment.length > 1"
              key="scales"
            >
              {{ flight.segment.length - 1 }} escalas (cambio de avión)
            </td>
            <td
              v-else
              key="scales"
            >
              Viaje directo
              <small class="d-block">sin escalas</small>
            </td>
            <td
              v-if="flight.segment.length > 1"
              key="dest"
            >
              {{ flight.segment[flight.segment.length - 1].arrivalTime }}
              <small class="d-block">{{ flight.segment[flight.segment.length - 1].destination }}</small>
            </td>
            <td
              v-else
              key="dest"
            >
              {{ flight.segment[0].arrivalTime }}
              <small class="d-block">{{ flight.segment[0].destination }}</small>
            </td>
            <td class="text-right">
              <small>USD</small> {{ flight.price }}
            </td>
            <td class="text-right">
              <v-btn color="primary">
                Comprar
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-layout>
</template>
<script>
import { mapGetters, mapState } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      searchTerms: 'search/searchTerms',
    }),
    ...mapState({
      flights: (state) => state.flights.items,
      loading: (state) => state.flights.loading,
    }),
    time() {
      return (duration) => `${(duration / 60).toFixed(0)}h`;
    },
  },
  async created() {
    await this.$store.dispatch('flights/clearItems');

    if (!this.searchTerms) {
      await this.$router.push({
        name: 'search',
      });
    }

    await this.$store.dispatch('flights/searchFlights');
  },
};
</script>
