import React, { Component } from 'react'

export class Header extends Component {
  render() {
      const headerStyle={
          fontfamily:'Sans-serif',
          size: '30px',
          color: 'white',
          width: '100%',
          height:'10%',
          textAlign: 'center',
          backgroundColor: '#333',
          padding: '10px'
      }
    return (
      <div>
        <h1 style={headerStyle}>TODO LIST</h1>
      </div>
    )
  }
}

export default Header
