import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from '../../components/Grid'
import { Loading } from '../../components/Loading/index'
import PieChart from '../../components/PieChart'
import BarChart from '../../components/BarChart'
import LineChart from '../../components/LineChart'
import { TwitterLabels } from '../../utils/Labels'
import API from '../../utils/API'


export default function Twitter() {

 const [ totalSentiment, setTotalSentiment ] = useState(null),
    [ totalWordCount, setTotalWordCount ] = useState(null),
    [ firstSentiment, setFirstSentiment ] = useState(null),
    [ firstWordCount, setFirstWordCount ] = useState(null),
    [ secondSentiment, setSecondSentiment ] = useState(null),
    [ secondWordCount, setSecondWordCount ] = useState(null),
    [ thirdSentiment, setThirdSentiment ] = useState(null),
    [ thirdWordCount, setThirdWordCount ] = useState(null),
    [ TotalHashtagCount, setTotalHashtagCount ] = useState(null),
    [ firstHashtagCount, setFirstHashtagCount ] = useState(null),
    [ secondHashtagCount, setSecondHashtagCount ] = useState(null),
    [ thirdHashtagCount, setThirdHashtagCount ] = useState(null),
    [ totalEmojiData, setTotalEmojiData ] = useState(null)

    useEffect(() => {
        getTweetWrdCount()
        getHashtagCount()
        getSentiment()
        getEmojiNumbers()
    },[])

    const getTweetWrdCount = async() => {
        const firstBatch = await API.fetchTweetWordCount('Dec_11-Dec_25')
        setFirstWordCount(firstBatch)

        const secondBatch = await API.fetchTweetWordCount('Dec_26-Jan_05')
        setSecondWordCount(secondBatch)
        
        const thirdBatch = await API.fetchTweetWordCount('Feb_03-Feb_14')
        setThirdWordCount(thirdBatch)
        
        const fullSortedBatch = [firstBatch, ...secondBatch, ...thirdBatch].sort((a, b) => b.Count - a.Count),
            fullyGroupedAndSummed = grpByWrdsAndSum(fullSortedBatch)

        setTotalWordCount(fullyGroupedAndSummed)
    },

    getHashtagCount = async() => {
        const firstBatch = await API.fetchHashTagCount('Dec_11-Dec_25')
        setFirstHashtagCount(firstBatch)

        const secondBatch = await API.fetchHashTagCount('Dec_26-Jan_05')
        setSecondHashtagCount(secondBatch)
        
        const thirdBatch = await API.fetchHashTagCount('Feb_03-Feb_14')
        setThirdHashtagCount(thirdBatch)
        
        const fullSortedBatch = [firstBatch, ...secondBatch, ...thirdBatch].sort((a, b) => b.Count - a.Count),
            fullyGroupedAndSummed = grpByHashtagsAndSum(fullSortedBatch)

        setTotalHashtagCount(fullyGroupedAndSummed)
    }, 

    getEmojiNumbers = async() => {
        const firstBatch = await API.fetchEmojiNumbers('Dec_11-Dec_25')

        const secondBatch = await API.fetchEmojiNumbers('Dec_26-Jan_05')
        
        const thirdBatch = await API.fetchEmojiNumbers('Feb_03-Feb_14')
        
        const fullSortedBatch = [firstBatch, ...secondBatch, ...thirdBatch].sort((a, b) => b.Count - a.Count),
            fullyGroupedAndSummed = grpByEmojisAndSum(fullSortedBatch)   

        setTotalEmojiData(fullyGroupedAndSummed)
    }, 

    getSentiment = async() => {
        const firstBatch = await API.fetchTweetSentiment('Dec_11-Dec_25')
        setFirstSentiment(firstBatch)

        const secondBatch = await API.fetchTweetSentiment('Dec_26-Jan_05')
        setSecondSentiment(secondBatch)
        
        const thirdBatch = await API.fetchTweetSentiment('Feb_03-Feb_14')
        setThirdSentiment(thirdBatch)

        setTotalSentiment(firstBatch, ...secondBatch, ...thirdBatch)
    }, 

    grpByWrdsAndSum = arr => {
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

    grpByHashtagsAndSum = arr => {
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

    grpByEmojisAndSum = arr => {
        const result = []

        arr.reduce((res, value) => {
            if (!res[value.Emoji]) {
                res[value.Emoji] = { Emoji: value.Emoji, Count: 0 };
                result.push(res[value.Emoji])
            }
            res[value.Emoji].Count += value.Count;
            return res;
            }, {});

        return result
    }


    const label = TwitterLabels()

    return (
        <Container>
            <Row>
                <Col size={'md-12'}> 
                <em><h2 style={{textAlign: "center"}}>Social Media Analytics</h2></em>
                <Row> 
                    <Col size={'md-6'}>
                        {totalWordCount === null ? <Loading /> : 
                            <PieChart 
                                label={label.totalWordLabel} 
                                data={totalWordCount}
                                title={label.wordTitle}
                            />
                        }
                    </Col>
                    <Col size={'md-6'}>
                        {TotalHashtagCount === null ? <Loading /> : 
                            <PieChart 
                                label={label.totalHashtagLabel} 
                                data={TotalHashtagCount}
                                title={label.hashTitle}
                            />
                        }
                    </Col>
                </Row>
                <Row>
                    <Col size={'md-8'} classes={'offset-md-2'}>  
                        {thirdSentiment === null ? <Loading /> : 
                            <BarChart 
                                label={label.thirdSentimentLabel} 
                                data={thirdSentiment}
                                title={label.sentimentTitle}
                            />
                        }
                    </Col> 
                </Row>
                <Row>
                    <Col  ol size={'md-8'} classes={'offset-md-2'}>  
                        {totalEmojiData === null ? <Loading /> : 
                            <PieChart 
                                label={label.totalEmojiLabel} 
                                data={totalEmojiData}
                                title={label.emojiTitle}
                                hasLegend={true}
                            />
                        }
                    </Col> 
                </Row>
                <Row>
                    <Col  ol size={'md-6'}>  
                        {thirdWordCount === null ? <Loading /> : 
                            <BarChart 
                                label={label.thirdWordLabel} 
                                data={thirdWordCount}
                                title={label.wordTitle}
                            />
                        }
                    </Col> 
                    <Col  ol size={'md-6'}>  
                        {totalSentiment === null ? <Loading /> : 
                            <BarChart 
                                label={label.totalSentimentLabel} 
                                data={totalSentiment}
                                title={label.sentimentTitle}
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
                                    label={label.firstWordLabel} 
                                    data={firstWordCount}
                                    title={label.wordTitle}
                                />
                            }
                            </Col>
                            <Col size={'md-6'}>
                                {secondWordCount === null ? <Loading /> : 
                                    <BarChart 
                                        label={label.secondWordLabel} 
                                        data={secondWordCount}
                                        title={label.wordTitle}
                                    />
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col  ol size={'md-8'} classes={'offset-md-2'}>  
                        {thirdHashtagCount === null ? <Loading /> : 
                            <LineChart 
                                label={label.thirdHashtagLabel} 
                                data={thirdHashtagCount}
                                title={label.hashTitle}
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
                                    label={label.firstHashLabel} 
                                    data={firstHashtagCount}
                                    title={label.hashTitle}
                                />
                            }
                            </Col>
                            <Col size={'md-6'}>
                                {secondHashtagCount === null ? <Loading /> : 
                                    <BarChart 
                                        label={label.secondHashtagLabel} 
                                        data={secondHashtagCount}
                                        title={label.hashTitle}
                                    />
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col size={'md-12'}>
                        <Row>
                            <Col size={'md-6'}>
                            {firstSentiment === null ? <Loading /> : 
                                <BarChart 
                                    label={label.firstSentimentLabel} 
                                    data={firstSentiment}
                                    title={label.sentimentTitle}
                                />
                            }
                            </Col>
                            <Col size={'md-6'}>
                                {secondSentiment === null ? <Loading /> : 
                                    <BarChart 
                                        label={label.secondSentimentLabel} 
                                        data={secondSentiment}
                                        title={label.sentimentTitle}
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