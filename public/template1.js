import React from 'react';
import 'antd/dist/antd.css';

import { List, Avatar } from 'antd';



function template(props) {
  const data = [
    {
      title: 'Ant Design Title 1',
      desc: props.value,
      time: props.time
    }
  ];
  return (
    <div>

      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.desc}
              time={item.time}
            />
          </List.Item>
        )}
      />
  
    </div>
  );
}

export default template;