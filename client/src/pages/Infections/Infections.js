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
     [ dailyDeaths, setDailyDeaths ] = useState(null),
     [ totalRecoveries, setTotalRecoveries ] = useState(null),
     [ dailyRecoveries, setDailyRecoveries ] = useState(null),
     [ percentRecovery, setPercentRecovery ] = useState(null)
     

    useEffect(() => {
       getCases()
    }, [])


    const getCases = async() => {

    const tCases = await API.fetchCases('TotalCases')
    setTotalCases(tCases)

    const dayCases = await API.fetchCases('TodaysCases')
    setLastDaysCases(dayCases)

    const percentCases = await API.fetchCases('CasesPercentChange')
    setDailyPercentChange(percentCases)

    const tDeaths = await API.fetchCases('TotalDeaths')
    setTotalDeaths(tDeaths)

    const daysDeaths = await API.fetchCases('TodaysDeaths')
    setDailyDeaths(daysDeaths)

    const tRecoveries = await API.fetchCases('TotalRecoveries')
    setTotalRecoveries(tRecoveries)

    const dayRecoveries = await API.fetchCases('TodaysRecoveries')
    setDailyRecoveries(dayRecoveries)

    const pRecoveries = await API.fetchCases('RecoveriesPercentChange')
    setPercentRecovery(pRecoveries)
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
                    <Col size={'md-8'} classes={'offset-md-2'}>  
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
                <Row> 
                    <Col size='md-12'>
                        <Row>
                        <Col size={'md-6'}>
                            {totalRecoveries === null ? <Loading /> : 
                                <BarChart 
                                    label={label.totalRecoveryLabel} 
                                    data={totalRecoveries.filter(x => x.Region !== 'Total')}
                                    title={label.RecoveryTitle}
                                />
                            }
                        </Col>
                        <Col size={'md-6'}>
                            {dailyRecoveries === null ? <Loading /> : 
                                <BarChart 
                                    label={label.dailyRecoveryLabel} 
                                    data={dailyRecoveries.filter(x => x.Region !== 'Total')}
                                    title={label.RecoveryTitle}
                                />
                            }
                        </Col>
                        </Row>
                    </Col>
                        <Col size={'md-8'} classes={'offset-md-2'}>
                            {percentRecovery === null ? <Loading /> : 
                                <BarChart 
                                    label={label.percentRecovLabel} 
                                    data={percentRecovery.filter(x => x.Region !== 'Total')}
                                    title={label.RecoveryTitle}
                                />
                            }
                        </Col>
                    
                </Row>
            </Row>
        </Container>
    )
}