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

function UnresolvedTicketsComponent({ containerStyles }) {
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
            title='Current Equity Holdings'
            link='View details'
            subtitle='Symbol:'
            subtitleTwo='rate'
            items={[
                renderStat('RELIANCE', '1,70,099'),
                renderStat('HCLTECH', '34,747'),
            ]}
        />
    )
}

export default UnresolvedTicketsComponent
