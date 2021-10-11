import {
  create,
  destroy,
  findAll,
  findById,
  update,
} from '@/api/user.api';

import router from '@/router';

export const actions = {
  findAll: async ({ commit }) => {
    commit('setLoadingStatus', true);
    await findAll()
      .then(({ users }) => {
        console.info('Action Success', users);
        commit('setUsers', users);
        commit('setLoadingStatus', false);
      }, (error) => {
        console.error(`Action Error: ${error}`);
        commit('setLoadingStatus', false);
        commit('setUsers', []);
      });
  },

  create: async ({ commit }, user) => {
    commit('setLoadingStatus', true);
    await create(user)
      .then((response) => {
        console.info('Action Success', response);
        commit('setUserError', undefined);
        router.push({ name: 'Users' });
      }, (error) => {
        console.error(`Action Error: ${error.message}`);
        commit('setLoadingStatus', false);
        commit('setUserError', error.response.data.error);
      });
  },

  findById: async ({ commit }, id) => {
    commit('setLoadingStatus', true);
    await findById(id)
      .then(({ user }) => {
        console.info('Action Success', user);
        commit('setLoadingStatus', false);
        commit('setUser', user);
      }, (error) => {
        console.error(`Action Error: ${error}`);
        commit('setLoadingStatus', false);
        commit('setUserError', error.response.data.error);
        commit('setUser', undefined);
      });
  },

  update: async ({ commit }, user) => {
    commit('setLoadingStatus', true);
    await update(user.id, user)
      .then((response) => {
        console.info('Action Success', response);
        commit('setUser', response.user);
        commit('setLoadingStatus', false);
        commit('setUserError', undefined);
      }, (error) => {
        console.error(`Action Error: ${error.message}`);
        commit('setLoadingStatus', false);
        commit('setUserError', error.response.data.error);
      });
  },

  destroy: async ({ commit }, id) => {
    commit('setLoadingStatus', true);
    await destroy(id)
      .then((response) => {
        console.info('Action Success', response);
        commit('setLoadingStatus', false);
        commit('setUserError', undefined);
      }, (error) => {
        console.error(`Action Error: ${error}`);
        commit('setLoadingStatus', false);
      });
  },
};
