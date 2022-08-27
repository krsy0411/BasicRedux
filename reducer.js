import * as ActionType from './action-type.js';

const InitializeState = { count : 0 };

// 상태를 바꿔주는 함수
// action은 어떤 데이터를 바꿀 지에 대한 힌트를 담은 객체
export function reducer(state = InitializeState, action) {
  // do something
  switch(action.type) {
    case ActionType.INCREASE:
      // 참조형으로 만들지 않도록 새로운 객체를 만들어냄
      return {...state, count: state.count + 1};
    case ActionType.DECREASE:
      return {...state, count: state.count - 1};
    case ActionType.RESET:
      return {...state, count: 0};
    default:
      return {...state};
  }
}