import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';

import PropTypes from 'prop-types'
import Caption from './components/Caption'

//chartSwitcher(cmQuestion) {
//    const { offset, charttype } = cmQuestion;
//    return <Caption offset = {offset}
//                    charttype = {charttype}/>;
//}

export const Feedback = () => (
<div padding="20pt">
    <Caption offset="50" charttype = "barchart"></Caption>
    <Caption offset="50" charttype = "bubblechart"></Caption>
    <Caption offset="50" charttype = "stackbarchart"></Caption>
    <Caption offset="50" charttype = "piechart"></Caption>
    </div>
)

