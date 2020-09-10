import React from 'react';
import {TwitterOutlined } from '@ant-design/icons'
import './ListItems.css'
import Ant from './Ant'
import Date1 from './date'

function ListItems(props){
    const items=props.items;
    const ListItems=items.map(item =>
    {
        return (<div className="list" key="Item.key">
            <Ant value={item.text} time={item.data}/>
        </div>
        );
    
    })
    return(
        <div>{ListItems}</div>
    )
}
export default ListItems;