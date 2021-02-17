import * as d3 from 'd3';
import { dsv } from 'd3';

export default {
    getTweetWordCount: () => d3.csv(`https://covid-analysis-p3-dashboard.s3.amazonaws.com/data/twitter-general/WordCountResultsFinal-Dec_11-Dec_25.csv`,
    data => data)
}