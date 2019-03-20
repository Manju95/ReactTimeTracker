import { START_TIMER, STOP_TIMER, RESET_TIMER, KEY_FETCH_SUCCESS, CURRENT_TASK } from '../actions/timer';


export const initialState = {
  started: null,
  end:null,
  recordedTime: 0,
  lapTotal: 0,
  laps: [],
  key: null,
  task: [],
  tasks:null,
  allRecord:[],
  mapRecord:[],
  currentTask:''
}

export default function timer(state=initialState, action){
  switch (action.type) {
    case KEY_FETCH_SUCCESS: {
      return {
        ...state,
        key: action.payload
      }
    };
    case START_TIMER:
    const eachtask = action.payload.task;
      return {
        ...state,
        started: action.payload.time,
        task: [eachtask,...state.task],
        tasks:action.payload.task
      };

    case STOP_TIMER:
    console.log("inside stop ",action.time , state.tasks)
    var recorded = state.recordedTime + action.time - state.started;
      
    for(let item in state.mapRecord){
      if(item == state.tasks){
        recorded = state.duration+recorded
        console.log("inside if ",action.time , state.tasks, recorded, state.duration)
      }
    }
    console.log("after cal ",action.time , state.tasks, recorded)
    return {
      ...state,
      recordedTime: (state.recordedTime + action.time - state.started),
      mapRecord:{...state.mapRecord, [state.tasks]: recorded},
      started : null,
      currentTask:''
      
    }
    
      // return {
      //   ...state,
      //   recordedTime: (state.recordedTime + action.time - state.started),
      //   end:action.time,
      //   allRecord :[recorded, ...state.allRecord],
      //   mapRecord : {...state.mapRecord, [state.tasks]: recorded},
      //   started: null,
        
      // };
     
    
    case RESET_TIMER:
     //return initialState
      return {
        ...state,
        recordedTime:0,
        currentTask:''
      }

      case CURRENT_TASK:
      return{
        ...state,
        currentTask:action.name,
        duration:action.duration
      }
    // case 'ADD_LAP':
    //   const lapTotal = state.laps.reduce((prev, cur) => prev + cur, 0);
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
