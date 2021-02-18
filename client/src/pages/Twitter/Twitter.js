import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from '../../components/Grid'
import { Loading } from '../../components/Loading/index'
import PieChart from '../../components/PieChart'
import BarChart from '../../components/BarChart'
import LineChart from '../../components/LineChart'
import API from '../../utils/API'


export default function Twitter() {

    const [ wordTitle ] = useState("Twitter Word Count"),
    [ hashTitle ] = useState("Twitter Hashtag Count"),
    [ sentimentTitle ] = useState("Twitter: Public Sentiment"),
    [ firstSentimentLabel ] = useState("Sentiment:  12/11/20 - 12/25/20"),
    [ secondSentimentLabel ] = useState("Sentiment:  12/26/20 - 1/05/21"),
    [ thirdSentimentLabel ] = useState("Sentiment:  2/03/21 - 2/14/21"),
    [ totalSentimentLabel ] = useState("Sentiment:  Running Total"),
    [ firstWordLabel ] = useState("Word Count:  12/11/20 - 12/25/20"),
    [ secondWordLabel ] = useState("Word Count:  12/26/20 - 1/05/21"),
    [ secondHashtagLabel ] = useState("Hashtag Count:  12/26/20 - 1/05/21"),
    [ totalWordLabel ] = useState("Word Count:  Running Total"),
    [ totalHashtagLabel ] = useState("Hashtag Count:  Running Total"),
    [ thirdWordLabel ] = useState("Word Count:  2/03/21 - 2/14/21"),
    [ thirdHashtagLabel ] = useState("Hashtag Count:  2/03/21 - 2/14/21"),
    [ firstHashLabel ] = useState("Hashtag Count:  12/11/20 - 12/25/20"),
    [ totalSentiment, setTotalSentiment ] = useState(null),
    [ totalWordCount, setTotalWordCount ] = useState(null),
    [ firstSentiment, setFirstSentiment ] = useState(null),
    [ firstWordCount, setFirstWordCount ] = useState(null),
    [ secondSentiment, setSecondSentiment ] = useState(null),
    [ secondWordCount, setSecondWordCount ] = useState(null),
    [ thirdSetiment, setThirdSetiment ] = useState(null),
    [ thirdWordCount, setThirdWordCount ] = useState(null),
    [ TotalHashtagCount, setTotalHashtagCount ] = useState(null),
    [ firstHashtagCount, setFirstHashtagCount ] = useState(null),
    [ secondHashtagCount, setSecondHashtagCount ] = useState(null),
    [ thirdHashtagCount, setThirdHashtagCount ] = useState(null)

    useEffect(() => {
        getTweetWrdCount()
        getHashtagCount()
        getSentiment()
    },[])

    const getTweetWrdCount = async() => {
        const firstBach = await API.fetchTweetWordCount('Dec_11-Dec_25')
        setFirstWordCount(firstBach)

        const secondBatch = await API.fetchTweetWordCount('Dec_26-Jan_05')
        setSecondWordCount(secondBatch)
        
        const thirdBatch = await API.fetchTweetWordCount('Feb_03-Feb_14')
        setThirdWordCount(thirdBatch)
        
        const fullSortedBatch = [...firstBach, ...secondBatch, ...thirdBatch].sort((a, b) => b.Count - a.Count),
            fullyGroupedAndSummed = groupWrdsByAndSum(fullSortedBatch)

        setTotalWordCount(fullyGroupedAndSummed)
    },

    getHashtagCount = async() => {
        const firstBach = await API.fetchHashTagCount('Dec_11-Dec_25')
        setFirstHashtagCount(firstBach)

        const secondBatch = await API.fetchHashTagCount('Dec_26-Jan_05')
        setSecondHashtagCount(secondBatch)
        
        const thirdBatch = await API.fetchHashTagCount('Feb_03-Feb_14')
        setThirdHashtagCount(thirdBatch)
        
        const fullSortedBatch = [...firstBach, ...secondBatch, ...thirdBatch].sort((a, b) => b.Count - a.Count),
            fullyGroupedAndSummed = groupHashtagsByAndSum(fullSortedBatch)

        setTotalHashtagCount(fullyGroupedAndSummed)
    }, 

    getSentiment = async() => {
        const firstBach = await API.fetchTweetSentiment('Dec_11-Dec_25')
        setFirstSentiment(firstBach)

        const secondBatch = await API.fetchTweetSentiment('Dec_26-Jan_05')
        setSecondSentiment(secondBatch)
        
        const thirdBatch = await API.fetchTweetSentiment('Feb_03-Feb_14')
        setThirdSetiment(thirdBatch)
        
        const fullSortedBatch = [...firstBach, ...secondBatch, ...thirdBatch].sort((a, b) => b.Count - a.Count),
            fullyGroupedAndSummed = groupAndSumSentiment(fullSortedBatch)

        setTotalSentiment(fullyGroupedAndSummed)
    }, 

    groupWrdsByAndSum = arr => {
        const result = []

        arr.reduce((res, value) => {
            
            if (!res[value.Word]) {
                res[value.Word] = { Word: value.Word, Count: 0 };
                result.push(res[value.Word])
            }
            res[value.Word].Count += value.Count;
            return res;
            }, {});

        return result
    },

    groupHashtagsByAndSum = arr => {
        const result = []

        arr.reduce((res, value) => {
            if (!res[value.Hashtag]) {
                res[value.Hashtag] = { Hashtag: value.Hashtag, Count: 0 };
                result.push(res[value.Hashtag])
            }
            res[value.Hashtag].Count += value.Count;
            return res;
            }, {});

        return result
    },

    groupAndSumSentiment = arr => {
        const result = []
        
        arr.reduce((res, value) => {
            if (!res[value.Date]) {
                res[value.Date] = { Date: value.Date, PositiveSentimentPercentage: 0 };
                result.push(res[value.Date])
            }
            res[value.Date].PositiveSentimentPercentage += value.PositiveSentimentPercentage;
            return res;
            }, {});

        return result
    }

    return (
        <Container>
            <Row>
                <Col size={'md-12'}> 
                <em><h2 style={{textAlign: "center"}}>Twitter Data:</h2></em>
                <Row> 
                    <Col size={'md-4'}>
                        {totalWordCount === null ? <Loading /> : 
                            <PieChart 
                                label={totalWordLabel} 
                                data={totalWordCount}
                                title={wordTitle}
                            />
                        }
                    </Col>
                    <Col size={'md-4'}>
                        {TotalHashtagCount === null ? <Loading /> : 
                            <PieChart 
                                label={totalHashtagLabel} 
                                data={TotalHashtagCount}
                                title={hashTitle}
                            />
                        }
                    </Col>
                    <Col size={'md-4'}>
                        {totalSentiment === null ? <Loading /> : 
                            <PieChart 
                                label={totalSentimentLabel} 
                                data={totalSentiment}
                                title={sentimentTitle}
                            />
                        }
                    </Col>
                </Row>
                <Row>
                    <Col  ol size={'md-8'} classes={'offset-md-2'}>  
                        {thirdWordCount === null ? <Loading /> : 
                            <BarChart 
                                label={thirdWordLabel} 
                                data={thirdWordCount}
                                title={wordTitle}
                            />
                        }
                    </Col> 
                </Row>
                <Row>
                    <Col size={'md-12'}>
                        <Row>
                            <Col size={'md-6'}>
                            {firstWordCount === null ? <Loading /> : 
                                <BarChart 
                                    label={firstWordLabel} 
                                    data={firstWordCount}
                                    title={wordTitle}
                                />
                            }
                            </Col>
                            <Col size={'md-6'}>
                                {secondWordCount === null ? <Loading /> : 
                                    <BarChart 
                                        label={secondWordLabel} 
                                        data={secondWordCount}
                                        title={wordTitle}
                                    />
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col  ol size={'md-8'} classes={'offset-md-2'}>  
                        {thirdHashtagCount === null ? <Loading /> : 
                            <BarChart 
                                label={thirdHashtagLabel} 
                                data={thirdHashtagCount}
                                title={hashTitle}
                            />
                        }
                    </Col> 
                </Row>
                <Row>
                    <Col size={'md-12'}>
                        <Row>
                            <Col size={'md-6'}>
                            {firstHashtagCount === null ? <Loading /> : 
                                <BarChart 
                                    label={firstHashLabel} 
                                    data={firstHashtagCount}
                                    title={hashTitle}
                                />
                            }
                            </Col>
                            <Col size={'md-6'}>
                                {secondHashtagCount === null ? <Loading /> : 
                                    <BarChart 
                                        label={secondHashtagLabel} 
                                        data={secondHashtagCount}
                                        title={hashTitle}
                                    />
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col  ol size={'md-8'} classes={'offset-md-2'}>  
                        {thirdSetiment === null ? <Loading /> : 
                            <BarChart 
                                label={thirdSentimentLabel} 
                                data={thirdSetiment}
                                title={sentimentTitle}
                            />
                        }
                    </Col> 
                </Row>
                <Row>
                    <Col size={'md-12'}>
                        <Row>
                            <Col size={'md-6'}>
                            {firstSentiment === null ? <Loading /> : 
                                <BarChart 
                                    label={firstSentimentLabel} 
                                    data={firstSentiment}
                                    title={sentimentTitle}
                                />
                            }
                            </Col>
                            <Col size={'md-6'}>
                                {secondSentiment === null ? <Loading /> : 
                                    <BarChart 
                                        label={secondSentimentLabel} 
                                        data={secondSentiment}
                                        title={sentimentTitle}
                                    />
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
           </Row>
        </Container>
    )
}