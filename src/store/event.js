export const event = {
    namespaced: true,
    state: {
        events: [{
                eventNo: 1,
                name: "Vue&TS勉強会",
                start: "2021-10-21",
                end: "2021-10-21",
                color: "blue",
                detail: "",
                timed: false
            },
            {
                eventNo: 2,
                name: "Vue.js応用勉強会",
                start: "2021-10-07",
                end: "2021-10-10",
                color: "green",
                detail: "",
                timed: false
            }
        ]
    },
    mutations: {
        updateEvents(state, value) {
            state.events.push(value);
        }
    },
    actions: {
        createEvent({ commit }, payload) {
            commit("updateEvents", payload);
        }
    }
};
