import React from 'react'
import { Row } from 'simple-flexbox'
import { createUseStyles, useTheme } from 'react-jss'
import CardComponent from './CardComponent'

const useStyles = createUseStyles((theme) => ({
    itemTitle: {
        ...theme.typography.itemTitle,
        color: theme.color.veryDarkGrayishBlue,
    },
    itemValue: {
        color: theme.color.grayishBlue2,
    },
}))

function Unresolved({ containerStyles }) {
    const theme = useTheme()
    const classes = useStyles({ theme })

    function renderStat(title, value) {
        return (
            <Row horizontal='space-between' vertical='center'>
                <span className={classes.itemTitle}>{title}</span>
                <span
                    className={[classes.itemTitle, classes.itemValue].join(' ')}
                >
                    {value}
                </span>
            </Row>
        )
    }

    return (
        <CardComponent
            containerStyles={containerStyles}
            title='All Equity Transactions'
            link='View details'
            subtitle='Symbol:'
            subtitleTwo='rate'
            items={[
                renderStat('RELIANCE', '29,307'),
                renderStat('HCLTECH', '14,046'),
                renderStat('RELIANCE', '24,415'),
                renderStat('BANKNIFTY', '27,333'),
                renderStat('BANKNIFTY', '- 24,863'),
                renderStat('WIPRO', '581,600'),
                renderStat('WIPRO', '- 559,450'),
                renderStat('RELIANCE', '23,377'),
            ]}
        />
    )
}

export default Unresolved
