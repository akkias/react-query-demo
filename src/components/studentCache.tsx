import React from 'react';
import { List, Avatar,Row,Col,message, Spin, Divider } from 'antd';
import { useQueryClient } from 'react-query'

const StudentCache = () => {
  const queryClient = useQueryClient();

  let studentData:any = queryClient.getQueryData('student');  
  // let { data } = studentData;
  //   console.log(data);
     
    return (
      <>
       {
         studentData ?
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
      : <Divider> <h1 style={{color:'#1890ff'}}>No Student Data Cached Yet!</h1> </Divider>
    }
      </>
       
    );
}

export default StudentCache;
