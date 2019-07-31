import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        name: 'toto'
    },
    getters: {
        getName: state => state.name,
    },
    mutations: {
        setName(state, pseudo) {
            state.name = pseudo
        }

    }
})
