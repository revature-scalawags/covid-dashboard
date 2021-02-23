import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from '../../components/Grid'
import { Loading } from '../../components/Loading' 
import DoubleAxisBarChart from '../../components/DoubleAxisBarChart'
import BarChart from '../../components/BarChart'
import LineChart from '../../components/LineChart'
import { EconLabels } from '../../utils/Labels'
import API from '../../utils/API'


export default function Economics() {
    const [gdpChange, setGdpChange] = useState(null)
    const [highIslandRates, setHighIslandRates] = useState(null)
    const [highLandRates, setHighLandRates] = useState(null)
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

        const sharedBorders = await API.fetchEconStats("shared_border_discrepency"),
            //Configure labeling for double axes chart.
            withLabeling = sharedBorders.map(obj => new Object({...obj, labels: `${obj.country_name}/${obj.border_country}`}))

        setSharedBorders(withLabeling)
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
                        <Col size={'md-12'} >
                            {sharedBorders === null ? <Loading /> : 
                                <DoubleAxisBarChart 
                                    label={label.borderCntyLabel} 
                                    data={sharedBorders.slice(0, 15)}
                                    title={label.borderCntyTitle}
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
                        {highLandRates === null ? <Loading /> : 
                            <LineChart 
                                label={label.highLandRatesLabel} 
                                data={highLandRates}
                                title={label.highLandRatesTitle}
                            />
                        }
                    </Col>
                </Row>
                    
                </Col>
            </Row>
        </Container>
    )
}