import React from 'react'
import { browserHistory, withRouter } from 'react-router'
import { Layout, Menu, Icon, Modal  } from 'antd'
import { Meteor } from 'meteor/meteor'
import 'antd/dist/antd.css'

class MainLayout extends React.Component {
	constructor(props) {
		super(props)
		this.state = { visible: false, value: '' }
	}

	save(category, value) {
		Meteor.call(`${category}.save`, value)
	}

	render() {
		const { Header, Footer, Sider, Content } = Layout
		const category = this.props.location.pathname
		return (
      <Layout style={{ height: '100%' }}>
        <Header className="header" style={{ background: 'rgba(0, 0, 0, 0.87)', color: '#FFFFFF' }}>
          WatchDog
          <Icon style={{ float: 'right', marginTop: '25px', cursor: 'pointer' }} type="plus" onClick={() => this.setState({ visible: true })} />
        </Header>
        <Sider
          width={200}
          height='100%'
          style={{ background: 'rgba(0, 0, 0, 0.67)' }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['weight']}
            defaultOpenKeys={['sub1']}
            onSelect={({ key }) => browserHistory.push(key)}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.17)', color: '#e1ffff' }}
          >
            <Menu.Item key="weight">
              <Icon type="user" />
              <span className="nav-text">体重</span>
            </Menu.Item>
            <Menu.Item key="push-up">
              <Icon type="user" />
              <span className="nav-text">俯卧撑</span>
            </Menu.Item>
            <Menu.Item key="sleep">
              <Icon type="user" />
              <span className="nav-text">睡眠</span>
            </Menu.Item>
            <Menu.Item key="income">
              <Icon type="user" />
              <span className="nav-text">收入</span>
            </Menu.Item>
            <Menu.Item key="expend">
              <Icon type="user" />
              <span className="nav-text">支出</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', height: '100%' }}>
          <Modal
            title={category}
            visible={this.state.visible}
            okText="保存"
            cancelText="取消"
            onCancel={() => this.setState({ visible: false })}
            onOk={() => {
	           this.setState({ visible: false })
	           this.save(category, this.state.value)
}}
          >
            <input value={this.state.value} onChange={e => this.setState({ value: e.target.value })} />
          </Modal>
          {this.props.children}
        </Content>
        <Footer style={{ textAlign: 'center', background: 'rgba(0, 0, 0, 0.37)' }}>
          Ant Design
        </Footer>
      </Layout>
		)
	}
}

export default withRouter(MainLayout)
