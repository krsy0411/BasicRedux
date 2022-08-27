import { createStore } from './redux.js';
import { reducer } from './reducer.js';
import * as ActionType from './actions';


const store = creatStore(reducer);

store.subscribe(function() {
  console.log(store.getState());
});

store.dispath(ActionType.increase);
store.dispath(ActionType.increase);
store.dispath(ActionType.reset);
store.dispath(ActionType.decrease);
store.dispath(ActionType.increase);