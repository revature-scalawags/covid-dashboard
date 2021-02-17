import React, { useState, useEffect, Fragment } from 'react'
import { Container, Row, Col } from '../../components/Grid'
import PieChart from '../../components/PieChart'
import BarChart from '../../components/BarChart'
import API from '../../utils/API'
import { Loading } from '../../components/Loading/index'

export default function Main() {

    const [ infectionRates, setInfectionRates ] = useState('Infection Rates by Region since 01/01/2020'),
    [ wordsLabel1211to1225 ] = useState("Word Count:  12/11/20 - 12/25/20"),
    [ wordCountTitle ] = useState("Twitter Word Count"),
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
                    <BarChart 
                        label={wordsLabel1211to1225} 
                        data={wordCount1211to1225}
                        title={wordCountTitle}
                    />
                }
                {wordCount1211to1225 === null ? <Loading /> : 
                //    <Row>
                    // <Col size='md-6'>
                        <PieChart 
                            label={wordsLabel1211to1225} 
                            data={wordCount1211to1225}
                            title={wordCountTitle}
                        />
                    // </Col>
                    // <Col size='md-6'>
                    //     <PieContainer 
                    //         label={wordsLabel1211to1225} 
                    //         data={wordCount1211to1225}
                    //         title={wordCountTitle}
                    //     />
                    // </Col>
                // </Row>
                }
                {wordCount1211to1225 === null ? <Loading /> : 
                    <BarChart 
                        label={wordsLabel1211to1225} 
                        data={wordCount1211to1225}
                        title={wordCountTitle}
                    />
                }
                </Col>
           </Row>
        </Container>
    )
}