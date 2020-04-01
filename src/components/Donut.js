import React, { Component } from 'react'
import {Doughnut} from 'react-chartjs-2';
import { render } from 'react-dom';

class Donut extends Component {
   constructor(props){
      super(props)
   }

render() {

    const { correct, total, charttype } = this.props;
    const mainstyle={
        textAlign:'center',
        margin:20
    };
    var correct_v = correct[0]/total * 100;
    var okay_v = correct[1]/total * 100;
    var incorrect_v = correct[2]/total * 100;
    var toobad_v = correct[3]/total * 100;
//
//    var correct_v = correct/total*100;
//    console.log("correct_v:", correct_v);
//    var incorrect_v = (1- correct/total)*100;
    const data = {
	labels: [
		'Correct',
		'Okay',
		'Incorrect',
		'TooBad'
	],
	datasets: [{
		data: [correct_v, okay_v, incorrect_v, toobad_v],
		backgroundColor: [
//		"#4CFC04",
//		"#FCCF04",
//		"#F01122",
//		"#581845"
        "#31e15b",
        "#f47d4a",
        "#ff3c5c",
        "#662225"
		],
		hoverBackgroundColor: [
//		"#4CFC04",
//		"#FCCF04",
//		"#F01122",
//		"#581845"
        "#31e15b",
        "#f47d4a",
        "#ff3c5c",
        "#662225"
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