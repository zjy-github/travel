import TEST from './action-type';

/**
 * 将action和reducer整合至一个文件中，使其更直观
 * 
 * 描述：这是一个空白的action和reducer
 */

export function blank() {
  return {
    type: TEST,
  }
}

export function reducer(state, action){
  switch(action.type){
    case TEST:
      return {
        ...state,
        test: state.test,
      };
    default:
      return state;
  }
}