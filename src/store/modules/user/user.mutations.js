import Vue from 'vue';

// used for emitting events for the publish/subscribe model
export const userEventBus = new Vue();

export const mutations = {
  setUsers: (state, value) => {
    state.users = value;
  },
  setUser: (state, value) => {
    state.user = value;
    userEventBus.$emit('user-set', value);
  },
  setUserError: (state, value) => {
    state.userError = value;
  },
  setLoadingStatus: (state, value) => {
    state.loadingStatus = value;
  },
};
