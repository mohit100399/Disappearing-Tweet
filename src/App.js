import React from 'react';
import { TwitterOutlined } from '@ant-design/icons'

import './App.css';
import ListItems from './ListItems'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }

    //this.handleInput = this.handleInput.bind(this);
    //this.addItem = this.addItem.bind(this);

  }
  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="inner">
            <h1><TwitterOutlined />Disappearing&nbsp;<span>Twitter</span></h1>
            <form id="to-do-form" onSubmit={this.addItem}>
              <table style={{ width: "90%" }} cellSpacing="1px" border="0px">
                <tr>
                  <td>
                    <input style={{ width: "100%" }} type="text" placeholder="Type a text" value={this.state.currentItem.text} onChange={this.handleInput}></input>
                  </td>
                  <td>
                    <input type="date" />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <button style={{ width: "50%" }} type="Tweet">Tweet</button>
                  </td>
                </tr>
              </table>
            </form>
            <br></br>
            <ListItems items={this.state.items}></ListItems>
          </div>
        </div>
      </div >

    )
  }
}

export default App;