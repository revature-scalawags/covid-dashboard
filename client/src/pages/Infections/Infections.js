import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from '../../components/Grid'
import { Loading } from '../../components/Loading/index'
import PieChart from '../../components/PieChart'
import BarChart from '../../components/BarChart'
import LineChart from '../../components/LineChart'
import { InfectionLabels } from '../../utils/Labels'
import API from '../../utils/API'


export default function Infections() {
    const [ totalCases, setTotalCases ] = useState(null),
     [ lastDaysCases, setLastDaysCases ] = useState(null),
     [ dailyPercentChange, setDailyPercentChange ] = useState(null),
     [ totalDeaths, setTotalDeaths ] = useState(null),
     [ dailyDeaths, setDailyDeaths ] = useState(null)
     

    useEffect(() => {
        getTotalCases()
        getLastDaysCases()
        getDeltaCases()
        getTotalDeaths()
        getDailyDeaths()
    }, [])


    const getTotalCases = async() => {
        const response = await API.fetchTotalCases('TotalCases')
        setTotalCases(response)
    },

    getLastDaysCases = async() => {
        const response = await API.fetchTotalCases('TodaysCases')
        setLastDaysCases(response)
    },

    getDeltaCases = async() => {
        const response = await API.fetchTotalCases('TodaysCases')
        setDailyPercentChange(response)
    },

    getTotalDeaths = async() => {
        const response = await API.fetchTotalCases('TotalDeaths')
        setTotalDeaths(response)
    },

    getDailyDeaths = async() => {
        const response = await API.fetchTotalCases('TodaysDeaths')
        setDailyDeaths(response)
    }

    const label = InfectionLabels()

    return (
        <Container >
            <Row >
                <Col size='md-12'>
                <em><h2 style={{textAlign: "center"}}>Infection and Mortality Rates:</h2></em>
                <Row> 
                    <Col size={'md-6'}>
                        {totalCases === null ? <Loading /> : 
                            <BarChart 
                                label={label.totalCaseLabel} 
                                data={totalCases.filter(x => x.Region !== 'Total')}
                                title={label.totalCaseTitle}
                            />
                        }
                    </Col>
                    <Col size={'md-6'}>
                        {lastDaysCases === null ? <Loading /> : 
                            <BarChart 
                                label={label.lastDayLabel} 
                                data={lastDaysCases.filter(x => x.Region !== 'Total')}
                                title={label.lastDayTitle}
                            />
                        }
                    </Col>
                </Row>
                <Row>
                    <Col  ol size={'md-8'} classes={'offset-md-2'}>  
                        {dailyPercentChange === null ? <Loading /> : 
                            <PieChart 
                                label={label.deltaCaseLabel} 
                                data={dailyPercentChange.filter(x => x.Region !== 'Total')}
                                title={label.deltaCaseTitle}
                                hasLegend={true}
                            />
                        }
                    </Col> 
                </Row>
                <Row> 
                    <Col size={'md-6'}>
                        {totalDeaths === null ? <Loading /> : 
                            <LineChart 
                                label={label.totalDeathsLabel} 
                                data={totalDeaths.filter(x => x.Region !== 'Total')}
                                title={label.totalDeathsTitle}
                            />
                        }
                    </Col>
                    <Col size={'md-6'}>
                        {dailyDeaths === null ? <Loading /> : 
                            <LineChart 
                                label={label.dailyDeathsLabel} 
                                data={dailyDeaths.filter(x => x.Region !== 'Total')}
                                title={label.dailyDeathsTitle}
                            />
                        }
                    </Col>
                </Row>
                </Col>
            </Row>
        </Container>
    )
}