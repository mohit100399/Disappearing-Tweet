import React from 'react';

import 'antd/dist/antd.css';

import { DatePicker, Space } from 'antd';

const date = (props) => {
    const { RangePicker } = DatePicker;
    return (
        
        <Space direction="vertical" size={12}>
            <RangePicker />
        </Space>
    );
}

export default date;


