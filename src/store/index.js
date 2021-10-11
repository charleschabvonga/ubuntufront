import Vue from 'vue';
import Vuex from 'vuex';

import { userModule } from './modules/user/user.module';
import { agentModule } from './modules/agent/agent.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: userModule,
    agent: agentModule,
  },
  strict: true, // prevents the store being modified outside of a mutation
});
