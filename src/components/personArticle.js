import React from 'react';
import { List, Avatar } from 'antd';

const PersonArticle = () => {

    let { item } = this.props;
    
    return (
        <List.Item key={index}>
            <List.Item.Meta
            avatar={<Avatar src={item.profile} style={{height:60,width:70}}/>}
            title={<a href={item.profile} target="_blank" style={{fontSize:25}}>{item.name}</a>}
            description={item.address}
            />
        </List.Item>
       
    );
}

export default PersonArticle;
