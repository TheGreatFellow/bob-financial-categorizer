import React, { useState, useEffect } from 'react'
import DonutChart from 'react-donut-chart'
import '../css/dashboard.css'
function Graph(props) {
    // const [analytics, setAnalytics] = useState([])

    // const [credit, setCredit] = useState(0)
    // const [debit, setDebit] = useState(0)
    // const [cdRatio, setcdRatio] = useState(0)

    // const userAnalytics = acc

    // setAnalytics(userAnalytics.analytics)
    // setCredit(
    //     userAnalytics.analytics.overallAnalysis.monthlyAnalytics[0]
    //         .totalCreditAmount
    // )
    // setDebit(
    //     userAnalytics.analytics.overallAnalysis.monthlyAnalytics[0]
    //         .totalDebitAmount
    // )
    // setcdRatio(
    //     userAnalytics.analytics.overallAnalysis.monthlyAnalytics[0]
    //         .creditDebitRatio
    // )
    // window.sessionStorage.setItem(
    //     'emi',
    //     userAnalytics.analytics.completeCategoryWiseAnalysis
    //         .monthlyCategoryWiseAnalysis.EMIs[0].totalDebitAmount
    // )
    // window.sessionStorage.setItem(
    //     'salary',
    //     userAnalytics.analytics.completeCategoryWiseAnalysis
    //         .monthlyCategoryWiseAnalysis.Salary[0].totalCreditAmount
    // )

    // window.sessionStorage.setItem(
    //     'health',
    //     userAnalytics.analytics.completeCategoryWiseAnalysis
    //         .monthlyCategoryWiseAnalysis['Health Care'][0].totalDebitAmount
    // )
    // window.sessionStorage.setItem(
    //     'esop',
    //     userAnalytics.analytics.completeCategoryWiseAnalysis
    //         .monthlyCategoryWiseAnalysis['Insurance Premium'][0]
    //         .totalDebitAmount
    // )
    // window.sessionStorage.setItem(
    //     'petrol',
    //     userAnalytics.analytics.completeCategoryWiseAnalysis
    //         .monthlyCategoryWiseAnalysis.Transportation[0].totalDebitAmount
    // )
    // window.sessionStorage.setItem(
    //     'utility',
    //     userAnalytics.analytics.completeCategoryWiseAnalysis
    //         .monthlyCategoryWiseAnalysis.Utilities[0].totalDebitAmount
    // )
    return (
        <div className='gra'>
            <DonutChart width={690} data={props.data} />
        </div>
    )
}

export default Graph
