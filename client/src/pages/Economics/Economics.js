import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from '../../components/Grid'
import { Loading } from '../../components/Loading/index'
import PieChart from '../../components/PieChart'
import BarChart from '../../components/BarChart'
import LineChart from '../../components/LineChart'
import { EconLabels } from '../../utils/Labels'
import API from '../../utils/API'


export default function Economics() {
    const [gdpChange, setGdpChange] = useState(null)
    const [highIslandRates, setHighIslandRates] = useState(null)
    const [highlandRates, setHighLandRates] = useState(null)
    const [sharedBorders, setSharedBorders] = useState(null)

    useEffect(() => {
        getEconStats()
    }, [])


    const getEconStats = async() => {
        const deltaGDP = await API.fetchEconStats("regional_change_gdp_percapita")
        setGdpChange(deltaGDP)

        const highIslandRates = await API.fetchEconStats("highest_island_rates")
        setHighIslandRates(highIslandRates)

        const highlands = await API.fetchEconStats("highest_land_rates")
        setHighLandRates(highlands)

        const sharedBorders = await API.fetchEconStats("shared_border_discrepency")
        setSharedBorders(sharedBorders)
    }

    const label = EconLabels()

    return (
        <Container>
            <Row>
            <Col size={'md-12'}> 
                <em><h2 style={{textAlign: "center"}}>Economic Response to Covid-19</h2></em>
                <Row> 
                        <Col size={'md-8'} classes={'offset-md-2'}>
                            {gdpChange === null ? <Loading /> : 
                                <BarChart 
                                    label={label.deltaGDPLabel} 
                                    data={gdpChange}
                                    title={label.deltaGDPTitle}
                                />
                            }
                        </Col>
                    </Row>
                    <Row> 
                    <Col size={'md-6'}>
                        {highIslandRates === null ? <Loading /> : 
                            <BarChart 
                                label={label.highIslandRatesLabel} 
                                data={highIslandRates}
                                title={label.highIslandRatesTitle}
                            />
                        }
                    </Col>
                    <Col size={'md-6'}>
                        {highlandRates === null ? <Loading /> : 
                            <LineChart 
                                label={label.highlandRatesLabel} 
                                data={highlandRates}
                                title={label.highlandRatesTitle}
                            />
                        }
                    </Col>
                </Row>
                    <Row> 
                        <Col size={'md-8'} classes={'offset-md-2'}>
                            {sharedBorders === null ? <Loading /> : 
                                <PieChart 
                                    label={label.borderCntyLabel} 
                                    data={highIslandRates}
                                    title={label.borderCntyTitle}
                                />
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}