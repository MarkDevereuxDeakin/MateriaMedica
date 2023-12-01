//https://react.semantic-ui.com/collections/menu/#types-tabular-on-top - accessed 22/09/2021
import React, { Component } from 'react'
import {Menu, Segment} from 'semantic-ui-react'
import ToxinList from './ToxinList.jsx'
import Background from '../img/background.jpg'
import '../index.js'
import './NavMenu.css'


export default class MenuExampleTabularOnTop extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })  

  render() {
    const { activeItem } = this.state

    return (        
      <div>
        <Menu pointing>
          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Plant Toxins'
            active={activeItem === 'Plant Toxins'}
            onClick={this.handleItemClick}
          />        
        </Menu>        
        {activeItem === 'Plant Toxins' ? <ToxinList className='table'/> : <ToxinList className='non-table'/>}        
      </div>
    )
  }
}
