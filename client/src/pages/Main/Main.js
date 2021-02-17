import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from '../../components/Grid'
import { Loading } from '../../components/Loading/index'
import PieChart from '../../components/PieChart'
import BarChart from '../../components/BarChart'
import LineChart from '../../components/LineChart'
import API from '../../utils/API'


export default function Main() {

    const [ infectionRates, setInfectionRates ] = useState('Infection Rates by Region since 01/01/2020'),
    [ wordTitle ] = useState("Twitter Word Count"),
    [ toneGauge, setToneGauge ] = useState('Gauge depicting tone of tweets since 12/11/2020'),
    [ wordLabel ] = useState("Word Count:  12/11/20 - 2/14/21"),
    [ wordCount, setWordCount ] = useState(null)

    useEffect(() => {
        getTweetWrdCount()
    },[])

    const getTweetWrdCount = async() => {
        const firstWrdBach = await API.getTweetWordCount('Dec_11-Dec_25'), 
        secondWrdBatch = await API.getTweetWordCount('Dec_26-Jan_05'),
        thirdWrdBatch = await API.getTweetWordCount('Feb_03-Feb_14'), 
        wordsSorted = [...firstWrdBach, ...secondWrdBatch, ...thirdWrdBatch].sort((a, b) => b.Count - a.Count)
        setWordCount(wordsSorted)
    }

    return (
        <Container>
            <Row>
                <Col size={'md-8'} classes={'offset-md-2'}>  
                {wordCount === null ? <Loading /> : 
                    <BarChart 
                        label={wordLabel} 
                        data={wordCount}
                        title={wordTitle}
                    />
                }
                {wordCount === null ? <Loading /> : 
                    <PieChart 
                        label={wordLabel} 
                        data={wordCount}
                        title={wordTitle}
                    />
                }
                {wordCount === null ? <Loading /> : 
                    <LineChart 
                        label={wordLabel} 
                        data={wordCount}
                        title={wordTitle}
                    />
                }
                </Col>
           </Row>
        </Container>
    )
}