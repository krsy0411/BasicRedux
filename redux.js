function createStore() {
  const state = {};
  //  구독발행모델
  const handlers = [];

  // 언제 상태를 업데이트 할 지를 도와주는 도구
  function dispath(action) {
    // createStore 바깥에서 상태를 업데이트 조작하도록 reducer 이용
    state = reducer(state, action);
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
    dispath,
    getState,
    subscribe,
  }
}

export const actionCreator = type => payload => ({
  type,
  payload,
});