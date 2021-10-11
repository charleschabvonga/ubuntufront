import {
  create, destroy, findAll, findById, update
} from '@/api/agent.api';

import router from '@/router';

export const actions = {
  findAll: async ({ commit }) => {
    commit('setLoadingStatus', true);
    await findAll()
      .then(({ agents }) => {
        console.info('Action Success', agents);
        commit('setLoadingStatus', false);
        commit('setAgents', agents);
      }, (error) => {
        console.error(`Action Error: ${error}`);
        commit('setLoadingStatus', false);
        commit('setAgents', []);
      });
  },

  create: async ({ commit }, agent) => {
    commit('setLoadingStatus', true);
    await create(agent)
      .then((response) => {
        console.info('Action Success', response);
        commit('setLoadingStatus', false);
        commit('setAgentError', undefined);
        router.push({ name: 'Agents' });
      }, (error) => {
        console.error(`Action Error: ${error.message}`);
        commit('setLoadingStatus', false);
        commit('setAgentError', error.response.data.error);
      });
  },

  findById: async ({ commit }, id) => {
    commit('setLoadingStatus', true);
    await findById(id)
      .then(({ agent }) => {
        console.info('Action Success', agent);
        commit('setLoadingStatus', false);
        commit('setAgent', agent);
      }, (error) => {
        console.error(`Action Error: ${error}`);
        commit('setLoadingStatus', false);
        commit('setAgentError', error.response.data.error);
        commit('setAgent', undefined);
      });
  },

  update: async ({ commit }, agent) => {
    commit('setLoadingStatus', true);
    await update(agent.id, agent)
      .then((response) => {
        console.info('Action Success', response);
        commit('setAgent', response.agent);
        commit('setLoadingStatus', false);
        commit('setAgentError', undefined);
        const agentId = response.agent.id;
        router.push({ name: 'ShowAgent', params: { agentId } });
      }, (error) => {
        console.error(`Action Error: ${error.message}`);
        commit('setLoadingStatus', false);
        commit('setAgentError', error.response.data.error);
      });
  },

  destroy: async ({ commit }, id) => {
    commit('setLoadingStatus', true);
    await destroy(id)
      .then((response) => {
        console.info('Action Success', response);
        commit('setLoadingStatus', false);
        commit('setAgentError', undefined);
      }, (error) => {
        console.error(`Action Error: ${error}`);
        commit('setLoadingStatus', false);
        commit('setAgentError', error.response.data.error);
      });
  },
};
