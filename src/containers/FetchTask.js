import React, {Component} from 'react'
import {connect} from 'react-redux';
import TaskList from './TaskList';
import LapList from './LapList';
import { formatTime } from '../helpers/helpers';
import { ListGroupItem, ListGroup } from 'reactstrap';

import FontAwesome from 'react-fontawesome';
import { Form, Label,  Button, Input } from 'reactstrap';
import { startTimer, stopTimer, currentTask, postStartTime, updateStopTimer } from '../actions/timer';
import { convertToCentiSeconds } from '../helpers/helpers';

class FetchTask extends Component{

    constructor(props){
        super(props);
        this.state={
            tasks:[]
        }
    }
    render(){
        const {tasks, mapRecord} = this.props;
        const {StartTimer,stime,etime, started , StopTimer , key} = this.props;
        const {name} = this.props;
      console.log(mapRecord);
      var keys = Object.entries(mapRecord).reverse().map((key,i)=>{
      return (
        <tr key={i}>

      <td>{key[0]}</td>
      <td> {formatTime(key[1])}</td>
      <td>  <div>
                     
                    <Button className="button" style={{backgroundColor: "white", color:"green"}} 
                    onClick={() => StartTimer(convertToCentiSeconds(Date.now()),key[0],key[1])}>
                     <FontAwesome className="fa-fw"  name="play"/> 
                     </Button>
                </div>
     </td>
      </tr>
      )});
    
        return(
          
            <div>
            <div className="table-responsive-sm-md-lg-xl" >
            <table className="table table-bordered ">
                <tbody>
                    {keys}
                </tbody>
            </table>
        </div>
        </div>

         );
    }
    

}

const mapStateToProps = (state) =>{
    return {
        tasks : state.timer.task,
        mapRecord :state.timer.mapRecord
    }

}

const mapDispatchToProps = (dispatch) =>({
    StartTimer : (change,task,duration) =>{
       dispatch(currentTask(task, duration))
       dispatch(postStartTime(change,task));
    //    if(change > 0){
    //        dispatch(stopTimer(change,task));
    //        dispatch(postStartTime(change,task));
    //    }
       
      // dispatch(startTimer(change,task, duration));
    },

    StopTimer : (change,key,task) =>{
        dispatch(updateStopTimer(change,key,task));
        //dispatch(stopTimer(change,key,task));
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(FetchTask);