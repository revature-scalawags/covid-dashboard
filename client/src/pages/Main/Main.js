import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from '../../components/Grid'
import { Loading } from '../../components/Loading/index'
import PieChart from '../../components/PieChart'
import BarChart from '../../components/BarChart'
import LineChart from '../../components/LineChart'
import API from '../../utils/API'


export default function Main() {

    const [ wordTitle ] = useState("Twitter Word Count"),
    [ hashTitle ] = useState("Twitter Hashtag Count"),
    [ firstWordLabel ] = useState("Word Count:  12/11/20 - 12/25/20"),
    [ secondWordLabel ] = useState("Word Count:  12/26/20 - 1/05/21"),
    [ secondHashtagLabel ] = useState("Hashtag Count:  12/26/20 - 1/05/21"),
    [ totalWordLabel ] = useState("Word Count:  Running Total"),
    [ totalHashtagLabel ] = useState("Hashtag Count:  Running Total"),
    [ thirdWordLabel ] = useState("Word Count:  2/03/21 - 2/14/21"),
    [ thirdHastagLabel ] = useState("Hashtag Count:  2/03/21 - 2/14/21"),
    [ firstHashLabel ] = useState("Hashtag Count:  12/11/20 - 12/25/20"),
    [ totalWordCount, setTotalWordCount ] = useState(null),
    [ firstWordCount, setFirstWordCount ] = useState(null),
    [ secondWordCount, setSecondWordCount ] = useState(null),
    [ thirdWordCount, setThirdWordCount ] = useState(null),
    [ TotalHashtagCount, setTotalHashtagCount ] = useState(null),
    [ firstHashtagCount, setFirstHashtagCount ] = useState(null),
    [ secondHashtagCount, setSecondHashtagCount ] = useState(null),
    [ thirdHashtagCount, setThirdHashtagCount ] = useState(null)

    useEffect(() => {
        getTweetWrdCount()
        getHashtagCount()
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
    }

    return (
        <Container>
            <Row>
                <Col size={'md-8'} classes={'offset-md-2'}>  
                <em><h5 style={{textAlign: "center"}}>Twitter Data:</h5></em>
                {totalWordCount === null ? <Loading /> : 
                    <PieChart 
                        label={totalWordLabel} 
                        data={totalWordCount}
                        title={wordTitle}
                    />
                }
                {firstWordCount === null ? <Loading /> : 
                    <BarChart 
                        label={firstWordLabel} 
                        data={firstWordCount}
                        title={wordTitle}
                    />
                }
                {secondWordCount === null ? <Loading /> : 
                    <BarChart 
                        label={secondWordLabel} 
                        data={secondWordCount}
                        title={wordTitle}
                    />
                }
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
                <Col  ol size={'md-8'} classes={'offset-md-2'}>  
                {TotalHashtagCount === null ? <Loading /> : 
                    <PieChart 
                        label={totalHashtagLabel} 
                        data={TotalHashtagCount}
                        title={hashTitle}
                    />
                }
                {firstHashtagCount === null ? <Loading /> : 
                    <BarChart 
                        label={firstHashLabel} 
                        data={firstHashtagCount}
                        title={hashTitle}
                    />
                }
                {secondHashtagCount === null ? <Loading /> : 
                    <BarChart 
                        label={secondHashtagLabel} 
                        data={secondHashtagCount}
                        title={hashTitle}
                    />
                }
                {thirdHashtagCount === null ? <Loading /> : 
                    <BarChart 
                        label={thirdHastagLabel} 
                        data={thirdHashtagCount}
                        title={hashTitle}
                    />
                }
                </Col>
           </Row>
        </Container>
    )
}