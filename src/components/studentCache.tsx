import React from 'react';
import { List, Avatar,Row,Col,message, Spin } from 'antd';
import { useQueryClient } from 'react-query'

const StudentCache = () => {
  const queryClient = useQueryClient();

     
    //  console.log(data);
     
    return (
      <>
       <h1>Student Cache</h1>
       {/* <Spin spinning={false}>
        <Row gutter={20}> 
        <Col offset={8}>
        </Col>
            <Col xs={24} sm={24} md={17} lg={19} xl={6}>
              {
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
       </Spin> */}
      </>
       
    );
}

export default StudentCache;
