import React, { Component } from 'react'

class Header extends Component {

  render() {
    return (
        <header ref={this.props.headerRef} role="banner" className="header">
         <nav role="navigation" area-label="Yesmart Menu" className="top-nav">
           <ul className="top-nav-list">
             <li className="top-nav-li">
               Home
             </li>
             <li className="top-nav-li">
               Our Services
             </li>
           </ul>
         </nav>
      </header>
    )
  }
}

export default Header
