import { START_TIMER, STOP_TIMER, RESET_TIMER, KEY_FETCH_SUCCESS } from '../actions/timer';
export const initialState = {
  started: null,
  recordedTime: 0,
  lapTotal: 0,
  laps: [],
  key: null,
  task: [],
}

const time = (state = {}, action) => {
  switch (action.type) {
    case KEY_FETCH_SUCCESS: {
      return {
        ...state,
        key: action.payload
      }
    };
    case START_TIMER:
      return {
        ...state,
        started: action.payload.time,
        task: action.payload.task
      };

    case STOP_TIMER:
      return {
        ...state,
        recordedTime: state.recordedTime + action.time - state.started,
        task: [...state.task,state.task],
        started: null,
      };
    case RESET_TIMER:
      return initialState

    // case 'ADD_LAP':
    //   const lapTotal = state.laps.time((prev, cur) => prev + cur, 0);
    //   const lapTime = action.time - state.started + state.recordedTime - lapTotal;
    //   const newLapTotal = lapTotal + lapTime;
    //   return {
    //     ...state,
    //     lapTotal: newLapTotal,
    //     laps: [lapTime, ...state.laps],
    //   }
    default:
      return state;
  }
}
export default time;
