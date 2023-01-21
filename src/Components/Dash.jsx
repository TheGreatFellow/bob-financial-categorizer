import React from 'react'
import { Column, Row } from 'simple-flexbox'
import { createUseStyles } from 'react-jss'
import MiniCardComponent from './MiniCardComponent'
import CardComponent from './CardComponent'
import TodayTrendsComponent from './TodayTrendsComponent'
import UnresolvedTicketsComponent from './UnresolvedTicketsComponent'
import Unresolved from './Unresolved'
import Graph from './Graph'
const useStyles = createUseStyles({
    cardsContainer: {
        marginRight: 30,
        marginLeft: 30,
        marginTop: 30,
    },
    cardRow: {
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 0,
        },
    },
    miniCardContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none',
        },
    },
    todayTrends: {
        marginTop: 60,
        marginLeft: 30,
        marginRight: 60,
    },
    lastRow: {
        marginTop: 30,
    },
    unresolvedTickets: {
        marginRight: 30,
        marginLeft: 30,
        '@media (max-width: 1000px)': {
            marginRight: 0,
        },
    },
    tasks: {
        marginTop: 0,
        marginRight: 60,

        '@media (max-width: 1024px)': {
            marginTop: 30,
        },
    },
})

function DashboardComponent() {
    const classes = useStyles()
    return (
        <Column>
            <Row>
                <h2 className='dds'>
                    Welcome to your Dashboard, Mr. Ayan Bhanushali
                </h2>
            </Row>
            <Row
                className={classes.cardsContainer}
                wrap
                flexGrow={1}
                horizontal='space-between'
                breakpoints={{ 768: 'column' }}
            >
                <Row
                    className={classes.cardRow}
                    wrap
                    flexGrow={1}
                    horizontal='space-between'
                    breakpoints={{ 384: 'column' }}
                >
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Account Balance'
                        value='15,814'
                    />
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='PPF Balance'
                        value='2,04,949'
                    />
                </Row>
                <Row
                    className={classes.cardRow}
                    wrap
                    flexGrow={1}
                    horizontal='space-between'
                    breakpoints={{ 384: 'column' }}
                >
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Total Investment'
                        value='2,58,735'
                    />
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Salary'
                        value='5,80,726'
                    />
                </Row>
            </Row>
            <div className={classes.todayTrends}>
                <TodayTrendsComponent />
            </div>
            <Row
                horizontal='space-between'
                className={classes.lastRow}
                breakpoints={{ 1024: 'column' }}
            >
                <UnresolvedTicketsComponent
                    containerStyles={classes.unresolvedTickets}
                />
                <Unresolved containerStyles={classes.tasks} />
            </Row>
            <div className={classes.todayTrends}>
                <Graph
                    data={[
                        {
                            label: 'RELIANCE',
                            value: 170099,
                        },
                        {
                            label: 'HCLTECH',
                            value: 34747,
                        },
                    ]}
                />
            </div>
        </Column>
    )
}

export default DashboardComponent
