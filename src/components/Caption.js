import React, { Component } from 'react'
//import { scaleLinear } from 'd3-scale'
//import { select } from 'd3-selection'
//import * as d3 from 'd3';
//import { hierarchy, treemap } from 'd3-hierarchy';
import bar_icon from '../res/barchart_icon.png';
import bubble_icon from '../res/bubblechart_icon.png';
import pie_icon from '../res/piechart_icon.png';
import stack_icon from '../res/stackedbar_icon.png';


class Caption extends Component {
    constructor(props) {
    super(props);
    }

    render() {
        const { offset, charttype } = this.props;
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
            console.log("Error: chart_icon load")
        }
        return <figure className="figure" marginRight="50">
          <img src={img_src} className="figure-img img-fluid rounded"
            width="20px"
            height="20px"/>
          <p>&nbsp;{offset}%&nbsp;</p>
        </figure>
    }
}
export default Caption;