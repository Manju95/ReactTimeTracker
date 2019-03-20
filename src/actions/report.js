import { Firebase, FirebaseRef } from '../lib/firebase';
import axios from 'axios';

export const report = () => {

  return (dispatch, getState) => {
    const state = getState();
    const {uid} = state.member;
    axios.get(`https://timetrack-api.herokuapp.com/gettaskbyid/${uid}`)
    .then((result)=>{
        dispatch({
          type: 'JOBS_FETCH_SUCCESS', payload: result.data 
        });
    })
    .catch((err)=>{console.log(err)});   
    };
    // Firebase.database().ref(`/UserTimeTracker/${uid}`)
    //   .on('value', snapshot => {
    //     dispatch({ type: 'JOBS_FETCH_SUCCESS', payload: snapshot.val() });
    //   });
  //};
};