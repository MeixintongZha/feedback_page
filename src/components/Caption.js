import React, { Component } from 'react'
//import { scaleLinear } from 'd3-scale'
//import { select } from 'd3-selection'

//import { hierarchy, treemap } from 'd3-hierarchy';
import bar_icon from '../res/barchart_icon.png';
import bubble_icon from '../res/bubblechart_icon.png';
import pie_icon from '../res/piechart_icon.png';
import stack_icon from '../res/stackedbar_icon.png';
import checkmark from '../res/correct.png';
import crossmark from '../res/incorrect.png';


function colorSwitch(val) {
    var d = val;
    if(d>=-100 && d<-40){
        return "#581845";
    }
    else if(d>=-40 && d<-20){
        return "#F01122";
    }
    else if(d>=-20 && d<-5){
        return "#FCCF04";
    }
    else if(d>=-5 && d<0){
        return "#4CFC04";
    }
    else if(d>=0 && d<5){
        return "#4CFC04";
    }
    else if(d>=5 && d<20){
        return "#FCCF04";
    }
    else if(d>=20 && d<60){
        return "#F01122";
    }
    else if(d>=60 && d<=100){
        return "#581845";
    }
   else {
    console.log("offsets error");}


}

class Caption extends Component {
    constructor(props) {
    super(props);
    }

    render() {
        const { offset, charttype } = this.props;
        var textColor = colorSwitch(parseInt(offset));
        const letterStyle = {
          paddingRight: 10,
//          backgroundColor: "#ffde00",
          color: textColor,
          display: "inline-block",
          fontFamily: "monospace",
          fontSize: 20,
          textAlign: "center"
        };

        var value = parseInt(offset)
        var img_src = "";
        if(charttype === "barchart") {
            img_src = bar_icon;
        }
        else if(charttype === "piechart") {
            img_src = pie_icon;
        }
        else if(charttype === "bubblechart") {
            img_src = bubble_icon;
        }
        else if(charttype == "stackbarchart") {
            img_src = stack_icon;
        }
        else {
            console.log("Error: chart_icon loading problem")
        }
        var isCorrect = "";
        if(value >= -5 && value <= 5) {
            isCorrect = checkmark;
        }
        else if(value<-5 || value >5){
            isCorrect = crossmark;
        }
        else {
            console.log("Error: offset parsing problem ")
        }

        return <figure style = {letterStyle} className="figure" marginRight="50">
          <img src={img_src} className="figure-img img-fluid rounded"
            width="20px"
            height="20px"/>

          <p color={textColor}>&nbsp;{offset}%&nbsp;</p>
          <img src={isCorrect} className="figure-img img-fluid rounded"
            width="20px"
            height="20px"/>
        </figure>
    }
}
export default Caption;