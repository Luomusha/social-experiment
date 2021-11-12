import React, {useContext, useEffect, useState} from 'react'
import style from './style.module.scss'
import StoreContext from "../../../util/context";
import {observer} from "mobx-react";
import ReactECharts from 'echarts-for-react';

function Home() {
    const {averageMoney} = useContext(StoreContext)
    const [option, setOption] = useState({
        title: {
            text: '财富统计图'
        },
        tooltip: {},
        xAxis: {
            data: averageMoney.people.map(person => person.name),
            axisLabel: {
                fontSize: 10
            },
            inverse: true,
        },
        yAxis: {},
        series: [
            {
                realtimeSort: true,
                label: {
                    show: true,
                    position: 'right',
                    valueAnimation: true
                },
                name: '财富',
                type: 'bar',
                data: averageMoney.people.map(person => ({
                    value: person.money, itemStyle: {
                        color: person.target ? '#00ffff' : '#a90000'
                    }
                }))
            }
        ],
        animationDuration: 3000,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
    })
    useEffect(() => {
        setOption({
            title: {
                text: '财富统计图'
            },
            tooltip: {},
            xAxis: {
                data: averageMoney.people.map(person => person.name),
                inverse: true,
                axisLabel: {
                    fontSize: 10
                }
            },
            yAxis: {},
            series: [
                {
                    label: {
                        show: true,
                        position: 'top',
                        valueAnimation: true
                    },
                    realtimeSort: true,
                    name: '财富',
                    type: 'bar',
                    data: averageMoney.people.map(person => ({
                        value: person.money, itemStyle: {
                            color: person.target ? '#00ffff' : '#a90000'
                        }
                    }))
                }
            ],
            animationDuration: 300,
            animationDurationUpdate: 300,
            animationEasing: 'linear',
            animationEasingUpdate: 'linear'
        })
    }, [averageMoney.people])

    useEffect(() => {
        setInterval(() => {
            averageMoney.exchange()
        }, 1000)
    }, [])

    return <div className={style.Home}>

        <ReactECharts
            option={option}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
        />
        <button onClick={averageMoney.exchange}>step</button>
    </div>
}

export default observer(Home)
