import React from 'react';
import { List, Avatar,Row,Col,message, Spin } from 'antd';
import { useQuery } from 'react-query'
import axios from 'axios';

const getEmployee = async() => {
 let response:any = await axios.get('https://my-json-server.typicode.com/TrushantB/mock-data/employee');
 if(!response) {
   message.error('Employee fetching failed')
 }
 return response;
}

const Employee = () => {

    let { data , status} = useQuery('Employee', getEmployee);
    
    return (
      <>
       <h1>Employee</h1>
       <Spin spinning={status == 'loading'}>
        <Row gutter={20}> 
        <Col offset={8}>
        </Col>
            <Col xs={24} sm={24} md={17} lg={19} xl={6}>
              {
               status == 'success' &&
               data.data.map((item:any,index:number) => {
                 return(
                  <List.Item key={index}>
                  <List.Item.Meta
                    avatar={<Avatar src={item.profile} style={{height:60,width:70}}/>}
                    title={<a href={item.profile} target="_blank" style={{fontSize:25}}>{item.name}</a>}
                    description={item.address}
                    />
                </List.Item>
                 )
               })
            
              }
            </Col>
          </Row>
       </Spin>
      </>
       
    );
}

export default Employee;