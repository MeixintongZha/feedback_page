import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';

import PropTypes from 'prop-types'
import Caption from './components/Caption'
import Donut from './components/Donut'
import Confidence from './components/Confidence'

//chartSwitcher(cmQuestion) {
//    const { offset, charttype } = cmQuestion;
//    return <Caption offset = {offset}
//                    charttype = {charttype}/>;
//}
var trial1 = {charttype:"barchart", offset:"0"};
var trial2 = {charttype:"barchart", offset:"10"};
var trial3 = {charttype:"barchart", offset:"-5"};
var trial4 = {charttype:"barchart", offset:"-10"};
var trial5 = {charttype:"barchart", offset:"-40"};
var trial6 = {charttype:"bubblechart", offset:"30"};
var trial7 = {charttype:"bubblechart", offset:"15"};
var trial8 = {charttype:"bubblechart", offset:"-25"};
var trial9 = {charttype:"bubblechart", offset:"0"};
var trial10 = {charttype:"bubblechart", offset:"30"};
var trial11 = {charttype:"piechart", offset:"-25"};
var trial12 = {charttype:"piechart", offset:"15"};
var trial13 = {charttype:"piechart", offset:"0"};
var trial14 = {charttype:"piechart", offset:"-5"};
var trial15 = {charttype:"piechart", offset:"15"};
var trial16 = {charttype:"stackbarchart", offset:"5"};
var trial17 = {charttype:"stackbarchart", offset:"-60"};
var trial18 = {charttype:"stackbarchart", offset:"0"};
var trial19 = {charttype:"stackbarchart", offset:"15"};
var trial20 = {charttype:"stackbarchart", offset:"30"};

var allTrials=[]
allTrials.push(trial1);
allTrials.push(trial2);
allTrials.push(trial3);
allTrials.push(trial4);
allTrials.push(trial5);
allTrials.push(trial6);
allTrials.push(trial7);
allTrials.push(trial8);
allTrials.push(trial9);
allTrials.push(trial10);
allTrials.push(trial11);
allTrials.push(trial12);
allTrials.push(trial13);
allTrials.push(trial14);
allTrials.push(trial15);
allTrials.push(trial16);
allTrials.push(trial17);
allTrials.push(trial18);
allTrials.push(trial19);
allTrials.push(trial20);

    var mainStyle = {
      margin: 10
    };

    var donutStyle = {
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      margin: 20,
      padding: 10,
    };

    var CaptionStyle = {
      paddingRight:50
    };
    var numTrial = 5; //number of trials of one type
    var type1='bubblechart';

function switchDonut(data, type) {
    var count= 0;
    var correct = 0;
    var okay = 0;
    var incorrect = 0;
    var toobad = 0;

    for(var i = 0; i<data.length; i++) {
        if(data[i].charttype === type) {
            count = count + 1;
            if (data[i].offset>=-5 &&data[i].offset<=5) {
            correct = correct + 1;}
            if (data[i].offset>=-5 &&data[i].offset<=5) {
            correct = correct + 1;}

            if(data[i].offset<=-60){
            toobad = toobad + 1;
            }
            if(data[i].offset>-60 && data[i].offset<-20){
            incorrect = incorrect + 1;}
            if(data[i].offset>=-20 && data[i].offset<-5){
            okay = okay + 1;}
            if(data[i].offset>=-5 && data[i].offset<0){
            correct = correct + 1;}
            if (data[i].offset===0) {
            correct = correct + 1;}
            if(data[i].offset>0 && data[i].offset<=5){
            correct = correct + 1;}
            if(data[i].offset>5 && data[i].offset<=20){
            okay = okay + 1;}
            if(data[i].offset>20 && data[i].offset<60){
            incorrect = incorrect + 1;}
            if(data[i].offset>=60){
            toobad = toobad + 1;}
            else {
            console.log("donut input error");
            }
        }
    }
    return [correct,okay,incorrect,toobad];
}

export const Feedback = () => (
<div align="center" style={mainStyle}>
<div align="center">
    <Caption style={CaptionStyle} offset={allTrials[0].offset} charttype = {allTrials[0].charttype}></Caption>
    <Caption style={CaptionStyle} offset={allTrials[1].offset} charttype = {allTrials[1].charttype}></Caption>
    <Caption style={CaptionStyle} offset={allTrials[2].offset} charttype = {allTrials[2].charttype}></Caption>
    <Caption style={CaptionStyle} offset={allTrials[3].offset} charttype = {allTrials[3].charttype}></Caption>
    <Caption style={CaptionStyle} offset={allTrials[4].offset} charttype = {allTrials[4].charttype}></Caption>
    <Caption style={CaptionStyle} offset={allTrials[5].offset} charttype = {allTrials[5].charttype}></Caption>
    <Caption style={CaptionStyle} offset={allTrials[6].offset} charttype = {allTrials[6].charttype}></Caption>
    <Caption style={CaptionStyle} offset={allTrials[7].offset} charttype = {allTrials[7].charttype}></Caption>
    <Caption style={CaptionStyle} offset={allTrials[8].offset} charttype = {allTrials[8].charttype}></Caption>
    <Caption style={CaptionStyle} offset={allTrials[9].offset} charttype = {allTrials[9].charttype}></Caption>
    <Caption style={CaptionStyle} offset={allTrials[10].offset} charttype = {allTrials[10].charttype}></Caption>
    <Caption style={CaptionStyle} offset={allTrials[11].offset} charttype = {allTrials[11].charttype}></Caption>
    <Caption style={CaptionStyle} offset={allTrials[12].offset} charttype = {allTrials[12].charttype}></Caption>
    <Caption style={CaptionStyle} offset={allTrials[13].offset} charttype = {allTrials[13].charttype}></Caption>
    <Caption style={CaptionStyle} offset={allTrials[14].offset} charttype = {allTrials[14].charttype}></Caption>
    <Caption style={CaptionStyle} offset={allTrials[15].offset} charttype = {allTrials[15].charttype}></Caption>
    <Caption style={CaptionStyle} offset={allTrials[16].offset} charttype = {allTrials[16].charttype}></Caption>
    <Caption style={CaptionStyle} offset={allTrials[17].offset} charttype = {allTrials[17].charttype}></Caption>
    <Caption style={CaptionStyle} offset={allTrials[18].offset} charttype = {allTrials[18].charttype}></Caption>
    <Caption style={CaptionStyle} offset={allTrials[19].offset} charttype = {allTrials[19].charttype}></Caption>
</div>

<div style = {mainStyle} align="center">
    <Confidence data={allTrials}></Confidence>
</div>


<div align="center" style={donutStyle}>
    <Donut correct={switchDonut(allTrials,"barchart")} total={numTrial} charttype="barchart"></Donut>
    <Donut correct={switchDonut(allTrials,"bubblechart")} total={numTrial} charttype={"bubblechart"}></Donut>
    <Donut correct={switchDonut(allTrials,"piechart")} total={numTrial} charttype={"piechart"}></Donut>
    <Donut correct={switchDonut(allTrials,"stackbarchart")} total={numTrial} charttype={"stackbarchart"}></Donut>
</div>
<div>
<p>Hurray, you did a good job!</p>
<p>Now, try hitting 80% correct on all graph types. This will consolidate your data visual literacy skills.</p>


</div>
</div>
)

