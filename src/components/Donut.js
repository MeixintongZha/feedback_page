import React, { Component } from 'react'
import {Doughnut} from 'react-chartjs-2';
import { render } from 'react-dom';

class Donut extends Component {
   constructor(props){
      super(props)
   }

render() {

    const { correct, total,charttype } = this.props;
    const mainstyle={
        textAlign:'center',
        margin:20
    };

    var correct_v = correct/total*100;
    console.log("correct_v:", correct_v);
    var incorrect_v = (1- correct/total)*100;
    const data = {
	labels: [
		'Correct',
		'Incorrect'
	],
	datasets: [{
		data: [correct_v, incorrect_v],
		backgroundColor: [
		'#36A2EB',
		'#FF6384'
		],
		hoverBackgroundColor: [
		'#36A2EB',
		'#FF6384'
		]
	}]
};
    return <div width="150pt"
        height='150pt'
        style={mainstyle}>
    <Doughnut data={data}
    options={{
            title:{
              display:true,
              text:charttype,
              fontSize:20
            },
            legend:{
              display:false
            }}}/>
     </div>

   }
}
export default Donut