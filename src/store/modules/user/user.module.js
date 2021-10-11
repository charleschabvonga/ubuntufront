import { mutations } from './user.mutations';
import { actions } from './user.actions';

export const userModule = {
  namespaced: true,
  state: () => ({
    users: [],
    user: undefined,
    userError: undefined,
    loadingStatus: false,
  }),
  mutations,
  actions,
};
