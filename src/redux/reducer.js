import initialState from './store/initialState';
export { reducer as blank } from './store/blank';

const reducers = {
  blank,
}

export default function reduce(state = initialState, action) {
  let newState;
  switch (action.type){
    default:
      newState = state;
  }

  return reducers.reduce((s, r) => r(s, action), newState);
}