import * as d3 from 'd3';

export default {
    getTweetWordCount: dateRange => d3.csv(`https://covid-analysis-p3-dashboard.s3.amazonaws.com/data/twitter-general/WordCountResultsFinal-${dateRange}.csv`,
    data => data),

    getHashTagCount: dateRange => d3.csv(`https://covid-analysis-p3-dashboard.s3.amazonaws.com/data/twitter-general/HashtagCountResultsFinal-${dateRange}.csv`,
    data => data)
}