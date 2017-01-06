import React from 'react'
import { Button } from 'antd'

export default class Weight extends React.Component {
	render() {
		const { changeValue, weight, saveWeight } = this.props
		return (
      <div>
        <input value={weight} onChange={(e) => changeValue(e.target.value)} />
        <Button type="primary" onClick={() => saveWeight()}>保存</Button>
        <p>{weight}</p>
      </div>
		)
	}
}
