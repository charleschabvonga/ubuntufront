import { mutations } from './agent.mutations';
import { actions } from './agent.actions';

export const agentModule = {
  namespaced: true,
  state: () => ({
    agents: [],
    agent: undefined,
    agentError: undefined,
    loadingStatus: false,
  }),
  mutations,
  actions,
};
