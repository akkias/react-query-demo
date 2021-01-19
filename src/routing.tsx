import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import Student from './components/student';
import Employee from './components/employee';
import Teacher from './components/teacher';

const {  Footer ,Content} = Layout;
const Routing = () => {
  return (
    <Content className="site-layout" style={{ padding: '20px 20px', minHeight: 480 }}>
        <Route exact path="/student" component={Student} />
        <Route exact path="/">
          <Redirect to="/student" />
        </Route>
        <Route exact path="/employee" component={Employee} />
        <Route exact path="/teacher" component={Teacher} />
      </Content>
  );
};

export default Routing;


