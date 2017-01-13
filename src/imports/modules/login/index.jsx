import React, { PropTypes } from 'react'
import { Button, Form, Icon, Input } from 'antd'
import { browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor'

const FormItem = Form.Item

export default Form.create()(class Login extends React.Component {
  static propTypes = {
    form: PropTypes.object,
  }

  getStyles() {
    const { innerHeight } = window
    return {
      title: {
        fontSize: '60px',
        lineHeight: 1.33,
      },
      body: {
        backgroundColor: '#1e9a82',
        backgroundSize: 'cover',
        height: innerHeight,
        minHeight: innerHeight,
        paddingTop: (innerHeight - 550) / 2,
        margin: 'auto',
        color: '#ffffff',
        textAlign: 'center',
        fontFamily: 'STHeitiSC',
      },
      footer: {
        textAlign: 'center',
      },
      content: {
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '550px',
        width: '240px',
      },
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, { username, password }) => {
      if (!err) {
        Meteor.loginWithPassword(username, password, (error) => {
          if (!error) browserHistory.push('/')
        })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const styles = this.getStyles()
    return (
      <Form style={styles.body} className="login-form">
        <div style={styles.content}>
          <div style={styles.title}>
            WatchDog
          </div>
          <div style={{ marginTop: '10px' }}>
            <FormItem>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入您的手机号!' }],
              })(
                <Input addonBefore={<Icon type="phone" />} placeholder="手机号" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input addonBefore={<Icon type="lock" />} type="password" placeholder="密码" />
              )}
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={this.handleSubmit}
                style={{ width: '100%', backgroundColor: '#00acc2' }}
              >
                登录
              </Button>
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={() => browserHistory.push('/register')}
                style={{ width: '100%', backgroundColor: '#00acc2' }}
              >
                注册
              </Button>
            </FormItem>
            <div style={styles.footer}>
              Powered by WatchDog, 2017
            </div>
          </div>
        </div>
      </Form>
    )
  }
})
