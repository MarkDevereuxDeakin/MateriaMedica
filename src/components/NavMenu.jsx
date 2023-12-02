//https://react.semantic-ui.com/collections/menu/#types-tabular-on-top - accessed 22/09/2021
import React, { Component } from 'react'
import {Menu} from 'semantic-ui-react'
import ToxinList from './ToxinList.jsx'
import KampoList from './KampoList.jsx'
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
            name='Kampo'
            active={activeItem === 'Kampo'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Plant Toxins'
            active={activeItem === 'Plant Toxins'}
            onClick={this.handleItemClick}
          />        
        </Menu>              
        {function() {
        switch(activeItem) {
         case 'Kampo':
          return <KampoList className='table'/>;
        case 'Plant Toxins':
          return <ToxinList className='table'/>;
         default:
          return <KampoList className='non-table'/>;
         }
        }
      ()}       
      </div>
    )
  }
}
