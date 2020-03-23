import React, { Component } from 'react';
import checkmark from '../res/correct.png';
import crossmark from '../res/incorrect.png';
import {Bar} from 'react-chartjs-2';

// # Arithmetic Mean
//
// `mctad.arithmeticMean()` accepts an Array of Numbers and returns their average as a Number.
// It is aliased by `mctad.mean()`.
//
// More at the [Wikipedia article](http://en.wikipedia.org/wiki/Mean#Arithmetic_mean_.28AM.29).

//function arithmeticMean(data) {
//  // The arithmetic mean is undefined if the data is not in an Array of 1 or more elements.
//  if (!Array.isArray(data) || data.length === 0) { return undefined; }
//
//  return this.sum(data)/data.length;
//
//};
var t_distribution_table = {
  1: { 0.50: 0.0, 0.60: 0.325, 0.75: 1.000, 0.80: 1.376, 0.85: 1.963, 0.90: 3.078, 0.95: 6.314, 0.975: 12.71, 0.99: 31.82, 0.995: 63.66, 0.9975: 127.3, 0.999: 318.3, 0.9995: 636.6 },
  2: { 0.50: 0.0, 0.60: 0.289, 0.75: 0.816, 0.80: 1.061, 0.85: 1.386, 0.90: 1.886, 0.95: 2.920, 0.975: 4.303, 0.99: 6.965, 0.995: 9.925, 0.9975: 14.09, 0.999: 22.33, 0.9995: 31.60 },
  3: { 0.50: 0.0, 0.60: 0.277, 0.75: 0.765, 0.80: 0.978, 0.85: 1.250, 0.90: 1.638, 0.95: 2.353, 0.975: 3.182, 0.99: 4.541, 0.995: 5.841, 0.9975: 7.453, 0.999: 10.21, 0.9995: 12.92 },
  4: { 0.50: 0.0, 0.60: 0.271, 0.75: 0.741, 0.80: 0.941, 0.85: 1.190, 0.90: 1.533, 0.95: 2.132, 0.975: 2.776, 0.99: 3.747, 0.995: 4.604, 0.9975: 5.598, 0.999: 7.173, 0.9995: 8.610 },
  5: { 0.50: 0.0, 0.60: 0.267, 0.75: 0.727, 0.80: 0.920, 0.85: 1.156, 0.90: 1.476, 0.95: 2.015, 0.975: 2.571, 0.99: 3.365, 0.995: 4.032, 0.9975: 4.773, 0.999: 5.893, 0.9995: 6.869 },
  6: { 0.50: 0.0, 0.60: 0.265, 0.75: 0.718, 0.80: 0.906, 0.85: 1.134, 0.90: 1.440, 0.95: 1.943, 0.975: 2.447, 0.99: 3.143, 0.995: 3.707, 0.9975: 4.317, 0.999: 5.208, 0.9995: 5.959 },
  7: { 0.50: 0.0, 0.60: 0.263, 0.75: 0.711, 0.80: 0.896, 0.85: 1.119, 0.90: 1.415, 0.95: 1.895, 0.975: 2.365, 0.99: 2.998, 0.995: 3.499, 0.9975: 4.029, 0.999: 4.785, 0.9995: 5.408 },
  8: { 0.50: 0.0, 0.60: 0.262, 0.75: 0.706, 0.80: 0.889, 0.85: 1.108, 0.90: 1.397, 0.95: 1.860, 0.975: 2.306, 0.99: 2.896, 0.995: 3.355, 0.9975: 3.833, 0.999: 4.501, 0.9995: 5.041 },
  9: { 0.50: 0.0, 0.60: 0.261, 0.75: 0.703, 0.80: 0.883, 0.85: 1.100, 0.90: 1.383, 0.95: 1.833, 0.975: 2.262, 0.99: 2.821, 0.995: 3.250, 0.9975: 3.690, 0.999: 4.297, 0.9995: 4.781 },
  10: { 0.50: 0.0, 0.60: 0.260, 0.75: 0.700, 0.80: 0.879, 0.85: 1.093, 0.90: 1.372, 0.95: 1.812, 0.975: 2.228, 0.99: 2.764, 0.995: 3.169, 0.9975: 3.581, 0.999: 4.144, 0.9995: 4.587 },
  11: { 0.50: 0.0, 0.60: 0.260, 0.75: 0.697, 0.80: 0.876, 0.85: 1.088, 0.90: 1.363, 0.95: 1.796, 0.975: 2.201, 0.99: 2.718, 0.995: 3.106, 0.9975: 3.497, 0.999: 4.025, 0.9995: 4.437 },
  12: { 0.50: 0.0, 0.60: 0.259, 0.75: 0.695, 0.80: 0.873, 0.85: 1.083, 0.90: 1.356, 0.95: 1.782, 0.975: 2.179, 0.99: 2.681, 0.995: 3.055, 0.9975: 3.428, 0.999: 3.930, 0.9995: 4.318 },
  13: { 0.50: 0.0, 0.60: 0.259, 0.75: 0.694, 0.80: 0.870, 0.85: 1.079, 0.90: 1.350, 0.95: 1.771, 0.975: 2.160, 0.99: 2.650, 0.995: 3.012, 0.9975: 3.372, 0.999: 3.852, 0.9995: 4.221 },
  14: { 0.50: 0.0, 0.60: 0.258, 0.75: 0.692, 0.80: 0.868, 0.85: 1.076, 0.90: 1.345, 0.95: 1.761, 0.975: 2.145, 0.99: 2.624, 0.995: 2.977, 0.9975: 3.326, 0.999: 3.787, 0.9995: 4.140 },
  15: { 0.50: 0.0, 0.60: 0.258, 0.75: 0.691, 0.80: 0.866, 0.85: 1.074, 0.90: 1.341, 0.95: 1.753, 0.975: 2.131, 0.99: 2.602, 0.995: 2.947, 0.9975: 3.286, 0.999: 3.733, 0.9995: 4.073 },
  16: { 0.50: 0.0, 0.60: 0.258, 0.75: 0.690, 0.80: 0.865, 0.85: 1.071, 0.90: 1.337, 0.95: 1.746, 0.975: 2.120, 0.99: 2.583, 0.995: 2.921, 0.9975: 3.252, 0.999: 3.686, 0.9995: 4.015 },
  17: { 0.50: 0.0, 0.60: 0.257, 0.75: 0.689, 0.80: 0.863, 0.85: 1.069, 0.90: 1.333, 0.95: 1.740, 0.975: 2.110, 0.99: 2.567, 0.995: 2.898, 0.9975: 3.222, 0.999: 3.646, 0.9995: 3.965 },
  18: { 0.50: 0.0, 0.60: 0.257, 0.75: 0.688, 0.80: 0.862, 0.85: 1.067, 0.90: 1.330, 0.95: 1.734, 0.975: 2.101, 0.99: 2.552, 0.995: 2.878, 0.9975: 3.197, 0.999: 3.610, 0.9995: 3.922 },
  19: { 0.50: 0.0, 0.60: 0.257, 0.75: 0.688, 0.80: 0.861, 0.85: 1.066, 0.90: 1.328, 0.95: 1.729, 0.975: 2.093, 0.99: 2.539, 0.995: 2.861, 0.9975: 3.174, 0.999: 3.579, 0.9995: 3.883 },
  20: { 0.50: 0.0, 0.60: 0.257, 0.75: 0.687, 0.80: 0.860, 0.85: 1.064, 0.90: 1.325, 0.95: 1.725, 0.975: 2.086, 0.99: 2.528, 0.995: 2.845, 0.9975: 3.153, 0.999: 3.552, 0.9995: 3.850 },
  21: { 0.50: 0.0, 0.60: 0.257, 0.75: 0.686, 0.80: 0.859, 0.85: 1.063, 0.90: 1.323, 0.95: 1.721, 0.975: 2.080, 0.99: 2.518, 0.995: 2.831, 0.9975: 3.135, 0.999: 3.527, 0.9995: 3.819 },
  22: { 0.50: 0.0, 0.60: 0.256, 0.75: 0.686, 0.80: 0.858, 0.85: 1.061, 0.90: 1.321, 0.95: 1.717, 0.975: 2.074, 0.99: 2.508, 0.995: 2.819, 0.9975: 3.119, 0.999: 3.505, 0.9995: 3.792 },
  23: { 0.50: 0.0, 0.60: 0.256, 0.75: 0.685, 0.80: 0.858, 0.85: 1.060, 0.90: 1.319, 0.95: 1.714, 0.975: 2.069, 0.99: 2.500, 0.995: 2.807, 0.9975: 3.104, 0.999: 3.485, 0.9995: 3.767 },
  24: { 0.50: 0.0, 0.60: 0.256, 0.75: 0.685, 0.80: 0.857, 0.85: 1.059, 0.90: 1.318, 0.95: 1.711, 0.975: 2.064, 0.99: 2.492, 0.995: 2.797, 0.9975: 3.091, 0.999: 3.467, 0.9995: 3.745 },
  25: { 0.50: 0.0, 0.60: 0.256, 0.75: 0.684, 0.80: 0.856, 0.85: 1.058, 0.90: 1.316, 0.95: 1.708, 0.975: 2.060, 0.99: 2.485, 0.995: 2.787, 0.9975: 3.078, 0.999: 3.450, 0.9995: 3.725 },
  26: { 0.50: 0.0, 0.60: 0.256, 0.75: 0.684, 0.80: 0.856, 0.85: 1.058, 0.90: 1.315, 0.95: 1.706, 0.975: 2.056, 0.99: 2.479, 0.995: 2.779, 0.9975: 3.067, 0.999: 3.435, 0.9995: 3.707 },
  27: { 0.50: 0.0, 0.60: 0.256, 0.75: 0.684, 0.80: 0.855, 0.85: 1.057, 0.90: 1.314, 0.95: 1.703, 0.975: 2.052, 0.99: 2.473, 0.995: 2.771, 0.9975: 3.057, 0.999: 3.421, 0.9995: 3.690 },
  28: { 0.50: 0.0, 0.60: 0.256, 0.75: 0.683, 0.80: 0.855, 0.85: 1.056, 0.90: 1.313, 0.95: 1.701, 0.975: 2.048, 0.99: 2.467, 0.995: 2.763, 0.9975: 3.047, 0.999: 3.408, 0.9995: 3.674 },
  29: { 0.50: 0.0, 0.60: 0.256, 0.75: 0.683, 0.80: 0.854, 0.85: 1.055, 0.90: 1.311, 0.95: 1.699, 0.975: 2.045, 0.99: 2.462, 0.995: 2.756, 0.9975: 3.038, 0.999: 3.396, 0.9995: 3.659 },
  30: { 0.50: 0.0, 0.60: 0.256, 0.75: 0.683, 0.80: 0.854, 0.85: 1.055, 0.90: 1.310, 0.95: 1.697, 0.975: 2.042, 0.99: 2.457, 0.995: 2.750, 0.9975: 3.030, 0.999: 3.385, 0.9995: 3.646 },
  40: { 0.50: 0.0, 0.60: 0.255, 0.75: 0.681, 0.80: 0.851, 0.85: 1.050, 0.90: 1.303, 0.95: 1.684, 0.975: 2.021, 0.99: 2.423, 0.995: 2.704, 0.9975: 2.971, 0.999: 3.307, 0.9995: 3.551 },
  50: { 0.50: 0.0, 0.60: 0.255, 0.75: 0.679, 0.80: 0.849, 0.85: 1.047, 0.90: 1.299, 0.95: 1.676, 0.975: 2.009, 0.99: 2.403, 0.995: 2.678, 0.9975: 2.937, 0.999: 3.261, 0.9995: 3.496 },
  60: { 0.50: 0.0, 0.60: 0.254, 0.75: 0.679, 0.80: 0.848, 0.85: 1.045, 0.90: 1.296, 0.95: 1.671, 0.975: 2.000, 0.99: 2.390, 0.995: 2.660, 0.9975: 2.915, 0.999: 3.232, 0.9995: 3.460 },
  80: { 0.50: 0.0, 0.60: 0.254, 0.75: 0.678, 0.80: 0.846, 0.85: 1.043, 0.90: 1.292, 0.95: 1.664, 0.975: 1.990, 0.99: 2.374, 0.995: 2.639, 0.9975: 2.887, 0.999: 3.195, 0.9995: 3.416 },
  100: { 0.50: 0.0, 0.60: 0.254, 0.75: 0.677, 0.80: 0.845, 0.85: 1.042, 0.90: 1.290, 0.95: 1.660, 0.975: 1.984, 0.99: 2.364, 0.995: 2.626, 0.9975: 2.871, 0.999: 3.174, 0.9995: 3.390 },
  120: { 0.50: 0.0, 0.60: 0.254, 0.75: 0.677, 0.80: 0.845, 0.85: 1.041, 0.90: 1.289, 0.95: 1.658, 0.975: 1.980, 0.99: 2.358, 0.995: 2.617, 0.9975: 2.860, 0.999: 3.160, 0.9995: 3.373 }
};


function arithmeticMean(data) {
  // The arithmetic mean is undefined if the data is not in an Array of 1 or more elements.
  if (!Array.isArray(data) || data.length === 0) { return undefined; }

  return sum(data)/data.length;

};

function sum(data) {
  if (!Array.isArray(data) || data.length === 0 ) { return undefined; }

  // `sum` is a simple accumulator.
  var sum = 0.0;
  for (var i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
};

function isInteger(n) {
  return (/^-?\d+$/.test(n));
};

function confidenceIntervalOnTheMean(x_bar, s, n, α, type) {
  if (typeof x_bar !== 'number' || typeof s !== 'number' || !isInteger(n) || α <= 0.0 || α >= 1.0) { return undefined; }

  var σ_bar = s / Math.sqrt(n);

  // If the sample size is large, use Z Scores from the Standard Normal Distribution.
  if (n > 30) {
    // Return the upper confidence bound of a one-tailed confidence interval.
    if (typeof type !== 'undefined' && type.toLowerCase() === 'u') {
      return x_bar + get_z(1 - α) * σ_bar;
    } else {
      // Return the lower confidence bound of a one-tailed confidence interval.
      if (typeof type !== 'undefined' && type.toLowerCase() === 'l') {
        return x_bar - get_z(1 - α) * σ_bar;
      } else {
        // Return both bounds of a two-tailed confidence interval.
        return [
          x_bar - get_z(1 - α / 2) * σ_bar,
          x_bar + get_z(1 - α / 2) * σ_bar
        ];
      }
    }
  } else {
    // Otherwise, use Student's t distribution.
    // Return the upper confidence bound of a one-tailed confidence interval.
    if (typeof type !== 'undefined' && type.toLowerCase() === 'u') {
      return x_bar + t_distribution_table[n - 1][1 - α] * σ_bar;
    } else {
      // Return the lower confidence bound of a one-tailed confidence interval.
      if (typeof type !== 'undefined' && type.toLowerCase() === 'l') {
        return x_bar - t_distribution_table[n - 1][1 - α] * σ_bar;
      } else {
        // Return both bounds of a two-tailed confidence interval.
        return [
          x_bar - t_distribution_table[n - 1][1 - α / 2] * σ_bar,
          x_bar + t_distribution_table[n - 1][1 - α / 2] * σ_bar
        ];
      }
    }
  }
};

function get_z (p) {
  if (p <= 0.0 || p >= 1.0) { return undefined; }
  return Math.sqrt(2) * inverseErf(2 * p - 1);
};

function inverseErf(x) {
  var a = 0.147;
  return sign(x) * Math.sqrt(
    Math.sqrt(
      Math.pow((2 / (Math.PI * a) + (Math.log(1 - Math.pow(x, 2)) / 2)), 2) - Math.log(1 - Math.pow(x, 2)) / a
    ) - ((2 / (Math.PI * a)) + Math.log(1 - Math.pow(x, 2)) / 2)
  );
}

function sign(x) {
  if(isNaN(x)) {
    return NaN;
  } else if(x === 0) {
    return x;
  } else {
    return (x > 0 ? 1 : -1);
  }
};

function sampleStandardDeviation(data){
  if (!Array.isArray(data) || data.length === 0 ) { return null; }

  return Math.sqrt(sampleVariance(data));

};

function sampleVariance(data) {
  if (!Array.isArray(data) || data.length === 0 ) { return undefined; }

  var mean = 0.0, σ2 = 0.0, delta, n = 0, M2 = 0.0;
  for (var i = 0; i < data.length; i++) {
    n++;
    delta = data[i] - mean;
    mean += delta/n;
    M2 += delta * (data[i] - mean);
  }
  // Use [Bessel's correction](http://en.wikipedia.org/wiki/Bessel%27s_correction) since this is sample variance.
  σ2 = M2/(n - 1);
  return σ2;

};

class Confidence extends Component {
    constructor(props) {
    super(props);
    }

    render() {
        const { data } = this.props;
        var alpha = 0.5;
        var offsets = [];
        for (var i = 0; i < data.length; i++) {
            offsets.push(parseInt(data[i].offset));
        }
        var offsets_count = [0,0,0,0,0,0,0,0];
        for (var i = 0; i < offsets.length; i++) {
            var d = offsets[i]
            if(d>=-100 && d<-60){
            offsets_count[0] = offsets_count[0] + 1;}
            else if(d>=-60 && d<-20){
            offsets_count[1] = offsets_count[1] + 1;}
            else if(d>=-20 && d<-5){
            offsets_count[2] = offsets_count[2] + 1;}
            else if(d>=-5 && d<0){
            offsets_count[3] = offsets_count[3] + 1;}
            else if(d>=0 && d<5){
            offsets_count[4] = offsets_count[4] + 1;}
            else if(d>=5 && d<20){
            offsets_count[5] = offsets_count[5] + 1;}
            else if(d>=20 && d<60){
            offsets_count[6] = offsets_count[6] + 1;}
            else if(d>=60 && d<=100){
            offsets_count[7] = offsets_count[7] + 1;}
            else {
            console.log("offsets error");}

        }
        console.log("offsets:",offsets);
        var n = offsets.length;
        var x_bar = arithmeticMean(offsets);
        var s = sampleStandardDeviation(offsets);
        var confidence = confidenceIntervalOnTheMean(x_bar,s,n,alpha);
        console.log("offsets",offsets);
        console.log("offsets_count",offsets_count);
        const state = {
          labels: ['-100', '-60', '-20',
                   '-5', '0','5','20','60','100'],
          datasets: [
            {
              label: 'Rainfall',
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 1,
              data: offsets_count
            }
          ]
        };
        return <div className="col-md-4">
          <Bar
          data={state}
          width={100}
            height={50}
          options={{
            title:{
              display:true,
              text:'Offset Distribution',
              fontSize:20
            },
            legend:{
              display:false
            }
          }}
        />
        </div>
    }
}
export default Confidence;