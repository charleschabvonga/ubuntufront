import Vue from 'vue';

// used for emitting events for the publish/subscribe model
export const agentEventBus = new Vue();

export const mutations = {
  setAgents: (state, value) => {
    state.agents = value;
  },
  setAgent: (state, value) => {
    state.agent = value;
    agentEventBus.$emit('agent-set', value);
  },
  setAgentError: (state, value) => {
    state.agentError = value;
  },
  setLoadingStatus: (state, value) => {
    state.loadingStatus = value;
  },
};
