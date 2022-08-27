
function createStore() {
  const state = {};
  //  구독발행모델
  const handlers = [];

  // 언제 상태를 업데이트 할 지를 도와주는 도구
  function send(action) {
    // createStore 바깥에서 상태를 업데이트 조작하도록 worker이용
    state = worker(state, action);
    // 구독함수 호출
    handlers.forEach(handler => handler());
  }

  // 데이터를 읽어내는 함수
  function getState() {
    return state;
  }

  // 인자는 하나의 함수
  function subscribe(handler) {
    handlers.push(handler);
  }

  return {
    send,
    getState,
    subscribe,
  }
}

// 상태를 바꿔주는 함수
// action은 어떤 데이터를 바꿀 지에 대한 힌트를 담은 객체
function worker(state = { count: 0}, action) {
  // do something
  switch(action.type) {
    case 'increase':
      // 참조형으로 만들지 않도록 새로운 객체를 만들어냄
      return {...state, count: state.count + 1};
    default:
      return {...state};
  }
}

const store = creatStore();

store.subscribe(function() {
  console.log(store.getState());
});

store.send({ type: 'increase' });