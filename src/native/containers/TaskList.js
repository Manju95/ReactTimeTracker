
import React, {Component} from 'react'
import { ListGroupItem } from 'reactstrap';
import {connect} from 'react-redux';
import { startTimer, stopTimer } from '../actions/timer';
import { convertToCentiSeconds } from '../helpers/helpers';

class TaskList extends Component{

    constructor(props){
        super(props);
        this.state={
            name:[]
        }
    }

    // handleInputChange = (task, name) => {
    //     this.setState({
    //      [name]: task.target.value
    //    })
    //   }

    render(){
        const {StartTimer,stime,etime, started , StopTimer , key} = this.props;
        const {name} = this.props;
        if(started){
            return(
                <ListGroupItem>
                    
                   <span>{name}</span>&nbsp;<button onClick={()=>StopTimer(convertToCentiSeconds(Date.now()),key,this.props.name)}>Stop</button>
                </ListGroupItem>
            );
        }
        else{
            return(
                <ListGroupItem>
                    
                    <span>{name}</span>&nbsp;<button onClick={()=>StartTimer(convertToCentiSeconds(Date.now()),this.props.name)}>start</button>
                </ListGroupItem>
            );            
        }

    }
}

const mapDispatchToProps = (dispatch) =>({
    StartTimer : (change,task) =>{
        dispatch(startTimer(change,task));
    },

    StopTimer : (change,key,task) =>{
        dispatch(stopTimer(change,key,task));
    }
})

const mapStateToProps = (state) =>{
    return{
        stime:state.timer.started,
        etime:state.timer.recordedTime,
        started :state.timer.started,
        key :state.timer.key
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskList);

