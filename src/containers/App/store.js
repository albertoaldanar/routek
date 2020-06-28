import { combineReducers, createStore, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import thunk from 'redux-thunk';
import {
  recordsTableReducer,
  newOrderTableReducer,
  sidebarReducer,
  themeReducer,
  customizerReducer,
  todoReducer,
  routesReducer,
  rtlReducer,
  authReducer,
  formRouteReducer,

} from '../../redux/reducers/index';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form",
  theme: themeReducer,
  rtl: rtlReducer,
  sidebar: sidebarReducer,
  recordsTable: recordsTableReducer,
  newOrder: newOrderTableReducer,
  customizer: customizerReducer,
  todos: todoReducer,
  user: authReducer,
  routes: routesReducer,
  formRouteData: formRouteReducer,
});
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
