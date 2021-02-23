import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from '../../components/Grid';
import { LinkList } from '../../components/LinkList';

// props for the landing page links
const groups = [
    {
    title: 'Twitter Analysis',
    description: "General Twitter findings",
    url: '/twitter'
    },
    {
    title: 'Infection & Mortality Analysis',
    description: 'Data findings for regional, Covid-19 infection and mortality rates.',
    url: '/infections'
    },
    {
    title: 'Economic Responses',
    description: 'Analytics for the regional, economic effects from Covid-19',
    url: '/economics'
    }
]

export default function Main() {

    const [ researchers ] = useState(groups)

    return (
        <Container>
            <Row>
                <Col size={'md-8'} classes={'offset-md-2'}>  
                    {researchers.map( group => 

                            <LinkList 
                                link={group} 
                            />
                        )}
                </Col>
           </Row>
        </Container>
    )
}