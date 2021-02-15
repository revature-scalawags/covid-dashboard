
import React from 'react'
import { Row, Col } from '../../components/Grid'

export default function About() {
    return (
        <Row>
            <Col size={'md-6'} classes={'offset-3'}>

                <div className={'flex-container about-flex about p-5'}>
                    <div className={"jumbotron border-primary pt-4"}>
                    <div className={"card-header jumb-header text-center"}>Covid-19 Data Dashboard</div>
                    <div className={"card-body"}>
                        <h3 className={"card-title"}>About this application</h3>
                        <hr/>
                        <p className={"card-text"}>This dashboard showcases some of the results produced by the Revature data batch 891, project #3.  In this project, data was collected from multiple sources, ranging in topics that focus on Covid-19, world economics and sociological data gathered from Twitter. The data was sourced from both streaming APIs services and structured data files.  Spark libraries were used for application development and data analytics to answer several questions relating to these datasets. This dashboard application was built showcases the results of three of the group's finding. </p>
                        <ul>
                            <li>
                            Infection Rates by Region since 01/01/2020
                            </li>
                            <li>
                            Rolling count of Most Used Twitter Hashtags
                            </li>
                            <li>
                            Rolling count of Most Used Twitter Hashtags
                            </li>
                        </ul>
                        <em><p><b>Note:</b>For more information on this project as a whole, please check out the <a href={'https://github.com/891-MehrabRahman-CovidAnalysis/covid-analysis-1'} target="_blank" rel="noreferrer noopener"><b>project repository</b></a>.</p></em>
                    </div>
                </div>   
                </div>
            </Col>
        </Row>
        )
}