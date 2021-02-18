import React, { useState } from 'react'
import { Container, Row, Col } from '../../components/Grid';
import { GroupList } from '../../components/GroupList'

export default function Main() {

    const [ twitterAnalysis ] = useState('Infection Rates by Region since 01/01/2020'),
    [ infectionMortality ] = useState('Rolling count of Most Used Twitter Hashtags'),
    [ economicResponse ] = useState('Gauge depicting tone of tweets since 12/11/2020')

    return (
        <Container>
            <Row>
                <Col size={'md-8'} classes={'offset-md-2'}>  
                    <GroupList 
                        header={twitterAnalysis} 
                    />
                    <GroupList 
                        header={infectionMortality} 
                    />
                    <GroupList 
                        header={economicResponse} 
                    />
                </Col>
           </Row>
        </Container>
    )
}
