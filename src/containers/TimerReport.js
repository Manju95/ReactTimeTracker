import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { View, Text } from 'react-native';
import { report } from '../actions/report';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import moment from 'moment';
import {Redirect} from 'react-router-dom';

class TimerReport extends React.Component {

     componentWillMount() {
      this.props.report();
     }
     render() {
      const{details}= this.props;
      const {uid}= this.props; 
   
    if(!uid) return <Redirect to='/login' />
      
      if(details == null)
      {
        var keys = <td>No records found</td>
      }
      else{
      var keys = Object.entries(details).map((key,i)=>{
        //k=key[0];
        return(
          <tr >
          {/* <td>{key[0]}</td> */}
          {Object.entries(key[1]).reverse().map((subitem, i) => {
              if(subitem[0]=="StartTime" || subitem[0]== "EndTime")
              {
                return(
                <td>{(new Date(subitem[1])).toLocaleString("en-US")}</td>
                )
              }
              else{
                return (
                  <td>{subitem[1]}</td>
                )
              }
            }
          )
        }
       </tr>
        )
      }
    ); }
      return(
        <div>
        <div className="table-responsive-sm-md-lg-xl" >
           <center><h1>Detail Report</h1></center> 
        <table className="table table-bordered table-dark">
            <tbody>
                <tr className="table table-light">
                    <th> Task </th>
                    <th> Start Time </th>
                    <th> Stop Time</th>
                    <th> Record Time</th>
                    <th> Created Date</th>
                </tr>
                {keys}
            </tbody>
        </table>
    </div>
{/* <div class="table-responsive-sm-md-lg-xl" >
<center><h1>Total Duration</h1></center> 
<table class="table table-bordered table-dark">
 <tbody>
     <tr class="table table-light">
         <th> Task </th>
         <th> Total Time </th>
     </tr>
     {keys}
 </tbody>
</table>
</div> */}
</div>
      
      )
    
    }
  
  }
        
const mapDispatchToProps = dispatch => {
  return {
    report : () => dispatch(report())
  }
}
const mapStateToProps = function (store) {
  console.log('Servicedetails mapStatetoprops =',store.report );
  return {
      details: store.report , 
      uid : store.member.uid
  };
  
};
export default connect(mapStateToProps,mapDispatchToProps)(TimerReport)
