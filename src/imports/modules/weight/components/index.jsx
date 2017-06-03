import React from 'react'
import { Button } from 'antd'
import Chart from 'rc-echarts'

export default class Weight extends React.Component {
	componentWillMount() {
		this.props.getWeight()
	}

	render() {
		const createdAtList = []
		const dataList = []
		this.props.formData && this.props.formData.forEach(item => {
			createdAtList.push(item.createdAt)
			dataList.push(item.weight)
		})
		const options = {
			legend: {
				data: ['体重'],
			},
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				data: createdAtList,
			}],
			yAxis: [{
				type: 'value',
				axisLabel: {
					formatter: '{value} °C'
				}
			}],
		}

		return (
        <Chart {...options} onReady={this.ready}>
          <Chart.Line
            name="体重"
            data={dataList}
          />
        </Chart>
		)
	}
}
