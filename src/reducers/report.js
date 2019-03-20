
  const INITIAL_STATE = {
     //report: 'RCCA'
  };
  const report = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'JOBS_FETCH_SUCCESS': 
          return action.payload;
       default:
        return state;
  }
};

export default report;