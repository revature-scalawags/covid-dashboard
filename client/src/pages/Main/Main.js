import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from '../../components/Grid';
import DataList from '../../components/DataList'; 
import API from '../../utils/API';


export default function Main() {

    const [ infectionRates, setInfectionRates ] = useState('Infection Rates by Region since 01/01/2020'),
    [ tweetsTrending, setTweetsTrending ] = useState('Rolling count of Most Used Twitter Hashtags'),
    [ toneGauge, setToneGauge ] = useState('Gauge depicting tone of tweets since 12/11/2020'),
    [ wordCount1211to1225, setCount1211to1225 ] = useState()

    useEffect(() => {
        getTwitterCount()
    },[])
    const getTwitterCount = async() => {
        const wordCount = await API.getTweetWordCount()
        setCount1211to1225(wordCount)
        console.log(wordCount)
    }

    return (
        <Container>
            <Row>
                <Col size={'md-8'} classes={'offset-md-2'}>  
                    <DataList 
                        header={infectionRates} 
                    />
                    <DataList 
                        header={tweetsTrending} 
                    />
                    <DataList 
                        header={toneGauge} 
                    />
                </Col>
           </Row>
        </Container>
    )
}