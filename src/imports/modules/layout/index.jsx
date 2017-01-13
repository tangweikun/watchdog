import React from 'react'
import { browserHistory } from 'react-router'
import { Layout, Menu, Icon  } from 'antd'
import 'antd/dist/antd.css'

export default class MainLayout extends React.Component {
	render() {
		const { Header, Footer, Sider, Content } = Layout
		return (
      <Layout style={{ height: '100%' }}>
        <Header className="header" style={{ background: 'rgba(0, 0, 0, 0.87)', color: '#FFFFFF' }}>
          WatchDog
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
        {/* <Layout> */}
          <Content style={{ padding: '0 24px', height: '100%' }}>
            {this.props.children}
          </Content>
        {/* </Layout> */}
        <Footer style={{ textAlign: 'center', background: 'rgba(0, 0, 0, 0.37)' }}>
          Ant Design
        </Footer>
      </Layout>
		)
	}
}
