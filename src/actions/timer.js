import axios from 'axios';
import ErrorMessages from '../constants/errors';
import statusMessage from './status';
import { Firebase, FirebaseRef } from '../lib/firebase';
import {formatTime}  from '../helpers/helpers';

export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const KEY_FETCH_SUCCESS = 'KEY_FETCH_SUCCESS';
export const CURRENT_TASK = 'CURRENT_TASK';

export function postStartTime(time, task) {
  return (dispatch, getState) => {

    dispatch(startTimer(time, task));

    const state = getState();
    const { uid } = state.member;
    const data = {
      userid: uid,
      task: task,
      starttime: Firebase.database.ServerValue.TIMESTAMP,
      endtime: 0,
      duration: 0,
      createddate: new Date(),
    };
    return axios.post('https://timetrack-api.herokuapp.com/savetask', data)
      .then((response) => {
        if (response.status === 200) {
          dispatch(fetchUserKey(response.data.key))

        }
        else {
          console.log("error");
          //dispatch(fetchPostsError())
        }
      }).catch(async (err) => {
        await statusMessage(dispatch, 'loading', false);
        throw err.message;
      });
  }
}
export function updateStopTimer(time, keys, currentTask) {
  return (dispatch, getState) => {
    dispatch(stopTimer(time, currentTask));
    const state = getState();
    const { uid } = state.member;
    const {recordedTime} = state.timer;
    const data = {
      duration: formatTime(recordedTime),
      endtime: Firebase.database.ServerValue.TIMESTAMP,
      userid: uid,
      uniqe: keys
    };
    return axios.post('https://timetrack-api.herokuapp.com/updatetask', data)
      .then((response) => {
        if (response.status === 200) {
         console.log("success")

        }
        else {
          console.log("error");
          //dispatch(fetchPostsError())
        }
      }).catch(async (err) => {
        await statusMessage(dispatch, 'loading', false);
        throw err.message;
      });
  }

}
export function fetchUserKey(payload) {
  return {
    type: KEY_FETCH_SUCCESS,
    payload
  }
}

export function fetchPostsError() {
  return {
    type: "FETCH_ERROR"
  }
}


export function currentTask(task, duration){
  return{
    type: CURRENT_TASK,
    name : task,
    duration: duration
  }
}

export function startTimer(time, task, duration) {
  return {
    type: START_TIMER,
    payload: { time: time, task: task },
  }
}

export function stopTimer(time, currentTask) {
  return {
    type: STOP_TIMER,
    currentTask:currentTask,
    time
  };
}
export function resetTimer() {
  return {
    type: 'RESET_TIMER'
  };
}

export function addLap(time) {
  return {
    type: 'ADD_LAP',
    time
  };
}
