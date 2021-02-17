import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from '../../components/Grid'
import DataList from '../../components/DataList'
import API from '../../utils/API'
import { Loading } from '../../components/Loading/index'

export default function Main() {

    const [ infectionRates, setInfectionRates ] = useState('Infection Rates by Region since 01/01/2020'),
    [ tweetsTrending, setTweetsTrending ] = useState('Rolling count of Most Used Twitter Hashtags'),
    [ toneGauge, setToneGauge ] = useState('Gauge depicting tone of tweets since 12/11/2020'),
    [ wordCount1211to1225, setCount1211to1225 ] = useState(null)

    useEffect(() => {
        getTwitterCount()
    },[])

    const getTwitterCount = async() => {
        const wordCount = await API.getTweetWordCount()
        setCount1211to1225(wordCount)
    }

    return (
        <Container>
            <Row>
                <Col size={'md-8'} classes={'offset-md-2'}>  
                {wordCount1211to1225 === null ? <Loading /> : 
                    <DataList 
                        header={infectionRates} 
                        data={wordCount1211to1225}
                    />
                }
                {wordCount1211to1225 === null ? <Loading /> : 
                    <DataList 
                        header={tweetsTrending} 
                        data={wordCount1211to1225}
                    />
                }
                {wordCount1211to1225 === null ? <Loading /> : 
                    <DataList 
                        header={toneGauge} 
                        data={wordCount1211to1225}
                    />
                }
                </Col>
           </Row>
        </Container>
    )
}