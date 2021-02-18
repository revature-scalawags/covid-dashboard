import React from 'react'
 
export const InfectionLabels = ()=> {
    const label =  {
            totalCaseLabel: "Total Cases:  Running Total",
            totalCaseTitle: "Regional Caseloads",
            lastDayLabel: "Last Daily Reported Cases (withing the last 24hrs)",
            dailyDeathsLabel: "Last Reported Daily fatalities (withing the last 24hrs)",
            lastDayTitle: "Daily Report",
            deltaCaseTitle: "Daily Change in Covid-19 Cases",
            deltaCaseLabel: "Daily Change (%)",
            totalDeathsLabel: "Total Deaths:  Running Total",
            totalDeathsTitle: "Regional Mortality",
            dailyDeathsTitle: "Daily Mortality Rate",
    }
    return label
}