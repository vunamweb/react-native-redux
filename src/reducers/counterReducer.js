import {INCREASE, DECREASE} from '../actions/type';

const initialState = {
  value: 0,
  data: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREASE:
    return {
       value: state.value + 1,
       data: { d: 'dd', g: 'ghf' }
    };
    //return state + 1;

    case DECREASE:
      return {
        value: state.value - 1,
        datazzz: { d: 'dd', g: 'ghf' }
     };  
    //return state - 1;

    default:
      return state;
  }
}