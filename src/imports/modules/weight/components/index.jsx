import React from 'react'
import { Button } from 'antd'
import Chart from 'rc-echarts'

export default class Weight extends React.Component {
	componentWillMount() {
		this.props.getWeight()
	}

	render() {
		console.log('---', this.props.formData)
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
		const { changeValue, weight, saveWeight } = this.props
		return (
      <div>
        <input value={weight} onChange={(e) => changeValue(e.target.value)} />
        <Button type="primary" onClick={() => saveWeight()}>保存</Button>
        <p>{weight}</p>
        <Chart {...options} onReady={this.ready}>
          <Chart.Line
            name="体重"
            data={dataList}/>
        </Chart>
      </div>
		)
	}
}
