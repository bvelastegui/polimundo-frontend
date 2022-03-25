<template>
  <v-card class="px-4 py-3">
    <v-card-title>Encuentra tu vuelo</v-card-title>
    <v-form>
      <v-container>
        <v-row>
          <v-col
              cols="12"
              md="6"
              lg="3"
          >
            <v-autocomplete
                v-model="origin"
                :items="airports"
                filled
                label="Origen"
                item-value="code"
                item-text="code"
            >
              <template v-slot:selection="{ item }">
                {{ item.city }} - {{ item.country }} ({{ item.code }})
              </template>
              <template v-slot:item="{ item }">
                {{ item.city }} - {{ item.country }} ({{ item.code }})
              </template>
            </v-autocomplete>
          </v-col>
          <v-col
              cols="12"
              md="6"
              lg="3"
          >
            <v-autocomplete
                v-model="destination"
                :items="airports"
                filled
                label="Destino"
                item-value="code"
                item-text="code"
            >
              <template v-slot:selection="{ item }">
                {{ item.city }} - {{ item.country }} ({{ item.code }})
              </template>
              <template v-slot:item="{ item }">
                {{ item.city }} - {{ item.country }} ({{ item.code }})
              </template>
            </v-autocomplete>
          </v-col>
          <v-col
              cols="12"
              md="6"
              lg="3"
          >
            <v-text-field
                v-model="depart_date"
                color="#3A1C71"
                filled
                append-icon="mdi-calendar"
                label="Fecha de partida"
            ></v-text-field>
          </v-col>
          <v-col
              cols="12"
              md="6"
              lg="3"
          >
            <v-text-field
                v-model="return_date"
                color="#3A1C71"
                filled
                append-icon="mdi-calendar"
                label="Fecha de retorno"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col
              cols="12"
              md="3"
              offset-md="9"
              lg="2"
              offset-lg="10"
          >
            <v-fab-transition>
              <v-btn
                  block
                  dark
                  color="#3A1C71"
                  elevation="2"
              >
                Buscar
              </v-btn>
            </v-fab-transition>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>
<script>
import {mapActions, mapState} from 'vuex'

export default {
  computed: {
    origin: {
      get() {
        return this.$store.state.search.origin
      },
      set(value) {
        this.choseOrigin(value)
      }
    },
    destination: {
      get() {
        return this.$store.state.search.destination
      },
      set(value) {
        this.choseDestination(value)
      }
    },
    depart_date: {
      get() {
        return this.$store.state.search.depart_date
      },
      set(value) {
        this.$store.commit('search/setDepartDate', value)
      }
    },
    return_date: {
      get() {
        return this.$store.state.search.return_date
      },
      set(value) {
        this.$store.commit('search/setReturnDate', value)
      }
    },
    ...mapState({
      airports: state => state.search.airports
    })
  },

  methods: {
    ...mapActions({
      choseOrigin: 'search/choseOrigin',
      choseDestination: 'search/choseDestination'
    })
  },

  created() {
    this.$store.dispatch('search/getAllAirports')
  }
}
</script>