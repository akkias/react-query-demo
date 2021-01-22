import React from 'react';
import { List, Avatar,Row,Col,message, Spin, Divider } from 'antd';
import { useQuery,useQueryClient } from 'react-query'
import axios from 'axios';
import { environments } from './env';


const Teacher = () => {

  const getTeacher = async() => {
   let response:any = await axios.get(`${environments.baseURL}/teacher`);
   return response;
  }

  
  const queryClient = useQueryClient();
  let { data , status, isLoading, isSuccess} = useQuery('Teacher', getTeacher);

  let studentData:any = queryClient.getQueryData('student');  
    console.log(studentData);
    
    return (
      <>
       <Divider> <h1 style={{color:'#1890ff'}}>Teacher</h1> </Divider>
       <Spin spinning={isLoading}>
        <Row gutter={20}> 
        <Col offset={8}>
        </Col>
            <Col xs={24} sm={24} md={17} lg={19} xl={6}>
              {
               isSuccess &&
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
       {
         studentData && 
         <>
         <Divider> <h1 style={{color:'#1890ff'}}>Student cached data</h1> </Divider>
       
          <Row gutter={20}> 
          <Col offset={8}>
          </Col>
              <Col xs={24} sm={24} md={17} lg={19} xl={6}>
                {
                studentData.data.map((item:any,index:number) => {
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
          </>
       }

      </>
       
    );
}

export default Teacher;
