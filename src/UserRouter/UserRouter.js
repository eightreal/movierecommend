import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { loginUser } from './cooike' // 引入
import SignUp from './loginPage/Sign';
import Login from './loginPage/Login';// 导入页面


const browserHistory = createBrowserHistory() // 路由分发

class BasicRoute extends Component {
  render () {
    const userInfo = loginUser()
    return (
      <Router history={browserHistory}>
        <Switch>
          {
            !loginUser()
              ? <Route exact path="/Login">
                  <Login />
                </Route>
              : (
                <>
                <Route path="/Student" component={StudentLayout} />
                <Route path="/Teacher" component={TeacherLayout} />
                <Route path="/Admin" component={AdminLayout} />
                </>
              )
          }
          <Route exact path="/" component={Loading} />
          <Route exact component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default BasicRoute