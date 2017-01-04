import React from 'react'
import { browserHistory } from 'react-router'
import { Layout, Menu, Icon  } from 'antd'
import 'antd/dist/antd.css'

export default class MainLayout extends React.Component {
	render() {
		const { Header, Footer, Sider, Content } = Layout
		return (
      <Layout>
        <Header className="header" style={{ background: '#ffffff'}}>
          WatchDog
        </Header>
        <Sider
          width={200}
          height={600}
          style={{ background: '#ffffff'}}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['weight']}
            defaultOpenKeys={['sub1']}
            onSelect={({ key }) => browserHistory.push(key)}
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
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          {this.props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design
        </Footer>
      </Layout>
		)
	}
}
