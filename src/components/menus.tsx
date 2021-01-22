import React, { useState } from 'react'
import { Menu } from 'antd';
import { Link,useLocation } from 'react-router-dom';

const  Menus = () =>  {
   const location = useLocation();
   let [current , setCurrent] = useState(location.pathname=="/" ? '/student' : location.pathname)
  return (
    <Menu onClick={(e:any) => setCurrent(e.key)} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="/student" >
      <Link to="/student">
          Student
      </Link>
        </Menu.Item>
      <Menu.Item key="/teacher" >
        <Link to="/teacher">
          Teacher
        </Link>
      </Menu.Item>
      <Menu.Item key="/employee" >
      <Link to="/employee">
          Employee
        </Link>
      </Menu.Item>
      <Menu.Item key="/student-cache" >
      <Link to="/student-cache">
        Student Cache
        </Link>
      </Menu.Item>
    </Menu>
  );
}
    

export default Menus;
