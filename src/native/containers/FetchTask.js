import React, {Component} from 'react'
import { ListGroup } from 'reactstrap';
import {connect} from 'react-redux';
import TaskList from './TaskList';

class FetchTask extends Component{

    constructor(props){
        super(props);
        this.state={
            tasks:[]
        }
    }
    render(){
        const {tasks} = this.props;
        return(
            <ListGroup>
               {tasks.map((item)=> <TaskList name={item} /> )}
            </ListGroup>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        tasks : state.timer.task
    }

}

export default connect(mapStateToProps)(FetchTask);