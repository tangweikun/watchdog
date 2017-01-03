import React, { Component } from 'react'
import DemoRedux from '../demo-redux/containers'

export default class App extends Component {
	render() {
		return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <DemoRedux />
      </div>
		)
	}
}
