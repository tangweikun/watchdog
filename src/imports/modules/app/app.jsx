import React, { Component } from 'react'
import { Button } from 'antd'
import DemoRedux from '../demo-redux/containers'

export default class App extends Component {
	render() {
		return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <Button type="primary">Primary</Button>
        <DemoRedux />
      </div>
		)
	}
}
