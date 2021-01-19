import React from 'react'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


export default class Menus extends React.Component {
  state = {
    current: 'student',
  };

  handleClick = (e:any) => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="student" >
        <Link to="/student">
            Student
        </Link>
          </Menu.Item>
        <Menu.Item key="teacher" >
          <Link to="/teacher">
            Teacher
          </Link>
        </Menu.Item>
        <Menu.Item key="employee" >
        <Link to="/employee">
            Employee
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

