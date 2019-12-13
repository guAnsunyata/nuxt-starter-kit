import Vue from 'vue';
import Vuex from 'vuex';

<% if (options.resolvedPath) { %>
import { <%= options.functionName %> } from '<%= options.resolvedPath %>';
<% } %>

Vue.use(Vuex);

<% if (options.resolvedPath) { %>
const storeOptions = <%= options.functionName %>();
<% } else { %>
const storeOptions = {};
<% } %>

export const createStore = () => {
  return new Vuex.Store(Object.assign({
    strict: (process.env.NODE_ENV !== 'production')
  }, storeOptions));
}
