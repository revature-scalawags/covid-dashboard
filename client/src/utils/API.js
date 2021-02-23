import * as d3 from 'd3';

export default {
    fetchTweetWordCount: dateRange => d3.csv(`https://covid-analysis-p3-dashboard.s3.amazonaws.com/data/twitter-general/WordCountResultsFinal-${dateRange}.csv`,
    data => data),

    fetchHashTagCount: dateRange => d3.csv(`https://covid-analysis-p3-dashboard.s3.amazonaws.com/data/twitter-general/HashtagCountResultsFinal-${dateRange}.csv`,
    data => data),

    fetchEmojiNumbers: dateRange => d3.csv(`https://covid-analysis-p3-dashboard.s3.amazonaws.com/data/twitter-general/EmojiCountResultsFinal-${dateRange}.csv`,
    data => data),

    fetchTweetSentiment: dateRange => d3.csv(`https://covid-analysis-p3-dashboard.s3.amazonaws.com/data/twitter-general/SentimentResultsFinal-${dateRange}.csv`,
    data => data),

    fetchCases: src => d3.csv(`https://covid-analysis-p3-dashboard.s3.amazonaws.com/data/infection-mortality/${src}.csv`,
    data => data),

    fetchEconStats: src => d3.csv(`https://covid-analysis-p3-dashboard.s3.amazonaws.com/data/infection-gdp/${src}.csv`,
    data => data)
}