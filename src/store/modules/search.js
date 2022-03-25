import airportsApi from "../../../api/airports"

const state = () => ({
    origin: null,
    destination: null,
    depart_date: null,
    return_date: null,
    airports: []
})

const getters = {
    searchTerms: (state) => {
        return state.origin ? `Origen: ${state.origin} | Destino: ${state.destination} | Partida: ${state.depart_date} | Regreso: ${state.return_date}` : null
    }
}

const actions = {
    async getAllAirports({commit}) {
        const airports = await airportsApi.getAll()
        commit('setAirports', airports)
    },

    choseOrigin({commit}, origin) {
        commit('setOrigin', origin)
    },

    choseDestination({commit}, destination) {
        commit('setDestination', destination)
    }
}

const mutations = {
    setAirports(state, airports) {
        state.airports = airports
    },
    setOrigin(state, origin) {
        state.origin = origin
    },
    setDestination(state, destination) {
        state.destination = destination
    },
    setDepartDate(state, depart_date) {
        state.depart_date = depart_date
    },
    setReturnDate(state, return_date) {
        state.return_date = return_date
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}